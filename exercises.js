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
        starter: '# Crea las variables (reemplaza los ?)\nnombre = ?\nedad = ?\n\n# Imprime las variables\nprint(nombre)\nprint(edad)\n',
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
  }
];

const ACHIEVEMENTS = [
  { id: "first_blood", name: "Primer Código", desc: "Completa tu primer ejercicio", icon: "🎯", condition: (s) => s.completed >= 1 },
  { id: "world1", name: "Maestro de Variables", desc: "Completa el Mundo 1", icon: "📦", condition: (s) => s.worldsCompleted.includes(1) },
  { id: "world2", name: "Maestro Condicional", desc: "Completa el Mundo 2", icon: "🔀", condition: (s) => s.worldsCompleted.includes(2) },
  { id: "world3", name: "Maestro de Bucles", desc: "Completa el Mundo 3", icon: "🔁", condition: (s) => s.worldsCompleted.includes(3) },
  { id: "world4", name: "Maestro de Listas", desc: "Completa el Mundo 4", icon: "📋", condition: (s) => s.worldsCompleted.includes(4) },
  { id: "world5", name: "Maestro de Funciones", desc: "Completa el Mundo 5", icon: "⚙️", condition: (s) => s.worldsCompleted.includes(5) },
  { id: "pythonista", name: "¡Pythonista!", desc: "Completa todos los ejercicios", icon: "🐍", condition: (s) => s.completed >= 25 },
  { id: "speed_run", name: "Velocista", desc: "Completa 5 ejercicios en una sesión", icon: "⚡", condition: (s) => s.sessionCompleted >= 5 },
  { id: "no_hints", name: "Sin Ayuda", desc: "Completa 3 ejercicios sin usar pistas", icon: "🧠", condition: (s) => s.noHintStreak >= 3 },
  { id: "xp_1000", name: "Mil Puntos", desc: "Acumula 1000 XP", icon: "💎", condition: (s) => s.xp >= 1000 },
];
