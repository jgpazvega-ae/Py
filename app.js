'use strict';

// ===== State =====
const state = {
  xp: 0,
  level: 1,
  completed: new Set(),
  stars: {},
  worldsCompleted: [],
  sessionCompleted: 0,
  noHintStreak: 0,
  achievements: new Set(),
  currentExercise: null,
  currentHintIndex: 0,
  usedHintThisExercise: false,
  pyodide: null,
  editor: null,
};

const XP_PER_LEVEL = 500;
const LEVELS = [
  'Principiante', 'Aprendiz', 'Novato', 'Practicante', 'Intermedio',
  'Avanzado', 'Experto', 'Maestro', 'Gran Maestro', 'PyMaestro'
];

// ===== Save/Load =====
function saveState() {
  const data = {
    xp: state.xp,
    level: state.level,
    completed: [...state.completed],
    stars: state.stars,
    worldsCompleted: state.worldsCompleted,
    achievements: [...state.achievements],
    noHintStreak: state.noHintStreak,
  };
  localStorage.setItem('pyquest_save', JSON.stringify(data));
}

function loadState() {
  try {
    const raw = localStorage.getItem('pyquest_save');
    if (!raw) return;
    const data = JSON.parse(raw);
    state.xp = data.xp || 0;
    state.level = data.level || 1;
    state.completed = new Set(data.completed || []);
    state.stars = data.stars || {};
    state.worldsCompleted = data.worldsCompleted || [];
    state.achievements = new Set(data.achievements || []);
    state.noHintStreak = data.noHintStreak || 0;
  } catch (e) {
    console.error('Error loading save:', e);
  }
}

// ===== Pyodide =====
async function initPyodide() {
  const bar = document.getElementById('loading-bar');
  const status = document.getElementById('loading-status');
  const updateProgress = (pct, msg) => {
    bar.style.width = pct + '%';
    status.textContent = msg;
  };

  updateProgress(20, 'Iniciando Pyodide...');
  try {
    updateProgress(40, 'Descargando Python (puede tardar unos segundos)...');
    state.pyodide = await loadPyodide();
    updateProgress(80, 'Configurando el entorno...');

    // Redirect stdout/stderr
    await state.pyodide.runPythonAsync(`
import sys, io
class _Capture:
    def __init__(self): self.data = []
    def write(self, s): self.data.append(str(s))
    def flush(self): pass
    def getvalue(self): return ''.join(self.data)
    def clear(self): self.data = []

sys.stdout = _Capture()
sys.stderr = _Capture()
`);

    updateProgress(100, '¡Listo!');
    document.getElementById('status-pyodide').textContent = 'Python listo ✓';
  } catch (e) {
    updateProgress(100, 'Error al cargar Python');
    document.getElementById('status-pyodide').textContent = 'Error';
    console.error(e);
  }
}

async function runPython(code) {
  if (!state.pyodide) return { stdout: '', stderr: 'Python aún se está cargando...' };
  try {
    await state.pyodide.runPythonAsync('sys.stdout.clear(); sys.stderr.clear()');
    let error = '';
    try {
      await state.pyodide.runPythonAsync(code);
    } catch (e) {
      error = e.message || String(e);
      // Clean up pyodide traceback noise
      const lines = error.split('\n');
      const filtered = lines.filter(l => !l.includes('File "<exec>"') && !l.includes('_pyodide'));
      error = filtered.join('\n').trim();
    }
    const stdout = await state.pyodide.runPythonAsync('sys.stdout.getvalue()');
    const stderr_out = await state.pyodide.runPythonAsync('sys.stderr.getvalue()');
    return { stdout: stdout || '', stderr: error || stderr_out || '' };
  } catch (e) {
    return { stdout: '', stderr: String(e) };
  }
}

// ===== Tests =====
async function runTests(exercise, code, stdout) {
  const results = [];

  for (const test of exercise.tests) {
    let pass = false;
    let detail = '';

    switch (test.type) {
      case 'output_contains':
        pass = stdout.includes(test.text);
        detail = pass ? `Salida contiene "${test.text}"` : `Esperaba encontrar "${test.text}"`;
        break;

      case 'not_output_contains':
        pass = !stdout.includes(test.text);
        detail = pass ? `Salida no contiene "${test.text}" ✓` : `No debería aparecer "${test.text}"`;
        break;

      case 'exact':
        pass = stdout.trim() === test.expected;
        detail = pass ? 'Salida exacta correcta' : `Esperaba: "${test.expected}", obtuve: "${stdout.trim()}"`;
        break;

      case 'output_lines': {
        const lines = stdout.trim().split('\n').filter(l => l.length > 0);
        pass = lines.length === test.count;
        detail = `${lines.length} líneas de salida (esperaba ${test.count})`;
        break;
      }

      case 'has_variable': {
        const re = new RegExp(`\\b${test.name}\\s*=`);
        pass = re.test(code);
        detail = pass ? `Variable "${test.name}" encontrada` : `Variable "${test.name}" no definida`;
        break;
      }

      case 'has_if':
        pass = /\bif\b/.test(code);
        detail = pass ? 'Usa if ✓' : 'Necesitas un if';
        break;

      case 'has_elif':
        pass = /\belif\b/.test(code);
        detail = pass ? 'Usa elif ✓' : 'Necesitas usar elif';
        break;

      case 'has_for':
        pass = /\bfor\b/.test(code);
        detail = pass ? 'Usa for ✓' : 'Necesitas un bucle for';
        break;

      case 'has_while':
        pass = /\bwhile\b/.test(code);
        detail = pass ? 'Usa while ✓' : 'Necesitas un bucle while';
        break;

      case 'has_def':
        pass = /\bdef\b/.test(code);
        detail = pass ? 'Define una función ✓' : 'Necesitas definir una función con def';
        break;

      case 'has_return':
        pass = /\breturn\b/.test(code);
        detail = pass ? 'Usa return ✓' : 'Necesitas usar return';
        break;

      case 'has_and_or':
        pass = /\band\b|\bor\b/.test(code);
        detail = pass ? 'Usa and/or ✓' : 'Necesitas usar and u or';
        break;

      case 'has_fstring':
        pass = /f["']/.test(code);
        detail = pass ? 'Usa f-string ✓' : 'Necesitas usar un f-string (f"...")';
        break;

      case 'has_list_with_elements': {
        const listMatch = code.match(/=\s*\[([^\]]+)\]/);
        if (listMatch) {
          const items = listMatch[1].split(',').filter(s => s.trim().length > 0);
          pass = items.length >= (test.min || 1);
          detail = `Lista con ${items.length} elementos (mínimo ${test.min})`;
        } else {
          pass = false;
          detail = 'No encontré una lista con elementos';
        }
        break;
      }

      case 'runs_without_error':
        pass = true; // If we got here, no fatal error
        detail = 'Código ejecutado sin errores ✓';
        break;

      case 'output_has_variable_value':
        pass = stdout.trim().length > 0;
        detail = pass ? 'Imprime algún valor ✓' : 'No hay salida';
        break;

      default:
        if (test.expected !== undefined) {
          pass = stdout.trim().includes(String(test.expected));
          detail = `Salida contiene "${test.expected}"`;
        }
    }

    results.push({ pass, detail, test });
  }

  return results;
}

// ===== UI Helpers =====
function mdToHtml(text) {
  return text
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}

function showXpPopup(amount) {
  const popup = document.getElementById('xp-popup');
  document.getElementById('xp-amount').textContent = amount;
  popup.classList.remove('hidden');
  setTimeout(() => popup.classList.add('hidden'), 1300);
}

function showAchievementToast(ach) {
  const toast = document.getElementById('achievement-toast');
  document.getElementById('toast-icon').textContent = ach.icon;
  document.getElementById('toast-name').textContent = ach.name;
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 3500);
}

function updateStatusBar() {
  const level = Math.min(Math.floor(state.xp / XP_PER_LEVEL) + 1, 10);
  state.level = level;
  const levelName = LEVELS[level - 1] || LEVELS[LEVELS.length - 1];
  document.getElementById('status-xp').textContent = `⚡ ${state.xp} XP`;
  document.getElementById('status-level').textContent = `Nivel ${level} · ${levelName}`;
  document.getElementById('status-progress').textContent = `${state.completed.size}/25 ejercicios`;
}

// ===== Explorer =====
function buildExplorer() {
  const container = document.getElementById('explorer-content');
  container.innerHTML = '';

  WORLDS.forEach(world => {
    const totalEx = world.exercises.length;
    const doneEx = world.exercises.filter(ex => state.completed.has(ex.id)).length;
    const pct = (doneEx / totalEx) * 100;
    const isComplete = doneEx === totalEx;

    const group = document.createElement('div');
    group.className = 'world-group';

    const header = document.createElement('div');
    header.className = `world-header${isComplete ? ' complete' : ''}`;
    header.innerHTML = `
      <span class="world-icon">${world.icon}</span>
      <span class="world-name">${world.name}</span>
      <span class="world-chevron">▶</span>
      <div class="world-progress-bar">
        <div class="world-progress-fill" style="width:${pct}%;background:${world.color}"></div>
      </div>
    `;

    const list = document.createElement('div');
    list.className = 'exercise-list';

    world.exercises.forEach((ex, idx) => {
      const done = state.completed.has(ex.id);
      const isLocked = idx > 0 && !state.completed.has(world.exercises[idx - 1].id) && world.id > 1;

      const item = document.createElement('div');
      item.className = `exercise-item${done ? ' completed' : ''}${state.currentExercise?.id === ex.id ? ' active' : ''}`;
      item.innerHTML = `
        <span class="ex-status">${done ? '✓' : (idx === 0 ? '▶' : `${idx + 1}`)}</span>
        <span class="ex-name">${ex.title}</span>
        <span class="ex-xp">+${ex.xp}</span>
      `;

      item.addEventListener('click', () => loadExercise(ex));
      list.appendChild(item);
    });

    header.addEventListener('click', () => {
      header.classList.toggle('open');
      list.classList.toggle('open');
    });

    // Auto-open current world
    if (world.exercises.some(ex => state.currentExercise?.id === ex.id) ||
        world.id === getCurrentWorldId()) {
      header.classList.add('open');
      list.classList.add('open');
    }

    group.appendChild(header);
    group.appendChild(list);
    container.appendChild(group);
  });
}

function getCurrentWorldId() {
  for (const world of WORLDS) {
    const firstIncomplete = world.exercises.find(ex => !state.completed.has(ex.id));
    if (firstIncomplete) return world.id;
  }
  return 1;
}

function buildAchievements() {
  const container = document.getElementById('achievements-content');
  container.innerHTML = '';
  ACHIEVEMENTS.forEach(ach => {
    const unlocked = state.achievements.has(ach.id);
    const div = document.createElement('div');
    div.className = `achievement-item${unlocked ? '' : ' locked'}`;
    div.innerHTML = `
      <div class="ach-icon">${ach.icon}</div>
      <div class="ach-info">
        <div class="ach-name">${ach.name}</div>
        <div class="ach-desc">${ach.desc}</div>
      </div>
      ${unlocked ? '<div class="ach-check">✓</div>' : ''}
    `;
    container.appendChild(div);
  });
}

function buildReference() {
  const container = document.getElementById('reference-content');
  const sections = [
    { title: 'Variables', items: [
      { code: 'nombre = "Ana"', desc: 'Variable de texto (str)' },
      { code: 'edad = 25', desc: 'Variable entera (int)' },
      { code: 'precio = 19.99', desc: 'Variable decimal (float)' },
      { code: 'activo = True', desc: 'Variable booleana (bool)' },
    ]},
    { title: 'Print & F-strings', items: [
      { code: 'print("Hola")', desc: 'Imprimir texto' },
      { code: 'print(variable)', desc: 'Imprimir variable' },
      { code: 'f"Hola {nombre}"', desc: 'F-string con variable' },
    ]},
    { title: 'Condicionales', items: [
      { code: 'if x > 0:', desc: 'Si x es mayor que 0' },
      { code: 'elif x == 0:', desc: 'Si no, si x es 0' },
      { code: 'else:', desc: 'En cualquier otro caso' },
    ]},
    { title: 'Bucles', items: [
      { code: 'for i in range(10):', desc: 'Repite 10 veces' },
      { code: 'for item in lista:', desc: 'Recorre cada elemento' },
      { code: 'while condicion:', desc: 'Mientras condición sea True' },
      { code: 'break', desc: 'Sale del bucle' },
      { code: 'continue', desc: 'Salta a la siguiente iteración' },
    ]},
    { title: 'Listas', items: [
      { code: 'lista = [1, 2, 3]', desc: 'Crear lista' },
      { code: 'lista[0]', desc: 'Primer elemento' },
      { code: 'lista[-1]', desc: 'Último elemento' },
      { code: 'lista.append(x)', desc: 'Agregar al final' },
      { code: 'lista.remove(x)', desc: 'Eliminar elemento' },
      { code: 'len(lista)', desc: 'Longitud de la lista' },
      { code: '[x**2 for x in range(5)]', desc: 'List comprehension' },
    ]},
    { title: 'Funciones', items: [
      { code: 'def funcion():', desc: 'Definir función' },
      { code: 'def f(a, b=10):', desc: 'Con parámetro por defecto' },
      { code: 'return valor', desc: 'Retornar un valor' },
      { code: 'resultado = f(5)', desc: 'Llamar y guardar resultado' },
    ]},
    { title: 'Operadores', items: [
      { code: '+ - * / // % **', desc: 'Aritméticos' },
      { code: '== != > < >= <=', desc: 'Comparación' },
      { code: 'and  or  not', desc: 'Lógicos' },
      { code: 'x += 1', desc: 'Incremento (x = x + 1)' },
    ]},
  ];

  container.innerHTML = sections.map(s => `
    <div class="ref-section">
      <h4>${s.title}</h4>
      ${s.items.map(item => `
        <div class="ref-item">
          <code>${item.code}</code>
          <small>${item.desc}</small>
        </div>
      `).join('')}
    </div>
  `).join('');
}

function buildWelcome() {
  const statsEl = document.getElementById('welcome-stats');
  const level = Math.min(Math.floor(state.xp / XP_PER_LEVEL) + 1, 10);
  const xpInLevel = state.xp % XP_PER_LEVEL;
  statsEl.innerHTML = `
    <div class="stat-item">
      <div class="stat-value">${state.completed.size}</div>
      <div class="stat-label">Ejercicios</div>
    </div>
    <div class="stat-item">
      <div class="stat-value">${state.xp}</div>
      <div class="stat-label">XP Total</div>
    </div>
    <div class="stat-item">
      <div class="stat-value">${level}</div>
      <div class="stat-label">Nivel</div>
    </div>
    <div class="stat-item">
      <div class="stat-value">${state.achievements.size}</div>
      <div class="stat-label">Logros</div>
    </div>
  `;

  const cardsEl = document.getElementById('world-cards');
  cardsEl.innerHTML = WORLDS.map(world => {
    const totalEx = world.exercises.length;
    const doneEx = world.exercises.filter(ex => state.completed.has(ex.id)).length;
    const pct = (doneEx / totalEx) * 100;
    const isComplete = doneEx === totalEx;
    return `
      <div class="world-card${isComplete ? ' complete' : ''}" data-world="${world.id}">
        <div class="wc-icon">${world.icon}</div>
        <div class="wc-name">${world.name}</div>
        <div class="wc-progress">${doneEx}/${totalEx} ejercicios</div>
        <div class="wc-bar">
          <div class="wc-bar-fill" style="width:${pct}%;background:${world.color}"></div>
        </div>
      </div>
    `;
  }).join('');

  cardsEl.querySelectorAll('.world-card').forEach(card => {
    card.addEventListener('click', () => {
      const worldId = parseInt(card.dataset.world);
      const world = WORLDS.find(w => w.id === worldId);
      const firstEx = world.exercises.find(ex => !state.completed.has(ex.id)) || world.exercises[0];
      loadExercise(firstEx);
    });
  });
}

// ===== Load Exercise =====
function loadExercise(exercise) {
  state.currentExercise = exercise;
  state.currentHintIndex = 0;
  state.usedHintThisExercise = false;

  // Show exercise screen
  document.getElementById('welcome-screen').classList.add('hidden');
  const screen = document.getElementById('exercise-screen');
  screen.classList.remove('hidden');

  // Find world
  const world = WORLDS.find(w => w.exercises.some(ex => ex.id === exercise.id));
  const exIdx = world.exercises.findIndex(ex => ex.id === exercise.id);

  // Tab
  document.getElementById('tab-filename').textContent = `${exercise.id.replace('-', '_')}.py`;
  document.getElementById('editor-filename').textContent = `${exercise.id.replace('-', '_')}.py`;

  // Progress
  const worldDone = world.exercises.filter(ex => state.completed.has(ex.id)).length;
  document.getElementById('ex-progress').textContent = `${world.icon} ${world.name} · ${worldDone}/${world.exercises.length}`;

  // Header
  document.getElementById('ex-world-badge').textContent = `${world.icon} ${world.name}`;
  document.getElementById('ex-world-badge').style.color = world.color;
  document.getElementById('ex-title').textContent = exercise.title;
  document.getElementById('ex-xp').textContent = `+${exercise.xp} XP`;

  // Story
  document.getElementById('ex-story').innerHTML = mdToHtml(exercise.story);

  // Description
  document.getElementById('ex-description').innerHTML = mdToHtml(exercise.description);

  // Instructions
  document.getElementById('ex-instructions').innerHTML = mdToHtml(exercise.instructions);

  // Nav buttons
  document.getElementById('prev-btn').disabled = exIdx === 0 && world.id === 1;
  document.getElementById('next-btn').disabled = exIdx === world.exercises.length - 1 && world.id === WORLDS.length;

  // Hints
  document.getElementById('hints-left').textContent = exercise.hints.length - state.currentHintIndex;
  document.getElementById('hints-panel').classList.add('hidden');
  renderHints(false);

  // Reset terminal
  resetTerminal();

  // Reset tests
  document.getElementById('tests-output').innerHTML = '<div class="tests-empty">Ejecuta tu código para ver los resultados de las pruebas</div>';

  // Hide success
  document.getElementById('success-overlay').classList.add('hidden');

  // Load saved code or starter
  const savedCode = localStorage.getItem(`pyquest_code_${exercise.id}`) || exercise.starter;

  if (state.editor) {
    state.editor.setValue(savedCode);
    state.editor.clearHistory();
  }

  // Rebuild explorer to update active state
  buildExplorer();
}

function resetTerminal() {
  document.getElementById('terminal-output').innerHTML = `
    <div class="terminal-welcome">$ python ${state.currentExercise?.id?.replace('-', '_') || 'ejercicio'}.py</div>
    <div class="terminal-hint-text">Presiona ▶ Ejecutar o Ctrl+Enter para correr tu código</div>
  `;
}

// ===== Hints =====
function renderHints(show) {
  const exercise = state.currentExercise;
  if (!exercise) return;

  const list = document.getElementById('hints-list');
  list.innerHTML = '';

  exercise.hints.forEach((hint, i) => {
    const unlocked = i < state.currentHintIndex;
    const div = document.createElement('div');
    div.className = `hint-item${unlocked ? '' : ' hint-locked'}`;
    div.innerHTML = `
      <span class="hint-num">${i + 1}.</span>
      <span class="hint-text">${unlocked ? mdToHtml(hint) : '🔒 Haz clic en "Pista" para desbloquear'}</span>
    `;
    if (!unlocked) {
      div.addEventListener('click', () => revealNextHint());
    }
    list.appendChild(div);
  });
}

function revealNextHint() {
  const exercise = state.currentExercise;
  if (!exercise) return;

  if (state.currentHintIndex >= exercise.hints.length) {
    document.getElementById('hint-btn').disabled = true;
    return;
  }

  state.usedHintThisExercise = true;
  state.noHintStreak = 0;
  state.currentHintIndex++;

  const left = exercise.hints.length - state.currentHintIndex;
  document.getElementById('hints-left').textContent = left;
  if (left === 0) document.getElementById('hint-btn').disabled = true;

  document.getElementById('hints-panel').classList.remove('hidden');
  renderHints(true);
}

// ===== Run Code =====
async function executeCode() {
  const exercise = state.currentExercise;
  if (!exercise) return;

  const code = state.editor.getValue();
  localStorage.setItem(`pyquest_code_${exercise.id}`, code);

  // Show running state
  const btn = document.getElementById('run-btn');
  btn.textContent = '⏳ Ejecutando...';
  btn.disabled = true;

  const terminalEl = document.getElementById('terminal-output');
  terminalEl.innerHTML = `<div class="terminal-prompt">$ python ${exercise.id.replace('-', '_')}.py</div>`;

  const { stdout, stderr } = await runPython(code);

  // Display output
  if (stdout) {
    stdout.split('\n').forEach(line => {
      const div = document.createElement('div');
      div.className = 'terminal-output-line';
      div.textContent = line;
      terminalEl.appendChild(div);
    });
  }

  if (stderr) {
    const div = document.createElement('div');
    div.className = 'terminal-output-line error';
    div.textContent = '❌ ' + stderr;
    terminalEl.appendChild(div);
  }

  if (!stdout && !stderr) {
    const div = document.createElement('div');
    div.className = 'terminal-output-line info';
    div.textContent = '(sin salida)';
    terminalEl.appendChild(div);
  }

  // Switch to terminal tab
  switchOutputTab('terminal');

  // Run tests
  const testResults = await runTests(exercise, code, stdout || '');
  displayTestResults(testResults);

  // Check if all passed
  const allPass = testResults.every(r => r.pass) && !stderr;
  if (allPass) {
    onExerciseComplete(exercise);
  }

  btn.textContent = '▶ Ejecutar';
  btn.innerHTML = '▶ Ejecutar <kbd>Ctrl+↵</kbd>';
  btn.disabled = false;
}

function displayTestResults(results) {
  const container = document.getElementById('tests-output');
  const passed = results.filter(r => r.pass).length;
  const total = results.length;

  container.innerHTML = '';

  const summary = document.createElement('div');
  summary.className = `tests-summary ${passed === total ? 'all-pass' : 'some-fail'}`;
  summary.textContent = passed === total
    ? `✅ ${passed}/${total} pruebas pasadas`
    : `⚠️ ${passed}/${total} pruebas pasadas`;
  container.appendChild(summary);

  const list = document.createElement('div');
  list.style.padding = '10px';
  results.forEach((r, i) => {
    const item = document.createElement('div');
    item.className = `test-item ${r.pass ? 'pass' : 'fail'}`;
    item.innerHTML = `
      <span class="test-icon">${r.pass ? '✅' : '❌'}</span>
      <div class="test-info">
        <div class="test-desc">Prueba ${i + 1}</div>
        <div class="test-detail">${r.detail}</div>
      </div>
    `;
    list.appendChild(item);
  });
  container.appendChild(list);

  // Switch to tests tab to show results
  switchOutputTab('tests');
}

// ===== Exercise Complete =====
function onExerciseComplete(exercise) {
  const alreadyDone = state.completed.has(exercise.id);
  if (!alreadyDone) {
    state.completed.add(exercise.id);
    state.xp += exercise.xp;
    state.sessionCompleted++;
    if (!state.usedHintThisExercise) state.noHintStreak++;

    // Check world completion
    const world = WORLDS.find(w => w.exercises.some(ex => ex.id === exercise.id));
    const worldDone = world.exercises.every(ex => state.completed.has(ex.id));
    if (worldDone && !state.worldsCompleted.includes(world.id)) {
      state.worldsCompleted.push(world.id);
    }

    checkAchievements();
    saveState();
    updateStatusBar();
    showXpPopup(exercise.xp);
  }

  // Show success overlay
  const starsCount = state.usedHintThisExercise ? 2 : 3;
  state.stars[exercise.id] = Math.max(state.stars[exercise.id] || 0, starsCount);

  const emojis = ['🎉', '🚀', '⭐', '🏆', '💪', '🎯'];
  document.getElementById('success-emoji').textContent = emojis[Math.floor(Math.random() * emojis.length)];

  const titles = alreadyDone
    ? ['¡Ya lo resolviste!', '¡Buen repaso!', '¡Perfecto de nuevo!']
    : ['¡Excelente!', '¡Increíble!', '¡Lo lograste!', '¡Brillante!'];
  document.getElementById('success-title').textContent = titles[Math.floor(Math.random() * titles.length)];

  document.getElementById('success-msg').textContent = alreadyDone
    ? 'Código perfecto. ¡Ya dominás este ejercicio!'
    : `¡Completaste "${exercise.title}"!`;

  document.getElementById('success-stars').textContent = '⭐'.repeat(starsCount) + '☆'.repeat(3 - starsCount);
  document.getElementById('success-xp').textContent = alreadyDone ? 'Ejercicio completado ✓' : `+${exercise.xp} XP`;

  document.getElementById('success-overlay').classList.remove('hidden');
  buildExplorer();
  buildWelcome();
}

function checkAchievements() {
  const stats = {
    completed: state.completed.size,
    worldsCompleted: state.worldsCompleted,
    xp: state.xp,
    sessionCompleted: state.sessionCompleted,
    noHintStreak: state.noHintStreak,
  };

  ACHIEVEMENTS.forEach(ach => {
    if (!state.achievements.has(ach.id) && ach.condition(stats)) {
      state.achievements.add(ach.id);
      setTimeout(() => showAchievementToast(ach), 800);
    }
  });

  buildAchievements();
}

// ===== Navigation =====
function navigateExercise(direction) {
  const exercise = state.currentExercise;
  if (!exercise) return;

  const allExercises = WORLDS.flatMap(w => w.exercises);
  const currentIdx = allExercises.findIndex(ex => ex.id === exercise.id);
  const nextIdx = currentIdx + direction;

  if (nextIdx >= 0 && nextIdx < allExercises.length) {
    loadExercise(allExercises[nextIdx]);
  }
}

function switchOutputTab(name) {
  document.querySelectorAll('.output-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.output-panel').forEach(p => p.classList.remove('active'));
  document.querySelector(`.output-tab[data-output="${name}"]`).classList.add('active');
  document.getElementById(`output-${name}`).classList.add('active');
}

function switchPanel(name) {
  document.querySelectorAll('.activity-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelector(`.activity-btn[data-panel="${name}"]`).classList.add('active');
  document.getElementById(`panel-${name}`).classList.add('active');
}

// ===== Editor Setup =====
function initEditor() {
  const container = document.getElementById('editor-container');
  state.editor = CodeMirror(container, {
    mode: 'python',
    theme: 'dracula',
    lineNumbers: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    indentUnit: 4,
    tabSize: 4,
    indentWithTabs: false,
    lineWrapping: false,
    extraKeys: {
      'Ctrl-Enter': executeCode,
      'Cmd-Enter': executeCode,
      'Tab': (cm) => {
        if (cm.somethingSelected()) {
          cm.indentSelection('add');
        } else {
          cm.replaceSelection('    ', 'end');
        }
      },
      'Ctrl-/': (cm) => cm.execCommand('toggleComment'),
    },
  });

  // Theme select
  document.getElementById('theme-select').addEventListener('change', (e) => {
    state.editor.setOption('theme', e.target.value);
  });

  // Font size select
  document.getElementById('font-select').addEventListener('change', (e) => {
    document.querySelector('.CodeMirror').style.fontSize = e.target.value + 'px';
  });
}

// ===== Init =====
async function init() {
  loadState();

  // Start Pyodide in parallel with UI setup
  const pyodidePromise = initPyodide();

  // Build UI
  initEditor();
  buildExplorer();
  buildAchievements();
  buildReference();
  buildWelcome();
  updateStatusBar();

  // Wait for Pyodide
  await pyodidePromise;

  // Show app
  document.getElementById('loading-screen').style.display = 'none';
  document.getElementById('app').classList.remove('hidden');

  // Event listeners
  document.getElementById('run-btn').addEventListener('click', executeCode);
  document.getElementById('clear-btn').addEventListener('click', resetTerminal);

  document.getElementById('hint-btn').addEventListener('click', revealNextHint);
  document.getElementById('close-hints').addEventListener('click', () => {
    document.getElementById('hints-panel').classList.add('hidden');
  });

  document.getElementById('reset-code-btn').addEventListener('click', () => {
    if (state.currentExercise && confirm('¿Reiniciar el código al inicial?')) {
      state.editor.setValue(state.currentExercise.starter);
    }
  });

  document.getElementById('prev-btn').addEventListener('click', () => navigateExercise(-1));
  document.getElementById('next-btn').addEventListener('click', () => navigateExercise(1));

  document.getElementById('next-exercise-btn').addEventListener('click', () => {
    document.getElementById('success-overlay').classList.add('hidden');
    navigateExercise(1);
  });

  document.getElementById('review-btn').addEventListener('click', () => {
    document.getElementById('success-overlay').classList.add('hidden');
  });

  document.getElementById('reset-btn').addEventListener('click', () => {
    if (confirm('¿Seguro que quieres reiniciar TODO tu progreso? Esta acción no se puede deshacer.')) {
      localStorage.removeItem('pyquest_save');
      WORLDS.forEach(w => w.exercises.forEach(ex => localStorage.removeItem(`pyquest_code_${ex.id}`)));
      location.reload();
    }
  });

  // Activity bar
  document.querySelectorAll('.activity-btn').forEach(btn => {
    btn.addEventListener('click', () => switchPanel(btn.dataset.panel));
  });

  // Output tabs
  document.querySelectorAll('.output-tab').forEach(tab => {
    tab.addEventListener('click', () => switchOutputTab(tab.dataset.output));
  });

  // Description toggle
  document.getElementById('desc-toggle').addEventListener('click', () => {
    const content = document.getElementById('ex-description');
    const toggle = document.getElementById('desc-toggle');
    content.classList.toggle('open');
    toggle.classList.toggle('open');
  });

  // Resize handle
  setupResizeHandle();

  // Load first incomplete exercise
  const firstIncomplete = WORLDS.flatMap(w => w.exercises).find(ex => !state.completed.has(ex.id));
  if (firstIncomplete) {
    // Open first world by default in explorer
    const firstHeader = document.querySelector('.world-header');
    if (firstHeader) {
      firstHeader.classList.add('open');
      firstHeader.nextElementSibling.classList.add('open');
    }
  }
}

// ===== Resize Handle =====
function setupResizeHandle() {
  const handle = document.getElementById('resize-handle');
  const app = document.getElementById('app');
  let dragging = false;
  let startX = 0;
  let startWidth = 0;

  handle.addEventListener('mousedown', (e) => {
    dragging = true;
    startX = e.clientX;
    const sidebar = document.querySelector('.sidebar');
    startWidth = sidebar.offsetWidth;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  });

  document.addEventListener('mousemove', (e) => {
    if (!dragging) return;
    const delta = e.clientX - startX;
    const newWidth = Math.max(180, Math.min(500, startWidth + delta));
    app.style.gridTemplateColumns = `${parseInt(getComputedStyle(document.documentElement).getPropertyValue('--activity-w'))}px ${newWidth}px 4px 1fr`;
  });

  document.addEventListener('mouseup', () => {
    dragging = false;
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
  });
}

// Start!
window.addEventListener('DOMContentLoaded', init);
