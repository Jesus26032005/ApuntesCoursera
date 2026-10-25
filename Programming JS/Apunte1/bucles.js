// EN js existen varios tipos de bucles que se utilizan para repetir un bloque de código varias veces. Los bucles más comunes en JavaScript son for y while. A continuación, se explican ambos tipos de bucles con ejemplos:

// 1. Bucle for: Se utiliza cuando se conoce de antemano el número de iteraciones que se desean realizar. La sintaxis básica del bucle for es la siguiente:

/* Esquema explicativo, no código ejecutable:
for (inicialización; condición; incremento) {
  // Bloque de código a ejecutar en cada iteración
}
*/

// Ejemplo:
for (let i = 0; i < 5; i++) {
  console.log("Iteración número: " + i);
}

// Salida:
// Iteración número: 0
// Iteración número: 1
// Iteración número: 2
// Iteración número: 3
// Iteración número: 4

// 2. Bucle while: Se utiliza cuando no se conoce de antemano el número de iteraciones y se desea repetir un bloque de código mientras se cumpla una condición. La sintaxis básica del bucle while es la siguiente:

/* Esquema explicativo, no código ejecutable:
while (condición) {
  // Bloque de código a ejecutar mientras la condición sea verdadera
}
*/

// Ejemplo:
let j = 0;
while (j < 5) {
  console.log("Iteración número: " + j);
  j++;
}

// Salida:
// Iteración número: 0
// Iteración número: 1
// Iteración número: 2
// Iteración número: 3
// Iteración número: 4

// Es importante tener cuidado con los bucles while, ya que si la condición nunca se vuelve falsa, se puede crear un bucle infinito que haga que el programa se bloquee.

// 3. Bucle do...while: Similar al bucle while, pero garantiza que el bloque de código se ejecute al menos una vez, ya que la condición se evalúa después de la ejecución del bloque. La sintaxis básica del bucle do...while es la siguiente:

/* Esquema explicativo, no código ejecutable:
do {
  // Bloque de código a ejecutar al menos una vez
} while (condición);
*/

// Ejemplo:
let k = 0;
do {
  console.log("Iteración número: " + k);
  k++;
} while (k < 5);

// Salida:
// Iteración número: 0
// Iteración número: 1
// Iteración número: 2
// Iteración número: 3
// Iteración número: 4


// Tambien existen los bucles anidados 
// Bucle anidado: Es un bucle dentro de otro bucle. Se utiliza cuando se necesita realizar iteraciones múltiples en diferentes niveles. La sintaxis básica de un bucle anidado es la siguiente:

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log("i: " + i + ", j: " + j);
  }
}