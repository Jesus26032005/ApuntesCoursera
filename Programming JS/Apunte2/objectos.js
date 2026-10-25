// Los objetos son un tipo de dato que nos permite almacenar colecciones de datos y funcionalidades. Un objeto es una entidad independiente con propiedades y tipos. Comparado con otros tipos de datos, los objetos son más complejos.

// Un objeto se define utilizando llaves {} y contiene pares de clave-valor. Cada clave es un string (o símbolo) y cada valor puede ser cualquier tipo de dato, incluyendo otros objetos o funciones.

let persona = {
    nombre: "Zaddkiel",
    edad: 30,
}

// Para que un objeto tenga una funcionalidad, podemos agregarle métodos. Un método es una función que está asociada a un objeto.

let persona2 = {
    nombre: "Zaddkiel",
    edad: 30,
    saludar: function() {
        console.log("Hola, mi nombre es " + this.nombre);
    },
    añosEdad: function() {
        console.log("Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.");
    },
    cambiarEdad: function(nuevaEdad) {
        this.edad = nuevaEdad;
    }
}

// para acceder o cambiar los valores de un objeto, podemos usar la notación de punto o la notación de corchetes.

console.log(persona.nombre); // notación de punto
console.log(persona["edad"]); // notación de corchetes

// para agregar una nueva propiedad a un objeto, podemos usar la notación de punto o la notación de corchetes.

persona.apellido = "Gonzalez"; // notación de punto
persona["ciudad"] = "Madrid"; // notación de corchetes

// para eliminar una propiedad de un objeto, podemos usar el operador delete.

delete persona.apellido; // elimina la propiedad apellido del objeto persona

// para llamar a un metodo de un objeto, podemos usar la notación de punto o la notación de corchetes.

persona2.saludar(); // notación de punto
persona2["añosEdad"](); // notación de corchetes

// dentro de un objeto si se quiere acceder a una propiedad del mismo objeto, se puede usar la palabra reservada this.
let persona3 = {
    nombre: "Zaddkiel",
    edad: 30,
    saludador: function() {
        console.log("Hola, mi nombre es " + this.nombre);
    }
}

// asimismo se pueden tener otros objetos dentro de otros objetos, lo que se conoce como objetos anidados y para acceder a las propiedades de un objeto anidado, se puede usar la notación de punto o la notación de corchetes.

let persona4 = {
    nombre: "Zaddkiel",
    edad: 30,
    direccion: {
        calle: "Calle Falsa",
        numero: 123,
        ciudad: "Madrid",
        imprimirNumero: function() {
            console.log(this.numero)
        }
    },
    imprimirDireccion: function() {
        console.log("La dirección es: " + this.direccion.calle + " " + this.direccion.numero + ", " + this.direccion.ciudad);
    }
}

// para acceder a las propiedades de un objeto anidado, se puede usar la notación de punto o la notación de corchetes.

console.log(persona4.direccion.calle); // notación de punto
console.log(persona4["direccion"]["numero"]); // notación de corchetes

// Usuando la notacion de corchetes se puede acceder a las propiedades de un objeto usando una variable que contenga el nombre de la propiedad.
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}

// para añadir un metodo a un objeto, se puede usar la notación de punto o la notación de corchetes.
persona4.imprimir = function() {
    console.log("Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.");
}
persona4.imprimir();

// para recorrer un objeto, se puede usar un bucle for...in, que itera sobre las propiedades enumerables de un objeto.
for (var key in persona4) {
    console.log(key + ": " + persona4[key]);
}

// tambien se puede usar for of para recorrer un objeto, pero primero se debe convertir el objeto en un array de pares clave-valor usando Object.entries().
for (var [key, value] of Object.entries(persona4)) {
    console.log(key + ": " + value);
}

// Tarea 1:
let favCar = {}
favCar.color = "azul"
favCar.convertible = false
console.log(favCar)


// nota: un objeto sin asignar propiedades es un objeto vacío, y se puede crear usando llaves {} o usando el constructor Object().

objetoVacio1 = {}
objetoVacio2 = new Object()

console.log(objetoVacio1)
console.log(objetoVacio2)

// cuando usar un objeto o un array depende del tipo de datos que se quiera almacenar y de cómo se quiera acceder a ellos. Es decir, si se quiere almacenar una colección de elementos ordenados y se quiere acceder a ellos por su índice, se debe usar un array. Si se quiere almacenar una colección de elementos no ordenados y se quiere acceder a ellos por su clave, se debe usar un objeto. Ademas , los arrays tienen métodos y propiedades específicas para trabajar con colecciones de elementos, mientras que los objetos tienen métodos y propiedades específicas para trabajar con pares clave-valor.