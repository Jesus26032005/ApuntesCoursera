// Existen tres valores que se consideran vacíos en JavaScript: null, undefined y string vacios.

// null representa la ausencia intencional de cualquier valor u objeto. Se utiliza para indicar que una variable no tiene ningún valor asignado. Por ejemplo:
let variableNull = null;
console.log(variableNull);
// tambien se usa como valor de retorno de una función que no devuelve ningún valor, o como valor predeterminado para un parámetro opcional en una función.

// undefined representa la ausencia de un valor asignado a una variable. Se utiliza para indicar que una variable ha sido declarada pero no se le ha asignado ningún valor. Por ejemplo:
let variableUndefined;
console.log(variableUndefined);
// Casi todas las funciones devuelven undefined si no se especifica un valor de retorno. Por ejemplo, si una función no tiene una declaración return, devolverá undefined de forma predeterminada.
// si una variable no esta definida igual adquiere el valor de undefined

// string vacio representa una cadena de texto que no contiene ningún carácter. Se utiliza para indicar que una variable de tipo string no tiene ningún valor asignado.

// Nota: undefined indica que una variable fue declarada pero aún no tiene un valor asignado, mientras que null se asigna de forma consciente y deliberada para representar la ausencia intencional de un valor.

/*
Cuándo usar undefined
• No lo asignes manualmente: Deja que JavaScript lo gestione.
• Se produce automáticamente cuando:
	• Declaras una variable sin inicializarla (let x;).
	• Accedes a una propiedad que no existe en un objeto.
	• Una función no tiene un return explícito o le faltan argumentos en la llamada.
• Regla práctica: Es el estado por defecto que el motor de JavaScript le da a las cosas que aún no han sido definidas.

Cuándo usar null
• Asígnalo tú mismo: Úsalo cuando quieras indicar de forma explícita que una variable o propiedad está vacía a propósito.
• Casos comunes:
	• Limpiar el valor de una variable que antes contenía datos.
	• Representar la ausencia de un objeto o resultado esperado (por ejemplo, cuando una búsqueda en una base de datos no devuelve ningún registro).
	• Inicializar una variable que sabes que contendrá un objeto o valor más adelante, pero que por ahora está vacía.
*/