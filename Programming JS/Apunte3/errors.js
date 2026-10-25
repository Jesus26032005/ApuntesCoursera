// fallo: El programa continua ejecutandose y da un resultado inesperado
// error: El programa se detiene y muestra un mensaje de error

// Alguunos errores que existen son los siguientes:
// syntax error: error de sintaxis, se produce cuando el programa no cumple con las reglas del lenguaje de programación
// runtime error: error en tiempo de ejecucion, se produce cuando el programa se esta ejecutando
// value error: error de valor, se produce cuando se intenta realizar una operación con un valor incorrecto
// type error: error de tipo, se esta intentando realizar una operación con un tipo de dato incorrecto


// Bloque try-catch: permite manejar los errores de manera controlada, evitando que el programa se detenga y mostrando un mensaje de error personalizado


// trhow: permite lanzar un error de manera manual, deteniendo la ejecucion del programa y mostrando un mensaje de error personalizado

try {
    console.log("Hola mundo");
    throw new Error("Este es un error de prueba");
    throw new TypeError("Este es un error de tipo");
} catch (error) {
    console.log("Se produjo un error: " + error.message);
}

// A diferencia del try-catch en otros lenguajes aqui se capta el error en general, y posteriormente se puede determinar el tipo de error que se produjo, para poder manejarlo de manera adecuada mediante condicionales if-else o switch-case, dependiendo del tipo de error que se haya producido.

try {
    throw new TypeError("Este es un error de tipo");
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Se produjo un error de tipo: " + error.message);
    } else if (error instanceof RangeError) {
        console.log("Se produjo un error de rango: " + error.message);
    } else if (error instanceof ReferenceError) {
            console.log("Se produjo un error de referencia: " + error.message);
    } else if (error instanceof SyntaxError) {
            console.log("Se produjo un error de sintaxis: " + error.message);
    } else if (error instanceof EvalError) {
            console.log("Se produjo un error de evaluación: " + error.message);
    } else if (error instanceof URIError) {
            console.log("Se produjo un error de URI: " + error.message);
    } else {
            console.log("Se produjo un error desconocido: " + error.message);
    }
}

// existen diferentes constructores de error, como Error, TypeError, RangeError, ReferenceError, SyntaxError, EvalError y URIError. Cada uno de ellos tiene un significado diferente y se utiliza para manejar diferentes tipos de errores: 
// Error: error genérico, se utiliza para manejar errores generales
// TypeError: error de tipo, se utiliza para manejar errores relacionados con tipos de datos
// RangeError: error de rango, se utiliza para manejar errores relacionados con valores fuera de un rango permitido
// ReferenceError: error de referencia, se utiliza para manejar errores relacionados con referencias a variables o funciones que no existen
// SyntaxError: error de sintaxis, se utiliza para manejar errores relacionados con la sintaxis del código
// RangeError: error de rango, se utiliza para manejar errores relacionados con valores fuera de un rango permitido
// AggregateError: error de agregación, se utiliza para manejar múltiples errores al mismo tiempo
// InternalError: error interno, se utiliza para manejar errores internos del motor de JavaScript
// URIError: error de URI, se utiliza para manejar errores relacionados con la codificación y decodificación de URIs
// UnknownError: error desconocido, se utiliza para manejar errores que no se pueden clasificar en ninguna de las categorías anteriores
// EvalError: error de evaluación, se utiliza para manejar errores relacionados con la función eval()
// URIError: error de URI, se utiliza para manejar errores relacionados con la codificación y decodificación de URIs

try {
    console.log(username) // Reference error
    //var a xd // Syntax error
    "hello".pop() // Type error
    (10).toString(2) // Range error

} catch (error) {
    console.log("Se produjo un error: " + error.message);
}

function addNumbers(a, b) {
  return a - b; // Logical error
}
console.log(addNumbers(5, 3));  


// Propiedades de los objetos de error
// name: nombre del error
// message: mensaje de error
// stack: pila de llamadas, muestra la secuencia de llamadas que llevaron al error

// Tarea
function addTwoNums(a,b) {
    try {
        if (typeof a !== Number) {
            throw new TypeError("The first argument is not a number")
        } else if (typeof b!== Number) {
            throw new TypeError("The second argument is not a number")
        } else {
            console.log(a+b)
        }
        
    } catch(error) {
        console.log(error.message
    
        )
    }
    
}
addTwoNums(5+"5")

// Nota: Tambien existe finally, que se ejecuta siempre, independientemente de si se produjo un error o no. Se utiliza para liberar recursos o realizar tareas de limpieza después de un bloque try-catch.

try {
    console.log("Hola mundo");
    throw new Error("Este es un error de prueba");
} catch (error) {
    console.log("Se produjo un error: " + error.message);
} finally {
    console.log("Este bloque se ejecuta siempre, independientemente de si se produjo un error o no.");
}