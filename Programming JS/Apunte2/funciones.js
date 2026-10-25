// una funcion es un bloque de codigo que se puede reutilizar y ejecutar en cualquier momento

function saludar(nombre) {
    console.log("Hola " + nombre);
}

// llamando a la funcion
saludar("Juan");
saludar("Maria");

// una funcion puede recibir parametros y retornar un valor
function sumar(a, b) {
    return a + b;
}

let resultado = sumar(5, 3);
console.log("El resultado de la suma es: " + resultado);

// una funcion puede ser anonima y asignarse a una variable

let multiplicar = function(a, b) {
    return a * b;
};

let resultadoMultiplicacion = multiplicar(4, 6);
console.log("El resultado de la multiplicacion es: " + resultadoMultiplicacion);

// una funcion puede tener parametros por defecto
function saludarConEdad(nombre, edad = 18) {
    console.log("Hola " + nombre + ", tienes " + edad + " años.");
}

saludarConEdad("Pedro");
saludarConEdad("Ana", 25);

// Tarea 1: Escriba una función llamada letterFinder que acepte dos parámetros: word y match

function letterFinder(word, match) {
    for (let i= 0; i< word.length; i++) {
        if (word[i] === match) {
            console.log("found the", match, "at ", i)
        } else {
            console.log("-- No match found at ", i)
        }
    }  
}
letterFinder("test", "t");