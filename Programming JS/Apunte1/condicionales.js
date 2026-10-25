// Los condicionales en JavaScript permiten ejecutar diferentes bloques de código según se cumpla o no una condición. Los principales condicionales son if, if-else, if -else if y switch.

// Nos ayudamos de los operadores de comparación y lógicos para evaluar las condiciones. Los operadores de comparación incluyen: ==, ===, !=, !==, >, <, >=, <=. Los operadores lógicos incluyen: && (AND), || (OR), ! (NOT), estos permiten combinar múltiples condiciones y evaluar su veracidad.



// 1. if: Se utiliza para ejecutar un bloque de código si una condición es verdadera.
let edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad.");
}

// 2. if-else: Se utiliza para ejecutar un bloque de código si una condición es verdadera y otro bloque si es falsa.
let hora = 10;

if (hora < 12) {
    console.log("Buenos días.");
} else {
    console.log("Buenas tardes.");
}

// 3. if-else if: Se utiliza para evaluar múltiples condiciones y ejecutar diferentes bloques de código según cuál sea verdadera.
let dia = "lunes";

if (dia === "lunes") {
    console.log("Hoy es lunes.");
} else if (dia === "martes") {
    console.log("Hoy es martes.");
} else {
    console.log("Hoy no es ni lunes ni martes.");
}

// 4. switch: Se utiliza para ejecutar diferentes bloques de código según el valor de una expresión. Usa comparacion estrica
let fruta = "manzana";

switch (fruta) {
    case "manzana":
        console.log("Es una manzana.");
        break;
    case "banana":
        console.log("Es una banana.");
        break;
    default:
        console.log("No es ni manzana ni banana.");
}

// Ejemplos compuestos
dia= "lunes"
hora= "15:00"

if (dia === "lunes" && hora === "14:00") {
    console.log("xd")
}


if (dia !== "lunes") {
     console.log("xd")
}

// Nota: Tambien el operador terniario se puede considear un codnicional comprimido de if-else

(dia === "lunes") ? console.log("lunes") : console.log("otro dia")

// Ejemplo intencional de asignación dentro de una condición: NO es una comparación.
// x = 5 asigna el número 5; después if lo interpreta como verdadero porque no es cero.
// Para comparar, asigna antes y escribe if (x === 5).
let x;
if (x = 5) { // Asignación en la condición
    console.log("La variable x es igual a 5.");
} else {
    console.log("La variable x no es igual a 5.");
}