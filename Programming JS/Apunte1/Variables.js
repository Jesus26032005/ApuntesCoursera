// En JavaScript hay tres formas habituales de declarar variables: var, let y const.

// let y const fueron introducidas en ES6, mientras que var es la forma tradicional de declarar variables en JavaScript.

// var: Se utiliza para declarar variables que pueden ser reasignadas y tienen un alcance de función o global. Sin embargo, su uso puede llevar a problemas de hoisting y confusión en el alcance de las variables.

// let: Se utiliza para declarar variables que pueden ser reasignadas, pero tienen un alcance de bloque. Esto significa que solo son accesibles dentro del bloque en el que se declaran, lo que limita su uso al bloque. let y const también se preparan antes de ejecutar el bloque, pero no se pueden leer antes de inicializarlas (zona muerta temporal).

// const: Se utiliza para declarar variables que no pueden ser reasignadas. Al igual que let, tienen un alcance de bloque. Sin embargo, es importante tener en cuenta que aunque la variable no pueda ser reasignada, si es un objeto o un array, sus propiedades o elementos pueden ser modificados.

// Ejemplos:

// var
var nombre = "Juan";
nombre = "Pedro"; // Reasignación permitida
console.log(nombre); // Salida: Pedro

// let
let edad = 25;
edad = 26; // Reasignación permitida
console.log(edad); // Salida: 26

// const
const PI = 3.14159;
// PI = 3.14; // Esto generará un error, ya que no se puede reasignar una constante
console.log(PI); // Salida: 3.14159


// TIPOS DE DATOS
// En js existen varios tipos de datos que se pueden clasificar en dos categorías: primitivos y no primitivos.

// Hay siete tipos primitivos. Sus valores son inmutables; JavaScript permite acceder a métodos de algunos de ellos, como los strings, sin convertirlos en objetos permanentes.
// Los objetos pueden modificarse; asignar el mismo objeto a otra variable comparte su referencia. No hace falta asumir una ubicación física en memoria para entender esta diferencia.
// Los tipos primitivos son:

// 1. Number: Representa números, tanto enteros como decimales.
// 2. String: Representa cadenas de texto.
// 3. Boolean: Representa valores de verdad, true o false.
// 4. Undefined: Representa una variable que ha sido declarada pero no inicializada.
// 5. Null: Representa la ausencia intencional de cualquier valor u objeto.
// 6. Symbol: Introducido en ES6, representa un valor único e inmutable.
// 7. BigInt: Introducido en ES2020, representa enteros de precisión arbitraria, incluidos enteros pequeños. No se mezcla directamente con Number en operaciones aritméticas.
// Symbol no es un octavo tipo: ya aparece en el punto 6. Symbol("descripción") crea un símbolo único.

let numero = 42; // Number
let texto = "Hola, mundo";
let esVerdadero = true; // Boolean
let variableNoDefinida; // Undefined
let valorNulo = null; // Null
let simbolo = Symbol("miSimbolo"); // Symbol
let numeroGrande = 9007199254740991n; // BigInt
let simboloUnico = Symbol("miSimboloUnico"); // Symbol


// para checar el tipo de dato de una variable, se puede utilizar el operador typeof:
console.log(typeof numero); // Salida: number
console.log(typeof texto); // Salida: string
console.log(typeof esVerdadero); // Salida: boolean
console.log(typeof variableNoDefinida); // Salida: undefined
console.log(typeof valorNulo); // Salida: object (esto es un comportamiento histórico de JavaScript)
console.log(typeof simbolo); // Salida: symbol
console.log(typeof numeroGrande); // Salida: bigint
console.log(typeof simboloUnico); // Salida: symbol


// Los tipos de datos no primitivos son aquellos que son objetos y pueden tener métodos y propiedades. Los tipos de datos no primitivos en JavaScript son:

// 1. Object: Es una colección de propiedades y métodos.
// 2. Array: Es un tipo especial de objeto que representa una lista ordenada de valores.
// 3. Function: Es un tipo especial de objeto que representa un bloque de código reutilizable.