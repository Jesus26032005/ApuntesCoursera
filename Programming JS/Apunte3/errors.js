// fallo: El programa continua ejecutandose y da un resultado inesperado
// excepción: interrumpe el flujo normal; si no se maneja, puede terminar la ejecución.

// Alguunos errores que existen son los siguientes:
// syntax error: error de sintaxis, se produce cuando el programa no cumple con las reglas del lenguaje de programación
// runtime error: error en tiempo de ejecucion, se produce cuando el programa se esta ejecutando
// Un valor puede ser inválido para el problema, pero ValueError no es un constructor estándar de JavaScript.
// type error: error de tipo, se esta intentando realizar una operación con un tipo de dato incorrecto


// Bloque try-catch: permite manejar los errores de manera controlada, evitando que el programa se detenga y mostrando un mensaje de error personalizado


// throw: permite lanzar un error de manera manual, deteniendo la ejecucion del programa y mostrando un mensaje de error personalizado

try {
    console.log("Hola mundo");
    throw new Error("Este es un error de prueba");
    // No se ejecutaría otro throw aquí: el primero ya transfiere el control al catch.
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
// InternalError: existe en algunos motores, pero no es un constructor estándar portable de ECMAScript.
// URIError: error de URI, se utiliza para manejar errores relacionados con la codificación y decodificación de URIs
// UnknownError no es un constructor estándar general de ECMAScript; para un error genérico usa Error.
// EvalError: error de evaluación, se utiliza para manejar errores relacionados con la función eval()
// URIError: error de URI, se utiliza para manejar errores relacionados con la codificación y decodificación de URIs

// Cada error intencional se captura por separado para que todos los ejemplos se ejecuten.
try {
    console.log(username); // ReferenceError: no se declaró este nombre.
} catch (error) {
    console.log("Se produjo un error: " + error.message);
}
try {
    "hello".pop(); // TypeError: los strings no tienen pop().
} catch (error) {
    console.log("Se produjo un error: " + error.message);
}
console.log((10).toString(2)); // "1010": la base 2 es válida.
try {
    (10).toString(1); // RangeError: las bases admitidas van de 2 a 36.
} catch (error) {
    console.log("Se produjo un error: " + error.message);
}
// Un error de sintaxis escrito directamente impediría analizar todo el archivo.
// JSON.parse permite mostrar un SyntaxError producido durante la ejecución.
try {
    JSON.parse('{"nombre": }');
} catch (error) {
    console.log("Se produjo un error: " + error.message);
}

function addNumbers(a, b) {
  return a + b; // Corregido: restar aquí sería un error lógico, aunque el programa se ejecute.
}
console.log(addNumbers(5, 3));  


// Propiedades de los objetos de error
// name: nombre del error
// message: mensaje de error
// stack: pila de llamadas, muestra la secuencia de llamadas que llevaron al error

// Tarea
function addTwoNums(a,b) {
    try {
        if (!Number.isFinite(a)) {
            throw new TypeError("The first argument must be a finite number")
        } else if (!Number.isFinite(b)) {
            throw new TypeError("The second argument must be a finite number")
        } else {
            const result = a + b;
            console.log(result);
            return result;
        }
        
    } catch(error) {
        console.log(error.message);
    }
    
}
// La coma separa argumentos. 5 + "5" sería un solo argumento de texto: "55".
addTwoNums(5, 5);   // Caso válido: muestra y devuelve 10.
addTwoNums(5, "5"); // Caso inválido intencional: muestra el mensaje del segundo argumento.

// Nota: Tambien existe finally, que se ejecuta siempre, independientemente de si se produjo un error o no. Se utiliza para liberar recursos o realizar tareas de limpieza después de un bloque try-catch.

try {
    console.log("Hola mundo");
    throw new Error("Este es un error de prueba");
} catch (error) {
    console.log("Se produjo un error: " + error.message);
} finally {
    console.log("Este bloque se ejecuta siempre, independientemente de si se produjo un error o no.");
}
// typeof devuelve texto, como "number", no el constructor Number.
// Number.isFinite comprueba además que el dato no sea NaN ni infinito.
