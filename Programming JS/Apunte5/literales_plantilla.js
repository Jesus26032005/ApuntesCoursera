// Los literales de plantilla (template literals) son una forma de crear cadenas de texto en JavaScript que permite incluir expresiones y variables de manera más legible y flexible que las comillas simples o dobles tradicionales. Se delimitan con backticks (`) en lugar de comillas.

// 1. INTERPOLACIÓN DE VARIABLES Y EXPRESIONES
var name = "John";
var age = 30;

// Antes de los literales de plantilla, se concatenaban las cadenas con el operador +:
var message1 = "My name is " + name + " and I am " + age + " years old.";
console.log(message1);

// Con literales de plantilla, se puede usar la sintaxis ${} para insertar variables y expresiones directamente en la cadena:
var message2 = `My name is ${name} and I am ${age} years old.`;
console.log(message2);

// También se pueden incluir expresiones más complejas dentro de ${}:
var message3 = `Next year, I will be ${age + 1} years old.`;
console.log(message3);

// 2. MULTILÍNEA
// Antes de los literales de plantilla, se usaban caracteres de escape (\n) para crear cadenas multilínea:
var multiline1 = "This is line 1.\nThis is line 2.";
console.log(multiline1);

// Con literales de plantilla, se pueden crear cadenas multilínea directamente:
var multiline2 = `This is line 1.
This is line 2.`;
console.log(multiline2);

// 3. FUNCIONES DE ETIQUETADO (TAGGED TEMPLATES)
// Los literales de plantilla también permiten definir funciones de etiquetado que procesan la cadena antes de devolverla. Esto es útil para crear plantillas personalizadas o para realizar validaciones.
function tag(strings, ...values) {
    console.log(strings); // Array de cadenas literales
    console.log(values);  // Array de valores interpolados
    return strings[0] + values.map((value, index) => `${value}${strings[index + 1]}`).join('');
}