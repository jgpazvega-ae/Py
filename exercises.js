const WORLDS = [
  {
    id: 1,
    name: "Variables & Tipos",
    icon: "📦",
    color: "#4EC9B0",
    description: "Aprende a guardar información en variables",
    exercises: [
      {
        id: "1-1",
        title: "Tu primer saludo",
        xp: 50,
        description: "En Python, `print()` muestra texto en pantalla. Los textos van entre comillas.",
        story: "🤖 PyBot dice: ¡Hola! Para hablar con el mundo, necesitas usar `print()`. ¡Inténtalo!",
        instructions: "Escribe código que imprima exactamente: `Hola, Python!`",
        starter: '# Escribe tu código aquí:\n\n',
        solution: 'print("Hola, Python!")',
        tests: [
          { type: "output_contains", text: "Hola, Python!" }
        ],
        hints: [
          "Usa la función print() para mostrar texto",
          'El texto debe ir entre comillas: print("texto")',
          'La respuesta es: print("Hola, Python!")'
        ]
      },
      {
        id: "1-2",
        title: "Variables: cajitas de información",
        xp: 75,
        description: "Una variable es como una caja con nombre que guarda un valor. `nombre = \"Ana\"` crea una variable llamada nombre.",
        story: "🤖 PyBot dice: ¡Yo también tengo un nombre! Se llama PyBot. ¿Cómo te llamas tú? Guárdalo en una variable.",
        instructions: "Crea una variable `nombre` con tu nombre y otra `edad` con tu edad. Luego imprime ambas.",
        starter: '# Crea las variables (cambia los valores)\nnombre = "tu nombre"\nedad = 0\n\n# Imprime las variables\nprint(nombre)\nprint(edad)\n',
        solution: 'nombre = "Juan"\nedad = 25\nprint(nombre)\nprint(edad)',
        tests: [
          { type: "has_variable", name: "nombre" },
          { type: "has_variable", name: "edad" },
          { type: "runs_without_error" }
        ],
        hints: [
          'Las variables de texto usan comillas: nombre = "tu nombre"',
          "Los números no necesitan comillas: edad = 20",
          "Usa print(nombre) y print(edad) para mostrarlas"
        ]
      },
      {
        id: "1-3",
        title: "Tipos de datos",
        xp: 100,
        description: "Python tiene diferentes tipos: `str` (texto), `int` (entero), `float` (decimal), `bool` (True/False).",
        story: "🤖 PyBot dice: ¡Existen muchos tipos de información! Texto, números, decimales... ¡aprendamos cuáles son!",
        instructions: "Crea: `pais = \"Mexico\"`, `poblacion = 130000000`, `temperatura = 28.5`, `es_hermoso = True`. Luego imprime el tipo de cada una con `type()`.",
        starter: '# Crea las 4 variables\npais = \npoblacion = \ntemperatura = \nes_hermoso = \n\n# Imprime el tipo de cada variable\nprint(type(pais))\n',
        solution: 'pais = "Mexico"\npoblacion = 130000000\ntemperatura = 28.5\nes_hermoso = True\nprint(type(pais))\nprint(type(poblacion))\nprint(type(temperatura))\nprint(type(es_hermoso))',
        tests: [
          { type: "output_contains", text: "<class 'str'>" },
          { type: "output_contains", text: "<class 'int'>" },
          { type: "output_contains", text: "<class 'float'>" },
          { type: "output_contains", text: "<class 'bool'>" }
        ],
        hints: [
          'pais = "Mexico" (texto con comillas)',
          "poblacion = 130000000 (número entero, sin comillas)",
          "temperatura = 28.5 (decimal con punto)",
          "es_hermoso = True (booleano, sin comillas, con mayúscula)"
        ]
      },
      {
        id: "1-4",
        title: "Matemáticas básicas",
        xp: 100,
        description: "Python puede hacer cálculos: `+` suma, `-` resta, `*` multiplica, `/` divide, `**` potencia, `%` módulo.",
        story: "🤖 PyBot dice: ¡Soy una calculadora también! ¿Puedes resolver estos cálculos?",
        instructions: "Calcula e imprime: La suma de 15 + 27, el producto de 8 * 9, 100 dividido entre 4, y 2 elevado a la potencia 10.",
        starter: '# Realiza los 4 cálculos\nprint(  )  # 15 + 27\nprint(  )  # 8 * 9\nprint(  )  # 100 / 4\nprint(  )  # 2 ** 10\n',
        solution: 'print(15 + 27)\nprint(8 * 9)\nprint(100 / 4)\nprint(2 ** 10)',
        tests: [
          { type: "output_contains", text: "42" },
          { type: "output_contains", text: "72" },
          { type: "output_contains", text: "25.0" },
          { type: "output_contains", text: "1024" }
        ],
        hints: [
          "Suma: print(15 + 27)",
          "Multiplicación: print(8 * 9)",
          "División: print(100 / 4)",
          "Potencia: print(2 ** 10)"
        ]
      },
      {
        id: "1-5",
        title: "Texto dinámico con f-strings",
        xp: 125,
        description: "Los f-strings permiten insertar variables dentro de texto: `f\"Hola, {nombre}!\"`",
        story: "🤖 PyBot dice: ¡La magia de los f-strings! Puedes mezclar texto y variables de forma elegante.",
        instructions: "Crea variables `ciudad` y `año`. Luego imprime un mensaje usando f-string como: `Visité Ciudad de México en 2024`",
        starter: '# Crea las variables\nciudad = \nanio = \n\n# Usa un f-string para el mensaje\nprint(f"  ")\n',
        solution: 'ciudad = "Ciudad de México"\nanio = 2024\nprint(f"Visité {ciudad} en {anio}")',
        tests: [
          { type: "has_fstring" },
          { type: "runs_without_error" },
          { type: "output_has_variable_value" }
        ],
        hints: [
          'ciudad = "Ciudad de México"',
          "anio = 2024",
          'print(f"Visité {ciudad} en {anio}")',
          "La f va ANTES de las comillas"
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Condicionales",
    icon: "🔀",
    color: "#DCDCAA",
    description: "Toma decisiones con if, elif y else",
    exercises: [
      {
        id: "2-1",
        title: "¿Mayor o menor?",
        xp: 100,
        description: "Con `if` ejecutas código solo si se cumple una condición. Con `else` defines qué pasa si NO se cumple.",
        story: "🚪 PyBot dice: ¡Una puerta con guardia! Solo dejan entrar a mayores de 18. ¿Puedes escribir la lógica?",
        instructions: "Crea una variable `edad = 20`. Si es mayor o igual a 18, imprime `Puedes entrar`. Si no, imprime `No puedes entrar`.",
        starter: 'edad = 20\n\n# Escribe el if/else aquí\n',
        solution: 'edad = 20\n\nif edad >= 18:\n    print("Puedes entrar")\nelse:\n    print("No puedes entrar")',
        tests: [
          { type: "output_contains", text: "Puedes entrar" },
          { type: "has_if" }
        ],
        hints: [
          "La sintaxis es: if condicion:",
          "No olvides los dos puntos `:` al final del if",
          "El código dentro del if debe tener 4 espacios de sangría",
          'if edad >= 18:\n    print("Puedes entrar")'
        ]
      },
      {
        id: "2-2",
        title: "Clasificador de notas",
        xp: 125,
        description: "`elif` permite revisar múltiples condiciones en orden. Python las evalúa de arriba a abajo y ejecuta la primera que sea verdadera.",
        story: "📊 PyBot dice: El sistema de calificaciones necesita tu ayuda. ¡Construye el clasificador!",
        instructions: "Dada `nota = 85`, imprime: `Sobresaliente` (>=90), `Notable` (>=70), `Aprobado` (>=60), o `Reprobado` (menor a 60).",
        starter: 'nota = 85\n\n# Usa if / elif / else\n',
        solution: 'nota = 85\n\nif nota >= 90:\n    print("Sobresaliente")\nelif nota >= 70:\n    print("Notable")\nelif nota >= 60:\n    print("Aprobado")\nelse:\n    print("Reprobado")',
        tests: [
          { type: "output_contains", text: "Notable" },
          { type: "has_elif" }
        ],
        hints: [
          "Usa elif para condiciones adicionales",
          "El orden importa: empieza con la condición más alta",
          'elif nota >= 70:\n    print("Notable")'
        ]
      },
      {
        id: "2-3",
        title: "Número par o impar",
        xp: 100,
        description: "El operador `%` (módulo) da el residuo de una división. Si `numero % 2 == 0`, el número es par.",
        story: "🔢 PyBot dice: ¿Par o impar? ¡Esa es la pregunta! El módulo `%` es tu mejor amigo aquí.",
        instructions: "Con `numero = 42`, determina si es par o impar e imprime `42 es par` o `42 es impar`.",
        starter: 'numero = 42\n\n# Usa el operador % para verificar\n',
        solution: 'numero = 42\n\nif numero % 2 == 0:\n    print(f"{numero} es par")\nelse:\n    print(f"{numero} es impar")',
        tests: [
          { type: "output_contains", text: "par" },
          { type: "output_contains", text: "42" }
        ],
        hints: [
          "El módulo % da el residuo de la división",
          "Si numero % 2 == 0, el número es par",
          'print(f"{numero} es par")'
        ]
      },
      {
        id: "2-4",
        title: "Operadores lógicos",
        xp: 150,
        description: "`and` requiere que ambas condiciones sean verdaderas. `or` requiere que al menos una lo sea. `not` invierte el resultado.",
        story: "🎮 PyBot dice: Para entrar al torneo necesitas: tener más de 16 años Y haber ganado al menos 1 partida.",
        instructions: "Con `edad = 17` y `victorias = 3`, imprime `Puedes participar` si cumple ambas condiciones, si no `No cumples los requisitos`.",
        starter: 'edad = 17\nvictorias = 3\n\n# Usa and para combinar condiciones\n',
        solution: 'edad = 17\nvictorias = 3\n\nif edad > 16 and victorias >= 1:\n    print("Puedes participar")\nelse:\n    print("No cumples los requisitos")',
        tests: [
          { type: "output_contains", text: "Puedes participar" },
          { type: "has_and_or" }
        ],
        hints: [
          "Usa `and` para combinar dos condiciones",
          "Ambas condiciones deben ser verdaderas con `and`",
          "if edad > 16 and victorias >= 1:"
        ]
      },
      {
        id: "2-5",
        title: "FizzBuzz Clásico",
        xp: 200,
        description: "FizzBuzz es un ejercicio famoso en programación. Combina múltiples condiciones con módulo.",
        story: "🏆 PyBot dice: ¡El legendario FizzBuzz! Todo programador debe conocerlo. ¿Estás listo para el reto?",
        instructions: "Para `numero = 15`: si es divisible por 3 y 5 → `FizzBuzz`, solo por 3 → `Fizz`, solo por 5 → `Buzz`, si no → el número.",
        starter: 'numero = 15\n\n# Implementa FizzBuzz\n# Tip: verifica 3 y 5 juntos primero!\n',
        solution: 'numero = 15\n\nif numero % 3 == 0 and numero % 5 == 0:\n    print("FizzBuzz")\nelif numero % 3 == 0:\n    print("Fizz")\nelif numero % 5 == 0:\n    print("Buzz")\nelse:\n    print(numero)',
        tests: [
          { type: "output_contains", text: "FizzBuzz" }
        ],
        hints: [
          "Primero verifica si es divisible por AMBOS (3 y 5)",
          "15 % 3 == 0 y 15 % 5 == 0 → FizzBuzz",
          "Usa and para verificar ambas condiciones al mismo tiempo"
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Bucles",
    icon: "🔁",
    color: "#C586C0",
    description: "Repite acciones con for y while",
    exercises: [
      {
        id: "3-1",
        title: "Cuenta hasta 10",
        xp: 100,
        description: "`for i in range(n)` repite código `n` veces. `range(1, 11)` va del 1 al 10.",
        story: "🚀 PyBot dice: ¡Preparando el lanzamiento! Necesito que cuentes del 1 al 10.",
        instructions: "Usa un bucle `for` con `range()` para imprimir los números del 1 al 10, uno por línea.",
        starter: '# Usa for con range para contar\n',
        solution: 'for i in range(1, 11):\n    print(i)',
        tests: [
          { type: "output_contains", text: "1" },
          { type: "output_contains", text: "10" },
          { type: "has_for" },
          { type: "output_lines", count: 10 }
        ],
        hints: [
          "range(1, 11) genera números del 1 al 10",
          "El segundo número en range NO se incluye",
          "for i in range(1, 11):\n    print(i)"
        ]
      },
      {
        id: "3-2",
        title: "Suma acumulada",
        xp: 125,
        description: "Puedes acumular valores en una variable dentro de un bucle: `total = total + numero` o `total += numero`.",
        story: "💰 PyBot dice: ¡La alcancía mágica! Cada día suma monedas. ¿Cuánto tendrás después de una semana?",
        instructions: "Calcula la suma de todos los números del 1 al 100 usando un bucle for. Imprime el resultado final.",
        starter: 'total = 0\n\n# Usa un for para sumar del 1 al 100\n\nprint(f"La suma es: {total}")\n',
        solution: 'total = 0\n\nfor i in range(1, 101):\n    total += i\n\nprint(f"La suma es: {total}")',
        tests: [
          { type: "output_contains", text: "5050" }
        ],
        hints: [
          "Inicia total = 0 antes del bucle",
          "Dentro del for: total += i (o total = total + i)",
          "range(1, 101) va del 1 al 100",
          "La respuesta correcta es 5050"
        ]
      },
      {
        id: "3-3",
        title: "Bucle while",
        xp: 125,
        description: "`while condicion:` repite mientras la condición sea verdadera. ¡Cuidado con los bucles infinitos!",
        story: "🏃 PyBot dice: ¡Estoy corriendo! Seguiré mientras tenga energía. Modelemos esto con while.",
        instructions: "Usa `while` para imprimir números del 1 al 5. Necesitas una variable contador que aumente en cada iteración.",
        starter: 'contador = 1\n\n# Mientras contador sea <= 5, imprime y aumenta\n',
        solution: 'contador = 1\n\nwhile contador <= 5:\n    print(contador)\n    contador += 1',
        tests: [
          { type: "output_contains", text: "1" },
          { type: "output_contains", text: "5" },
          { type: "has_while" },
          { type: "output_lines", count: 5 }
        ],
        hints: [
          "while contador <= 5:",
          "Dentro del while: print(contador)",
          "¡No olvides aumentar el contador! contador += 1",
          "Sin contador += 1 tendrás un bucle infinito"
        ]
      },
      {
        id: "3-4",
        title: "Tabla de multiplicar",
        xp: 150,
        description: "Los bucles pueden generar patrones. `f\"{a} x {b} = {a*b}\"` formatea el resultado.",
        story: "📐 PyBot dice: ¡Las tablas de multiplicar! El secreto del éxito matemático.",
        instructions: "Imprime la tabla del 7: `7 x 1 = 7`, `7 x 2 = 14`, ..., `7 x 10 = 70`",
        starter: 'numero = 7\n\n# Genera la tabla de multiplicar\n',
        solution: 'numero = 7\n\nfor i in range(1, 11):\n    print(f"{numero} x {i} = {numero * i}")',
        tests: [
          { type: "output_contains", text: "7 x 1 = 7" },
          { type: "output_contains", text: "7 x 10 = 70" },
          { type: "output_lines", count: 10 }
        ],
        hints: [
          "Usa range(1, 11) para ir del 1 al 10",
          'print(f"{numero} x {i} = {numero * i}")',
          "7 x 10 = 70 es el último resultado"
        ]
      },
      {
        id: "3-5",
        title: "break y continue",
        xp: 175,
        description: "`break` sale del bucle inmediatamente. `continue` salta a la siguiente iteración.",
        story: "🔍 PyBot dice: ¡Buscando al impostor! Recorre una lista y detente cuando lo encuentres.",
        instructions: "Recorre los números del 1 al 20 con for. Salta (continue) los pares. Detente (break) cuando llegues a 15. Imprime solo los impares menores a 15.",
        starter: '# Recorre del 1 al 20\n# - Salta los números pares (continue)\n# - Para cuando llegues a 15 (break)\n',
        solution: 'for i in range(1, 21):\n    if i == 15:\n        break\n    if i % 2 == 0:\n        continue\n    print(i)',
        tests: [
          { type: "output_contains", text: "1" },
          { type: "output_contains", text: "13" },
          { type: "not_output_contains", text: "15" },
          { type: "not_output_contains", text: "2" }
        ],
        hints: [
          "Primero verifica si i == 15 para hacer break",
          "Luego verifica si i % 2 == 0 para hacer continue",
          "El orden importa: break antes de continue"
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Listas",
    icon: "📋",
    color: "#9CDCFE",
    description: "Colecciones ordenadas de elementos",
    exercises: [
      {
        id: "4-1",
        title: "Creando listas",
        xp: 100,
        description: "Una lista guarda múltiples valores: `frutas = [\"manzana\", \"pera\", \"uva\"]`. Se accede con índices que empiezan en 0.",
        story: "🛒 PyBot dice: ¡La lista del super! Necesito organizar mis compras en una lista de Python.",
        instructions: "Crea una lista `compras` con 5 elementos. Imprime la lista completa, el primer elemento y el último elemento.",
        starter: '# Crea tu lista de compras\ncompras = []\n\n# Imprime la lista completa\n\n# Imprime el primer elemento (índice 0)\n\n# Imprime el último elemento (índice -1)\n',
        solution: 'compras = ["leche", "pan", "huevos", "queso", "jamón"]\n\nprint(compras)\nprint(compras[0])\nprint(compras[-1])',
        tests: [
          { type: "has_list_with_elements", min: 5 },
          { type: "runs_without_error" }
        ],
        hints: [
          'compras = ["leche", "pan", "huevos", "queso", "jamón"]',
          "El primer elemento es índice 0: compras[0]",
          "El último elemento es índice -1: compras[-1]"
        ]
      },
      {
        id: "4-2",
        title: "Métodos de listas",
        xp: 125,
        description: "Las listas tienen métodos: `.append()` agrega al final, `.remove()` elimina un valor, `.sort()` ordena, `len()` da el tamaño.",
        story: "📝 PyBot dice: ¡Mi lista de tareas necesita mantenimiento! Ayúdame a agregar, eliminar y ordenar.",
        instructions: "Empieza con `tareas = [\"estudiar\", \"dormir\", \"comer\"]`. Agrega \"ejercitar\", elimina \"dormir\", ordena la lista e imprime el resultado y su longitud.",
        starter: 'tareas = ["estudiar", "dormir", "comer"]\n\n# Agrega "ejercitar"\n\n# Elimina "dormir"\n\n# Ordena la lista\n\n# Imprime la lista\n\n# Imprime cuántos elementos tiene\n',
        solution: 'tareas = ["estudiar", "dormir", "comer"]\n\ntareas.append("ejercitar")\ntareas.remove("dormir")\ntareas.sort()\n\nprint(tareas)\nprint(len(tareas))',
        tests: [
          { type: "not_output_contains", text: "dormir" },
          { type: "output_contains", text: "ejercitar" },
          { type: "output_contains", text: "3" }
        ],
        hints: [
          'tareas.append("ejercitar")',
          'tareas.remove("dormir")',
          "tareas.sort()",
          "len(tareas) da la cantidad de elementos"
        ]
      },
      {
        id: "4-3",
        title: "Slicing de listas",
        xp: 150,
        description: "El slicing extrae partes de una lista: `lista[inicio:fin]`. `lista[:3]` toma los primeros 3. `lista[2:]` toma desde el índice 2.",
        story: "✂️ PyBot dice: ¡A rebanar! Como cortar un pastel, el slicing te da exactamente la parte que necesitas.",
        instructions: "Con `numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]`, imprime los primeros 3, los últimos 3, y los del índice 2 al 5.",
        starter: 'numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]\n\n# Primeros 3 elementos\n\n# Últimos 3 elementos\n\n# Del índice 2 al 5 (sin incluir el 5)\n',
        solution: 'numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]\n\nprint(numeros[:3])\nprint(numeros[-3:])\nprint(numeros[2:5])',
        tests: [
          { type: "output_contains", text: "[10, 20, 30]" },
          { type: "output_contains", text: "[80, 90, 100]" },
          { type: "output_contains", text: "[30, 40, 50]" }
        ],
        hints: [
          "numeros[:3] toma los primeros 3",
          "numeros[-3:] toma los últimos 3",
          "numeros[2:5] toma índices 2, 3 y 4 (el 5 no se incluye)"
        ]
      },
      {
        id: "4-4",
        title: "List comprehension",
        xp: 200,
        description: "List comprehension crea listas de forma concisa: `[expr for item in lista if condicion]`",
        story: "⚡ PyBot dice: ¡La forma Pythónica de crear listas! Un línea que vale por diez.",
        instructions: "Usa list comprehension para crear: 1) Cuadrados del 1 al 10. 2) Solo los números pares del 1 al 20.",
        starter: '# Cuadrados del 1 al 10 con list comprehension\ncuadrados = []\nprint(cuadrados)\n\n# Números pares del 1 al 20 con list comprehension\npares = []\nprint(pares)\n',
        solution: 'cuadrados = [x**2 for x in range(1, 11)]\nprint(cuadrados)\n\npares = [x for x in range(1, 21) if x % 2 == 0]\nprint(pares)',
        tests: [
          { type: "output_contains", text: "[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]" },
          { type: "output_contains", text: "[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]" }
        ],
        hints: [
          "Sintaxis: [expresion for variable in rango]",
          "cuadrados = [x**2 for x in range(1, 11)]",
          "Para filtrar agrega: if condicion al final",
          "pares = [x for x in range(1, 21) if x % 2 == 0]"
        ]
      },
      {
        id: "4-5",
        title: "Máximo y mínimo",
        xp: 150,
        description: "`max()` y `min()` encuentran el mayor y menor de una lista. `sum()` suma todos los elementos.",
        story: "🏅 PyBot dice: ¡El medallero olímpico! Encuentra al campeón y al que más necesita entrenar.",
        instructions: "Con `puntuaciones = [85, 92, 78, 95, 88, 72, 91]`, imprime el máximo, mínimo, suma total y promedio.",
        starter: 'puntuaciones = [85, 92, 78, 95, 88, 72, 91]\n\n# Máximo\n\n# Mínimo\n\n# Suma total\n\n# Promedio (suma / cantidad)\n',
        solution: 'puntuaciones = [85, 92, 78, 95, 88, 72, 91]\n\nprint(f"Máximo: {max(puntuaciones)}")\nprint(f"Mínimo: {min(puntuaciones)}")\nprint(f"Suma: {sum(puntuaciones)}")\nprint(f"Promedio: {sum(puntuaciones) / len(puntuaciones)}")',
        tests: [
          { type: "output_contains", text: "95" },
          { type: "output_contains", text: "72" },
          { type: "output_contains", text: "601" }
        ],
        hints: [
          "max(puntuaciones) encuentra el mayor",
          "min(puntuaciones) encuentra el menor",
          "sum(puntuaciones) suma todos",
          "Promedio = sum(puntuaciones) / len(puntuaciones)"
        ]
      }
    ]
  },
  {
    id: 5,
    name: "Funciones",
    icon: "⚙️",
    color: "#569CD6",
    description: "Crea bloques de código reutilizables",
    exercises: [
      {
        id: "5-1",
        title: "Tu primera función",
        xp: 125,
        description: "Una función se define con `def nombre():` y se llama escribiendo `nombre()`. Agrupa código reutilizable.",
        story: "🏭 PyBot dice: ¡Las funciones son mini-programas dentro de tu programa! Crea tu primera fábrica de saludos.",
        instructions: "Crea una función `saludar()` que imprima `¡Hola desde una función!`. Luego llámala 3 veces.",
        starter: '# Define la función\ndef saludar():\n    \n\n# Llama la función 3 veces\n',
        solution: 'def saludar():\n    print("¡Hola desde una función!")\n\nsaludar()\nsaludar()\nsaludar()',
        tests: [
          { type: "has_def" },
          { type: "output_lines", count: 3 },
          { type: "output_contains", text: "función" }
        ],
        hints: [
          "def saludar():",
          '    print("¡Hola desde una función!")',
          "Llama la función: saludar() tres veces"
        ]
      },
      {
        id: "5-2",
        title: "Parámetros y argumentos",
        xp: 150,
        description: "Las funciones pueden recibir datos (parámetros): `def saludar(nombre):`. Al llamarla, pasas el valor (argumento).",
        story: "👋 PyBot dice: ¡Saludos personalizados! Una función que conoce tu nombre es mucho más amigable.",
        instructions: "Crea función `saludar_persona(nombre, edad)` que imprima `¡Hola {nombre}! Tienes {edad} años.`. Llámala con 3 personas diferentes.",
        starter: '# Define la función con parámetros\ndef saludar_persona(nombre, edad):\n    \n\n# Llama con 3 personas diferentes\n',
        solution: 'def saludar_persona(nombre, edad):\n    print(f"¡Hola {nombre}! Tienes {edad} años.")\n\nsaludar_persona("Ana", 25)\nsaludar_persona("Carlos", 30)\nsaludar_persona("María", 22)',
        tests: [
          { type: "has_def" },
          { type: "output_lines", count: 3 },
          { type: "runs_without_error" }
        ],
        hints: [
          "def saludar_persona(nombre, edad):",
          '    print(f"¡Hola {nombre}! Tienes {edad} años.")',
          'Llama: saludar_persona("Ana", 25)'
        ]
      },
      {
        id: "5-3",
        title: "Retornando valores",
        xp: 175,
        description: "`return` hace que la función devuelva un resultado que puedes usar. `resultado = mi_funcion()`",
        story: "🔬 PyBot dice: ¡Las funciones que calculan y devuelven resultados son el motor de todo programa!",
        instructions: "Crea función `calcular_area(base, altura)` que RETORNE el área de un triángulo (base*altura/2). Pruébala con varios valores e imprime los resultados.",
        starter: '# Define la función que retorna el área\ndef calcular_area(base, altura):\n    \n\n# Prueba con 3 triángulos diferentes\narea1 = calcular_area(5, 3)\nprint(f"Área 1: {area1}")\n',
        solution: 'def calcular_area(base, altura):\n    return base * altura / 2\n\narea1 = calcular_area(5, 3)\nprint(f"Área 1: {area1}")\narea2 = calcular_area(10, 4)\nprint(f"Área 2: {area2}")\narea3 = calcular_area(7, 6)\nprint(f"Área 3: {area3}")',
        tests: [
          { type: "has_return" },
          { type: "output_contains", text: "7.5" }
        ],
        hints: [
          "return base * altura / 2",
          "El valor retornado se puede guardar: area = calcular_area(5, 3)",
          "5 * 3 / 2 = 7.5"
        ]
      },
      {
        id: "5-4",
        title: "Valores por defecto",
        xp: 175,
        description: "Los parámetros pueden tener valores por defecto: `def saludar(nombre=\"mundo\"):`. Si no pasas el argumento, usa el valor por defecto.",
        story: "🎯 PyBot dice: ¡Parámetros opcionales! Tu función puede ser flexible y tener comportamiento por defecto.",
        instructions: "Crea función `potencia(base, exponente=2)` que eleve la base al exponente. Si no se da exponente, eleva al cuadrado. Prueba con y sin exponente.",
        starter: '# Define la función con valor por defecto\ndef potencia(base, exponente=2):\n    \n\n# Sin especificar exponente (usa el por defecto: 2)\nprint(potencia(5))      # Debe dar 25\n\n# Especificando exponente\nprint(potencia(2, 10))  # Debe dar 1024\n',
        solution: 'def potencia(base, exponente=2):\n    return base ** exponente\n\nprint(potencia(5))\nprint(potencia(2, 10))',
        tests: [
          { type: "output_contains", text: "25" },
          { type: "output_contains", text: "1024" },
          { type: "has_return" }
        ],
        hints: [
          "def potencia(base, exponente=2):",
          "    return base ** exponente",
          "potencia(5) usa exponente=2 por defecto → 25",
          "potencia(2, 10) → 1024"
        ]
      },
      {
        id: "5-5",
        title: "El Reto Final: Calculadora",
        xp: 300,
        description: "¡El jefe final! Combina todo lo aprendido para crear una calculadora con funciones.",
        story: "🏆 PyBot dice: ¡JEFE FINAL DESBLOQUEADO! Crea una calculadora completa. ¡Este es tu momento!",
        instructions: "Crea 4 funciones: `sumar(a,b)`, `restar(a,b)`, `multiplicar(a,b)`, `dividir(a,b)`. La división debe verificar que b≠0. Prueba cada una.",
        starter: '# Crea las 4 operaciones\ndef sumar(a, b):\n    \n\ndef restar(a, b):\n    \n\ndef multiplicar(a, b):\n    \n\ndef dividir(a, b):\n    # Verifica que b no sea 0\n    \n\n# Prueba las 4 funciones\nprint(sumar(10, 5))       # 15\nprint(restar(10, 5))      # 5\nprint(multiplicar(10, 5)) # 50\nprint(dividir(10, 5))     # 2.0\nprint(dividir(10, 0))     # Error controlado\n',
        solution: 'def sumar(a, b):\n    return a + b\n\ndef restar(a, b):\n    return a - b\n\ndef multiplicar(a, b):\n    return a * b\n\ndef dividir(a, b):\n    if b == 0:\n        return "Error: división por cero"\n    return a / b\n\nprint(sumar(10, 5))\nprint(restar(10, 5))\nprint(multiplicar(10, 5))\nprint(dividir(10, 5))\nprint(dividir(10, 0))',
        tests: [
          { type: "output_contains", text: "15" },
          { type: "output_contains", text: "50" },
          { type: "output_contains", text: "2.0" },
          { type: "output_contains", text: "cero" }
        ],
        hints: [
          "def sumar(a, b): return a + b",
          "def dividir(a, b): verifica if b == 0 primero",
          'return "Error: división por cero" cuando b es 0',
          "¡Casi eres un programador de Python!"
        ]
      }
    ]
  },
  {
    id: 6,
    name: "Simulaciones",
    icon: "🎮",
    color: "#F0C040",
    description: "Ejercicios de entrevista: simula objetos del mundo real",
    exercises: [
      {
        id: "6-1",
        title: "Toggle: Foco on/off",
        xp: 100,
        description: "Una variable booleana actúa como interruptor. `not variable` invierte True↔False.",
        story: "💡 PyBot dice: ¡El truco del botón! En entrevistas piden este patrón constantemente. ¡Domínalo!",
        instructions: "Crea una función `presionar_boton()` que invierta el estado de `encendido` e imprima si el foco está ENCENDIDO o APAGADO. Llámala 4 veces.",
        starter: '# Estado del foco\nencendido = False\n\ndef presionar_boton():\n    global encendido\n    # Invierte el estado: True → False, False → True\n    \n    # Imprime el estado actual\n    \n\n# Presiona el botón 4 veces\npresionar_boton()\npresionar_boton()\npresionar_boton()\npresionar_boton()\n',
        solution: 'encendido = False\n\ndef presionar_boton():\n    global encendido\n    encendido = not encendido\n    if encendido:\n        print("💡 Foco: ENCENDIDO")\n    else:\n        print("⚫ Foco: APAGADO")\n\npresionar_boton()\npresionar_boton()\npresionar_boton()\npresionar_boton()',
        tests: [
          { type: "output_contains", text: "ENCENDIDO" },
          { type: "output_contains", text: "APAGADO" },
          { type: "has_def" },
          { type: "runs_without_error" }
        ],
        hints: [
          "Usa `global encendido` dentro de la función para poder modificar la variable",
          "`encendido = not encendido` invierte True→False y False→True automáticamente",
          "Luego un if/else imprime el estado: ENCENDIDO o APAGADO",
          'if encendido:\n    print("💡 Foco: ENCENDIDO")\nelse:\n    print("⚫ Foco: APAGADO")'
        ]
      },
      {
        id: "6-2",
        title: "Semáforo: ciclo de luces",
        xp: 125,
        description: "El operador `%` cicla entre valores. `(i + 1) % n` va 0→1→2→0→...",
        story: "🚦 PyBot dice: ¡Los semáforos nunca se detienen! El módulo `%` es la clave para ciclar infinitamente.",
        instructions: "Crea `cambiar_luz()` que avance al siguiente estado del semáforo usando módulo. Cicla entre Verde, Amarillo y Rojo.",
        starter: 'estados = ["🟢 Verde", "🟡 Amarillo", "🔴 Rojo"]\nindice = 0\n\ndef cambiar_luz():\n    global indice\n    # Avanza al siguiente índice; vuelve a 0 al pasar el último\n    \n    print(f"Semáforo: {estados[indice]}")\n\nprint(f"Semáforo: {estados[indice]}")\ncambiar_luz()\ncambiar_luz()\ncambiar_luz()\ncambiar_luz()\n',
        solution: 'estados = ["🟢 Verde", "🟡 Amarillo", "🔴 Rojo"]\nindice = 0\n\ndef cambiar_luz():\n    global indice\n    indice = (indice + 1) % len(estados)\n    print(f"Semáforo: {estados[indice]}")\n\nprint(f"Semáforo: {estados[indice]}")\ncambiar_luz()\ncambiar_luz()\ncambiar_luz()\ncambiar_luz()',
        tests: [
          { type: "output_contains", text: "Verde" },
          { type: "output_contains", text: "Amarillo" },
          { type: "output_contains", text: "Rojo" },
          { type: "has_def" }
        ],
        hints: [
          "Usa `global indice` para poder modificar la variable desde la función",
          "`(indice + 1) % len(estados)` cicla: 0→1→2→0→1→2...",
          "Con 3 estados, después del índice 2 el módulo vuelve al 0",
          "indice = (indice + 1) % len(estados)"
        ]
      },
      {
        id: "6-3",
        title: "Elevador de pisos",
        xp: 225,
        description: "Simula un elevador que rastrea el piso actual y muestra el recorrido. Combina `global`, condicionales y bucles.",
        story: "🏢 PyBot dice: ¡El clásico de entrevistas! Te piden simular un elevador. Ahora sabes cómo hacerlo.",
        instructions: "Completa `ir_a_piso(destino)`: muestra cada piso al subir (↑) o bajar (↓) hasta llegar al destino.",
        starter: 'piso_actual = 1\nMAX_PISO = 10\n\ndef ir_a_piso(destino):\n    global piso_actual\n    if destino < 1 or destino > MAX_PISO:\n        print(f"⚠️ Piso inválido (1-{MAX_PISO})")\n        return\n    # Si el destino es mayor al piso actual: SUBIR\n    # for p in range(piso_actual + 1, destino + 1): ...\n    \n    # Si el destino es menor: BAJAR\n    # for p in range(piso_actual - 1, destino - 1, -1): ...\n    \n    piso_actual = destino\n    print(f"🏢 ¡Llegaste al piso {piso_actual}!")\n\nprint(f"📍 Inicio: piso {piso_actual}")\nir_a_piso(4)\nir_a_piso(2)\n',
        solution: 'piso_actual = 1\nMAX_PISO = 10\n\ndef ir_a_piso(destino):\n    global piso_actual\n    if destino < 1 or destino > MAX_PISO:\n        print(f"⚠️ Piso inválido (1-{MAX_PISO})")\n        return\n    if destino > piso_actual:\n        for p in range(piso_actual + 1, destino + 1):\n            print(f"↑ Piso {p}")\n    elif destino < piso_actual:\n        for p in range(piso_actual - 1, destino - 1, -1):\n            print(f"↓ Piso {p}")\n    piso_actual = destino\n    print(f"🏢 ¡Llegaste al piso {piso_actual}!")\n\nprint(f"📍 Inicio: piso {piso_actual}")\nir_a_piso(4)\nir_a_piso(2)',
        tests: [
          { type: "output_contains", text: "↑ Piso 4" },
          { type: "output_contains", text: "↓ Piso 2" },
          { type: "has_def" },
          { type: "has_for" }
        ],
        hints: [
          "Usa `global piso_actual` para modificar el piso desde la función",
          "Para subir: `for p in range(piso_actual + 1, destino + 1):`",
          "Para bajar: `for p in range(piso_actual - 1, destino - 1, -1):`",
          "El tercer argumento `-1` en range hace que el contador vaya hacia atrás"
        ]
      },
      {
        id: "6-4",
        title: "Cajero automático (ATM)",
        xp: 200,
        description: "Un cajero valida antes de operar: `if cantidad > saldo` previene retiros imposibles.",
        story: "💳 PyBot dice: ¡Los bancos también usan Python! Validar antes de operar es buena práctica de programación.",
        instructions: "Completa `depositar(cantidad)` y `retirar(cantidad)`. Valida montos negativos y fondos insuficientes.",
        starter: 'saldo = 500\n\ndef depositar(cantidad):\n    global saldo\n    if cantidad <= 0:\n        print("❌ Cantidad inválida")\n        return\n    # Suma al saldo e imprime el nuevo saldo\n    \n\ndef retirar(cantidad):\n    global saldo\n    if cantidad <= 0:\n        print("❌ Cantidad inválida")\n        return\n    # Verifica si hay saldo suficiente\n    \n    # Si hay saldo: descuenta e imprime el nuevo saldo\n    \n\nprint(f"💳 Saldo inicial: ${saldo}")\ndepositar(300)\nretirar(100)\nretirar(1000)\n',
        solution: 'saldo = 500\n\ndef depositar(cantidad):\n    global saldo\n    if cantidad <= 0:\n        print("❌ Cantidad inválida")\n        return\n    saldo += cantidad\n    print(f"✅ Depósito: +${cantidad}. Saldo: ${saldo}")\n\ndef retirar(cantidad):\n    global saldo\n    if cantidad <= 0:\n        print("❌ Cantidad inválida")\n        return\n    if cantidad > saldo:\n        print(f"❌ Fondos insuficientes. Saldo: ${saldo}")\n        return\n    saldo -= cantidad\n    print(f"✅ Retiro: -${cantidad}. Saldo: ${saldo}")\n\nprint(f"💳 Saldo inicial: ${saldo}")\ndepositar(300)\nretirar(100)\nretirar(1000)',
        tests: [
          { type: "output_contains", text: "800" },
          { type: "output_contains", text: "700" },
          { type: "output_contains", text: "insuficientes" },
          { type: "has_def" }
        ],
        hints: [
          "`saldo += cantidad` suma el depósito al saldo",
          "Para retirar, primero: `if cantidad > saldo: print(...) return`",
          "`saldo -= cantidad` descuenta el retiro",
          'print(f"✅ Retiro: -${cantidad}. Saldo: ${saldo}")'
        ]
      },
      {
        id: "6-5",
        title: "Máquina expendedora",
        xp: 275,
        description: "Combina diccionarios, funciones y validaciones en cadena.",
        story: "🥤 PyBot dice: ¡El reto final de simulaciones! Una máquina que maneja inventario, precios y saldo. ¡A por ello!",
        instructions: "Completa `comprar(producto)`: verifica existencia, stock y saldo antes de vender. Descuenta precio y stock al comprar.",
        starter: 'productos = {\n    "café": {"precio": 15, "stock": 3},\n    "agua": {"precio": 10, "stock": 5},\n    "jugo": {"precio": 20, "stock": 2}\n}\nsaldo = 0\n\ndef insertar_dinero(cantidad):\n    global saldo\n    saldo += cantidad\n    print(f"💰 Saldo: ${saldo}")\n\ndef comprar(producto):\n    global saldo\n    # 1. Verifica que el producto exista\n    \n    # 2. Verifica que haya stock\n    \n    # 3. Verifica que haya saldo suficiente\n    \n    # 4. Realiza la compra\n    \n\ninsertar_dinero(50)\ncomprar("café")\ncomprar("jugo")\ncomprar("agua")\n',
        solution: 'productos = {\n    "café": {"precio": 15, "stock": 3},\n    "agua": {"precio": 10, "stock": 5},\n    "jugo": {"precio": 20, "stock": 2}\n}\nsaldo = 0\n\ndef insertar_dinero(cantidad):\n    global saldo\n    saldo += cantidad\n    print(f"💰 Saldo: ${saldo}")\n\ndef comprar(producto):\n    global saldo\n    if producto not in productos:\n        print(f"❌ {producto} no disponible")\n        return\n    item = productos[producto]\n    if item["stock"] == 0:\n        print(f"❌ Sin stock de {producto}")\n        return\n    precio = item["precio"]\n    if saldo < precio:\n        print(f"❌ Saldo insuficiente. Faltan ${precio - saldo}")\n        return\n    saldo -= precio\n    item["stock"] -= 1\n    print(f"✅ {producto.capitalize()} comprado! Cambio: ${saldo}")\n    saldo = 0\n\ninsertar_dinero(50)\ncomprar("café")\ncomprar("jugo")\ncomprar("agua")',
        tests: [
          { type: "output_contains", text: "Saldo: $50" },
          { type: "output_contains", text: "comprado" },
          { type: "has_def" },
          { type: "runs_without_error" }
        ],
        hints: [
          "`if producto not in productos:` verifica si existe en el diccionario",
          "`item = productos[producto]` accede al diccionario del producto",
          "`if item[\"stock\"] == 0:` verifica si hay existencias",
          "`saldo -= precio` y `item[\"stock\"] -= 1` realizan la compra"
        ]
      }
    ]
  },
  {
    id: 7,
    name: "Nivel Pro",
    icon: "💼",
    color: "#4FC1FF",
    description: "Programación orientada a objetos: el nivel que separa a un principiante de un profesional",
    exercises: [
      {
        id: "7-1",
        title: "Clases y objetos: Cuenta Bancaria",
        xp: 250,
        description: "Una clase es un molde para crear objetos. `__init__` inicializa sus atributos; `self` referencia al propio objeto.",
        story: "🏗️ PyBot dice: ¡Bienvenido al Nivel Pro! Las clases son el corazón de la programación orientada a objetos. Toda entrevista técnica seria las evalúa.",
        instructions: "Completa la clase `CuentaBancaria` con `depositar(self, monto)` y `retirar(self, monto)` (validando fondos suficientes). Crea una cuenta y prueba ambos métodos.",
        starter: 'class CuentaBancaria:\n    def __init__(self, titular, saldo=0):\n        self.titular = titular\n        self.saldo = saldo\n\n    def depositar(self, monto):\n        # Suma el monto al saldo e imprime confirmación\n        pass\n\n    def retirar(self, monto):\n        # Verifica fondos suficientes antes de restar\n        pass\n\ncuenta = CuentaBancaria("Ana", 100)\ncuenta.depositar(50)\ncuenta.retirar(30)\ncuenta.retirar(1000)\n',
        solution: 'class CuentaBancaria:\n    def __init__(self, titular, saldo=0):\n        self.titular = titular\n        self.saldo = saldo\n\n    def depositar(self, monto):\n        self.saldo += monto\n        print(f"✅ {self.titular} depositó ${monto}. Saldo: ${self.saldo}")\n\n    def retirar(self, monto):\n        if monto > self.saldo:\n            print(f"❌ Fondos insuficientes. Saldo: ${self.saldo}")\n            return\n        self.saldo -= monto\n        print(f"✅ {self.titular} retiró ${monto}. Saldo: ${self.saldo}")\n\ncuenta = CuentaBancaria("Ana", 100)\ncuenta.depositar(50)\ncuenta.retirar(30)\ncuenta.retirar(1000)',
        tests: [
          { type: "output_contains", text: "150" },
          { type: "output_contains", text: "120" },
          { type: "output_contains", text: "insuficientes" },
          { type: "has_class" }
        ],
        hints: [
          "Dentro de __init__, self.saldo guarda el saldo inicial de cada objeto",
          "self.saldo += monto suma el depósito al saldo del objeto",
          "Antes de retirar, compara: if monto > self.saldo:",
          "self.saldo -= monto descuenta el retiro cuando hay fondos suficientes"
        ]
      },
      {
        id: "7-2",
        title: "Herencia y polimorfismo: Empleados",
        xp: 275,
        description: "La herencia permite que una clase (subclase) reutilice y extienda el comportamiento de otra (clase base) con `class Hijo(Padre):`.",
        story: "🧬 PyBot dice: ¡La herencia evita repetir código! Un Gerente ES un Empleado, pero con un bono extra en su pago.",
        instructions: "Completa `Gerente(Empleado)` para que herede de `Empleado` con `super()` y sobrescriba `calcular_pago()` sumando un bono.",
        starter: 'class Empleado:\n    def __init__(self, nombre, salario):\n        self.nombre = nombre\n        self.salario = salario\n\n    def calcular_pago(self):\n        return self.salario\n\nclass Gerente(Empleado):\n    def __init__(self, nombre, salario, bono):\n        # Llama al __init__ de Empleado con super()\n        \n        self.bono = bono\n\n    def calcular_pago(self):\n        # Retorna salario + bono\n        pass\n\nempleados = [Empleado("Luis", 1000), Gerente("Marta", 1500, 300)]\nfor e in empleados:\n    print(f"{e.nombre}: ${e.calcular_pago()}")\n',
        solution: 'class Empleado:\n    def __init__(self, nombre, salario):\n        self.nombre = nombre\n        self.salario = salario\n\n    def calcular_pago(self):\n        return self.salario\n\nclass Gerente(Empleado):\n    def __init__(self, nombre, salario, bono):\n        super().__init__(nombre, salario)\n        self.bono = bono\n\n    def calcular_pago(self):\n        return self.salario + self.bono\n\nempleados = [Empleado("Luis", 1000), Gerente("Marta", 1500, 300)]\nfor e in empleados:\n    print(f"{e.nombre}: ${e.calcular_pago()}")',
        tests: [
          { type: "output_contains", text: "Luis: $1000" },
          { type: "output_contains", text: "Marta: $1800" },
          { type: "has_class" },
          { type: "has_for" }
        ],
        hints: [
          "super().__init__(nombre, salario) llama al constructor de la clase base Empleado",
          "class Gerente(Empleado): hereda todos los atributos y métodos de Empleado",
          "Sobrescribe calcular_pago para sumar el bono: return self.salario + self.bono",
          "El polimorfismo permite que el mismo método calcular_pago() se comporte distinto según la clase"
        ]
      },
      {
        id: "7-3",
        title: "Estructura de datos: Pila (Stack)",
        xp: 300,
        description: "Una pila (stack) sigue el orden LIFO: el último en entrar es el primero en salir. `.append()` apila, `.pop()` desapila.",
        story: "📚 PyBot dice: ¡Las pilas están en todas partes! El botón 'deshacer', la pila de llamadas de funciones... Impleméntala tú mismo.",
        instructions: "Completa la clase `Pila` con `apilar(valor)`, `desapilar()` (retorna None si está vacía) y `esta_vacia()`.",
        starter: 'class Pila:\n    def __init__(self):\n        self.elementos = []\n\n    def apilar(self, valor):\n        # Agrega el valor al final de la lista\n        pass\n\n    def desapilar(self):\n        # Si está vacía retorna None; si no, quita y retorna el último elemento\n        pass\n\n    def esta_vacia(self):\n        # Retorna True si no hay elementos\n        pass\n\npila = Pila()\npila.apilar(1)\npila.apilar(2)\npila.apilar(3)\nprint(pila.desapilar())\nprint(pila.desapilar())\nprint(pila.esta_vacia())\n',
        solution: 'class Pila:\n    def __init__(self):\n        self.elementos = []\n\n    def apilar(self, valor):\n        self.elementos.append(valor)\n\n    def desapilar(self):\n        if self.esta_vacia():\n            return None\n        return self.elementos.pop()\n\n    def esta_vacia(self):\n        return len(self.elementos) == 0\n\npila = Pila()\npila.apilar(1)\npila.apilar(2)\npila.apilar(3)\nprint(pila.desapilar())\nprint(pila.desapilar())\nprint(pila.esta_vacia())',
        tests: [
          { type: "output_contains", text: "3" },
          { type: "output_contains", text: "2" },
          { type: "output_contains", text: "False" },
          { type: "has_class" }
        ],
        hints: [
          "apilar usa self.elementos.append(valor)",
          "desapilar usa self.elementos.pop(), que quita y retorna el último elemento",
          "Antes de desapilar, verifica self.esta_vacia() para evitar errores",
          "esta_vacia retorna len(self.elementos) == 0"
        ]
      },
      {
        id: "7-4",
        title: "Cache LRU simplificado",
        xp: 350,
        description: "Un caché LRU (Least Recently Used) descarta el elemento menos usado recientemente cuando se llena. Los diccionarios en Python mantienen el orden de inserción.",
        story: "🧠 PyBot dice: ¡Pregunta típica en entrevistas de empresas grandes! Un caché con capacidad limitada que olvida lo más viejo.",
        instructions: "Completa `CacheLRU`: al `obtener(clave)`, mueve la clave al final (más reciente); al `guardar(clave, valor)` con el caché lleno, elimina la clave más antigua antes de insertar.",
        starter: 'class CacheLRU:\n    def __init__(self, capacidad):\n        self.capacidad = capacidad\n        self.datos = {}\n\n    def obtener(self, clave):\n        if clave not in self.datos:\n            return None\n        # Mueve la clave al final (más reciente): sácala y vuelve a insertarla\n        \n        return self.datos[clave]\n\n    def guardar(self, clave, valor):\n        if clave in self.datos:\n            del self.datos[clave]\n        elif len(self.datos) >= self.capacidad:\n            # Elimina la clave más antigua (la primera del diccionario)\n            \n            pass\n        self.datos[clave] = valor\n\ncache = CacheLRU(2)\ncache.guardar("a", 1)\ncache.guardar("b", 2)\ncache.obtener("a")\ncache.guardar("c", 3)\nprint(list(cache.datos.keys()))\n',
        solution: 'class CacheLRU:\n    def __init__(self, capacidad):\n        self.capacidad = capacidad\n        self.datos = {}\n\n    def obtener(self, clave):\n        if clave not in self.datos:\n            return None\n        valor = self.datos.pop(clave)\n        self.datos[clave] = valor\n        return valor\n\n    def guardar(self, clave, valor):\n        if clave in self.datos:\n            del self.datos[clave]\n        elif len(self.datos) >= self.capacidad:\n            clave_antigua = next(iter(self.datos))\n            del self.datos[clave_antigua]\n        self.datos[clave] = valor\n\ncache = CacheLRU(2)\ncache.guardar("a", 1)\ncache.guardar("b", 2)\ncache.obtener("a")\ncache.guardar("c", 3)\nprint(list(cache.datos.keys()))',
        tests: [
          { type: "output_contains", text: "['a', 'c']" },
          { type: "has_class" },
          { type: "runs_without_error" }
        ],
        hints: [
          "obtener debe reinsertar la clave: self.datos.pop(clave) y luego self.datos[clave] = valor",
          "next(iter(self.datos)) te da la primera clave insertada (la más antigua)",
          "Cuando el caché está lleno, elimina esa clave antigua con del antes de insertar la nueva",
          "Un diccionario en Python 3.7+ conserva el orden de inserción de sus claves"
        ]
      },
      {
        id: "7-5",
        title: "El Reto Pro: Sistema de reservas",
        xp: 400,
        description: "Combina clases, diccionarios y validación de conflictos de horario — un problema real de sistemas de agendamiento.",
        story: "📅 PyBot dice: ¡El desafío final del Nivel Pro! Un sistema de citas debe evitar que dos personas reserven la misma hora. ¡Demuestra todo lo que aprendiste!",
        instructions: "Completa `SistemaReservas.reservar(hora, cliente)`: si la hora ya está ocupada, rechaza la reserva; si no, la guarda y confirma.",
        starter: 'class SistemaReservas:\n    def __init__(self):\n        self.reservas = {}\n\n    def reservar(self, hora, cliente):\n        # Si la hora ya está en self.reservas, rechaza la reserva\n        \n        # Si no, guárdala e imprime confirmación\n        pass\n\n    def cancelar(self, hora):\n        if hora in self.reservas:\n            del self.reservas[hora]\n            print(f"🗑️ Reserva de las {hora} cancelada")\n        else:\n            print(f"⚠️ No hay reserva a las {hora}")\n\nagenda = SistemaReservas()\nagenda.reservar("10:00", "Carlos")\nagenda.reservar("10:00", "Beatriz")\nagenda.cancelar("10:00")\nagenda.reservar("10:00", "Beatriz")\n',
        solution: 'class SistemaReservas:\n    def __init__(self):\n        self.reservas = {}\n\n    def reservar(self, hora, cliente):\n        if hora in self.reservas:\n            print(f"❌ {hora} ya está reservada por {self.reservas[hora]}")\n            return\n        self.reservas[hora] = cliente\n        print(f"✅ Cita confirmada: {cliente} a las {hora}")\n\n    def cancelar(self, hora):\n        if hora in self.reservas:\n            del self.reservas[hora]\n            print(f"🗑️ Reserva de las {hora} cancelada")\n        else:\n            print(f"⚠️ No hay reserva a las {hora}")\n\nagenda = SistemaReservas()\nagenda.reservar("10:00", "Carlos")\nagenda.reservar("10:00", "Beatriz")\nagenda.cancelar("10:00")\nagenda.reservar("10:00", "Beatriz")',
        tests: [
          { type: "output_contains", text: "Carlos" },
          { type: "output_contains", text: "ya está reservada" },
          { type: "output_contains", text: "Beatriz a las 10:00" },
          { type: "has_class" }
        ],
        hints: [
          "if hora in self.reservas: ya existe una cita a esa hora",
          "Usa return para salir de la función temprano si hay conflicto",
          "self.reservas[hora] = cliente guarda la nueva reserva",
          "Después de cancelar(), la hora queda libre para una nueva reserva"
        ]
      }
    ]
  }
];

const ACHIEVEMENTS = [
  { id: "first_blood", name: "Primer Código", desc: "Completa tu primer ejercicio", icon: "🎯", condition: (s) => s.completed >= 1 },
  { id: "world1", name: "Maestro de Variables", desc: "Completa el Mundo 1", icon: "📦", condition: (s) => s.worldsCompleted.includes(1) },
  { id: "world2", name: "Maestro Condicional", desc: "Completa el Mundo 2", icon: "🔀", condition: (s) => s.worldsCompleted.includes(2) },
  { id: "world3", name: "Maestro de Bucles", desc: "Completa el Mundo 3", icon: "🔁", condition: (s) => s.worldsCompleted.includes(3) },
  { id: "world4", name: "Maestro de Listas", desc: "Completa el Mundo 4", icon: "📋", condition: (s) => s.worldsCompleted.includes(4) },
  { id: "world5", name: "Maestro de Funciones", desc: "Completa el Mundo 5", icon: "⚙️", condition: (s) => s.worldsCompleted.includes(5) },
  { id: "world6", name: "Maestro Simulador", desc: "Completa el Mundo 6", icon: "🎮", condition: (s) => s.worldsCompleted.includes(6) },
  { id: "world7", name: "Programador Pro", desc: "Completa el Mundo 7 (Nivel Pro)", icon: "💼", condition: (s) => s.worldsCompleted.includes(7) },
  { id: "pythonista", name: "¡Pythonista!", desc: "Completa todos los ejercicios", icon: "🐍", condition: (s) => s.completed >= WORLDS.flatMap(w => w.exercises).length },
  { id: "speed_run", name: "Velocista", desc: "Completa 5 ejercicios en una sesión", icon: "⚡", condition: (s) => s.sessionCompleted >= 5 },
  { id: "no_hints", name: "Sin Ayuda", desc: "Completa 3 ejercicios sin usar pistas", icon: "🧠", condition: (s) => s.noHintStreak >= 3 },
  { id: "xp_1000", name: "Mil Puntos", desc: "Acumula 1000 XP", icon: "💎", condition: (s) => s.xp >= 1000 },
];
