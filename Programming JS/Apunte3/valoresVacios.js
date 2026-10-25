// null, undefined y "" representan situaciones distintas; no son una categoría única de valores vacíos del lenguaje.

// null representa la ausencia intencional de cualquier valor u objeto. Es un valor asignado explícitamente para representar ausencia según las reglas del programa. Por ejemplo:
let variableNull = null;
console.log(variableNull);
// Una función puede devolver null de forma explícita para indicar ausencia.
// Si no tiene return con un valor, devuelve undefined, no null. Un parámetro opcional solo usa null por defecto si así lo declaramos.

// undefined representa la ausencia de un valor asignado a una variable. Se utiliza para indicar que una variable ha sido declarada pero no se le ha asignado ningún valor. Por ejemplo:
let variableUndefined;
console.log(variableUndefined);
// En las funciones ordinarias, llegar al final sin return con un valor produce undefined; return; también lo hace.
// Leer una variable nunca declarada lanza ReferenceError, no devuelve undefined.
// Acceder a una propiedad ausente de un objeto sí devuelve normalmente undefined.

// string vacio representa una cadena de texto que no contiene ningún carácter. Es un valor de texto válido de longitud cero; no significa que falte asignar un valor.

// Nota: undefined indica que una variable fue declarada pero aún no tiene un valor asignado, mientras que null se asigna de forma consciente y deliberada para representar la ausencia intencional de un valor.

/*
Cuándo usar undefined
• Normalmente deja que JavaScript lo produzca; también es válido pasarlo o asignarlo de forma explícita si el contrato lo requiere.
• Se produce automáticamente cuando:
	• Declaras una variable sin inicializarla (let x;).
	• Accedes a una propiedad que no existe en un objeto.
	• Una función ordinaria no tiene un return con valor.
	• Un parámetro no recibe argumento ni tiene un valor por defecto.
• Regla práctica: Es el estado por defecto que el motor de JavaScript le da a las cosas que aún no han sido definidas.

Cuándo usar null
• Asígnalo tú mismo: Úsalo cuando quieras indicar de forma explícita que una variable o propiedad está vacía a propósito.
• Casos comunes:
	• Limpiar el valor de una variable que antes contenía datos.
	• Representar la ausencia de un objeto o resultado esperado (por ejemplo, cuando una búsqueda en una base de datos no devuelve ningún registro).
	• Inicializar una variable que sabes que contendrá un objeto o valor más adelante, pero que por ahora está vacía.
*/