// Un constructor is una función especial que se utiliza para crear objetos y establecer sus propiedades y métodos. En JavaScript, los constructores se definen utilizando la palabra clave "function" seguida del nombre del constructor, y se utilizan con la palabra clave "new" para crear instancias de objetos.

// Ejemplo de un constructor en JavaScript
function Persona(nombre, edad) {
    this.nombre = nombre; // Propiedad nombre
    this.edad = edad;     // Propiedad edad
}

let persona1 = new Persona("Juan", 30);

// Nota: Cada objeto es unico por lo tanto si se crea un objeto con el mismo constructor, este tendrá sus propias propiedades y métodos, aunque compartan el mismo constructor.

let persona2 = new Persona("Juan", 30);

console.log(persona1==persona2);

// RENDIMIENTO Y BUENAS PRÁCTICAS CON LOS CONSTRUCTORES
 
// Usar constructores en todos los objetos incorporados a veces no es el mejor enfoque.
// Esto es especialmente cierto para los constructores de tipos primitivos:
// String, Number y Boolean.
 
// Con el constructor incorporado String se puede construir una cadena:
let apple = new String("apple"); // apple es un OBJETO de tipo String
 
// En cambio, pear es un literal de cadena, es decir, un valor PRIMITIVO:
let pear = "pear";
 
console.log(typeof apple); 
console.log(typeof pear);
 
// Al ser un valor primitivo, pear siempre será más eficiente que apple, que es un objeto.
 
// Además, como cada objeto en JavaScript es único, no se puede comparar un objeto String
// con otro objeto String, incluso cuando sus valores son idénticos.
// (Es el mismo caso de persona1 == persona2 de arriba)
console.log(new String("plum") === new String("plum"));
console.log("plum" === "plum");
 
// Da false al comparar objetos porque no se comparan los valores que se pasan al
// constructor, sino la ubicación de memoria donde se guardan los objetos.
// Lo mismo aplica para Number y Boolean:
let num1 = new Number(5); // objeto (evitar)
let num2 = 5;             // primitivo (usar)
 
let bool1 = new Boolean(true); // objeto (evitar)
let bool2 = true;              // primitivo (usar)
 
 
// PATRONES Y LITERALES ALTERNATIVOS
 
// Además de no usar constructores para crear versiones objeto de primitivos,
// es mejor no usarlos al construir objetos normales y corrientes.
 
// En lugar de new Object(), se debe utilizar la sintaxis literal de objeto: {}
let obj1 = new Object(); // evitar
let obj2 = {};           // usar
 
// Un objeto RegExp es otro objeto incorporado en JavaScript. Se utiliza para hacer coincidir
// patrones en cadenas mediante "Expresiones Regulares" (existen en muchos lenguajes, no solo en JS).
 
// Se puede crear con el constructor RegExp:
let regex1 = new RegExp("d"); // evitar
 
// Alternativamente, se puede usar un literal de patrón, por ejemplo /d/,
// que se pasa como argumento al método match sobre una cadena:
let regex2 = /d/;       
console.log("abcd".match(/d/))
 
// En lugar de usar los constructores Array, Function y RegExp, se deben usar
// sus variedades literales: literal de matriz, de función y de patrón.
let arreglo1 = new Array();                         // evitar
let arreglo2 = [];                                  // usar ([])
 
let funcion1 = new Function("a", "b", "return a + b"); // evitar
let funcion2 = function (a, b) { return a + b; };      // usar (function () {})
 
let patron1 = new RegExp("abc"); // evitar
let patron2 = /abc/;             // usar (/ /)
 
 
// ¿CUÁNDO SÍ USAR CONSTRUCTORES?
 
// Al construir objetos de otros tipos incorporados, sí podemos utilizar el constructor.
// La lista no es exhaustiva, solo da una idea de algunos tipos de objetos que seguramente se pueden usar:
let fecha = new Date();
let mapa = new Map();
let conjunto = new Set();
let error = new Error("Algo salió mal");
let promesa = new Promise((resolve, reject) => resolve("listo"));
 
// Y por supuesto, los constructores personalizados como Persona:
let persona3 = new Persona("Ana", 25);
