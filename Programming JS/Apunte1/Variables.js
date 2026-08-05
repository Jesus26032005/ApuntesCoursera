// En js existen tres tipos de variables: var, let y const.

// let y const fueron introducidas en ES6, mientras que var es la forma tradicional de declarar variables en JavaScript.

// var: Se utiliza para declarar variables que pueden ser reasignadas y tienen un alcance de función o global. Sin embargo, su uso puede llevar a problemas de hoisting y confusión en el alcance de las variables.

// let: Se utiliza para declarar variables que pueden ser reasignadas, pero tienen un alcance de bloque. Esto significa que solo son accesibles dentro del bloque en el que se declaran, lo que ayuda a evitar problemas de alcance y hoisting.

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

// los tipos de datos primitivos son aquellos que no son objetos y no tienen métodos.los primitivos son valores simples e inmutables guardados directamente en la memoria, mientras que los no primitivos son estructuras dinámicas que guardan una referencia a un lugar en la memoria Los tipos de datos primitivos en JavaScript son:

// 1. Number: Representa números, tanto enteros como decimales.
// 2. String: Representa cadenas de texto.
// 3. Boolean: Representa valores de verdad, true o false.
// 4. Undefined: Representa una variable que ha sido declarada pero no inicializada.
// 5. Null: Representa la ausencia intencional de cualquier valor u objeto.
// 6. Symbol: Introducido en ES6, representa un valor único e inmutable.
// 7. BigInt: Introducido en ES2020, representa números enteros grandes que no pueden ser representados por el tipo Number.
// 8. Simbol: Introducido en ES6, representa un valor único e inmutable que se puede utilizar como identificador para propiedades de objetos. PPara crear un símbolo, se utiliza la función Symbol() y se le puede pasar un descriptor opcional como argumento.

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