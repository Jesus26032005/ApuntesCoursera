// En el mundo real, heredar es adquirir una posesión de generaciones pasadas.
// En JavaScript también existe la herencia, y el modelo gira en torno a un PROTOTIPO.

// Un prototipo suele considerarse un modelo original a partir del cual se desarrollan otras formas.
// En JavaScript, el prototipo es un objeto que puede contener propiedades compartidas
// por otros múltiples objetos. Esta es la base de cómo funciona la herencia en JavaScript,
// por eso se dice que JavaScript implementa un modelo de herencia basado en prototipos.



// Objeto bird con tres propiedades, todas con valor booleano true
var bird = {
    hasWings: true,    // tiene alas
    canFly: true,      // puede volar
    hasFeathers: true  // tiene plumas
};

// Con Object.create() se construyen nuevos objetos que usan bird como PROTOTIPO
var eagle1 = Object.create(bird);

// El objeto eagle1 aparece VACÍO en la consola, porque no tiene propiedades propias
console.log(eagle1);

// Sin embargo, tiene acceso a todas las propiedades de bird (su prototipo)
console.log("eagle1 has wings", eagle1.hasWings);
console.log("eagle1 can fly", eagle1.canFly);  
console.log("eagle1 has feathers", eagle1.hasFeathers);


// 2. SE PUEDEN CONSTRUIR TANTOS OBJETOS COMO SE QUIERA

// Todos tendrán el objeto bird como su prototipo
var eagle2 = Object.create(bird);
console.log("eagle2 has wings", eagle2.hasWings); // true


// 3. SOBRESCRIBIR (ANULAR) PROPIEDADES HEREDADAS

// También se pueden añadir objetos con comportamientos diferentes.
// Los pingüinos son aves no voladoras, así que "canFly" debe ser false.
var penguin1 = Object.create(bird);

// JavaScript parte del propio objeto cuando busca propiedades:
//   1) Busca en el objeto.
//   2) Si no la encuentra, busca en su prototipo.
// Si la encuentra en el objeto inmediato, ya NO busca más.
// Esto lo convierte en un mecanismo simple para anular propiedades heredadas.
penguin1.canFly = false;

console.log(penguin1);              // { canFly: false }  (propiedad propia)
console.log(penguin1.hasFeathers);  // true  (viene del prototipo)
console.log(penguin1.canFly);       // false (anula la del prototipo)

// La anulación solo afecta a penguin1:
// no cambia el prototipo (bird) ni a los demás objetos (eagle1, eagle2).
console.log(bird.canFly);    // true
console.log(eagle1.canFly);  // true
console.log(eagle2.canFly);  // true


// 4. COMPLEMENTO: COMPROBAR PROPIAS VS HEREDADAS
console.log(Object.getPrototypeOf(eagle1) === bird);  // true (bird es el prototipo de eagle1)
console.log(penguin1.hasOwnProperty("canFly"));       // true  (propia)
console.log(penguin1.hasOwnProperty("hasFeathers"));  // false (heredada)
console.log(bird.isPrototypeOf(eagle2));              // true


// 5. COMPLEMENTO: SINTAXIS DE CLASE
// Aunque es posible construir herencia con Object.create(), probablemente sea mejor
// usar la sintaxis de CLASE para objetos más complejos y herencia.
// En realidad, esta sintaxis sigue funcionando con prototipos por debajo.
// Tiene sentido usar clases porque mejoran la experiencia del desarrollador
// en escenarios más complejos.
class Bird {
    constructor() {
        this.hasWings = true;
        this.canFly = true;
        this.hasFeathers = true;
    }
}

class Penguin extends Bird {
    constructor() {
        super();            // hereda las propiedades de Bird
        this.canFly = false; // anula canFly
    }
}

const penguin2 = new Penguin();
console.log(penguin2.canFly); 
console.log(penguin2.hasFeathers);
// Debajo, Penguin sigue usando prototipos:
console.log(Object.getPrototypeOf(Penguin.prototype) === Bird.prototype);