// Operadores en JavaScript

// Los operadores son símbolos que realizan operaciones sobre uno o más valores (operandos) y devuelven un resultado. En JavaScript, existen varios tipos de operadores, entre los cuales se incluyen:

// 1. Operadores Aritméticos: Se utilizan para realizar operaciones matemáticas básicas como suma, resta, multiplicación, división, etc.
let a = 10;
let b = 5;

console.log(a + b); // Suma: 15
console.log(a - b); // Resta: 5
console.log(a * b); // Multiplicación: 50
console.log(a / b); // División: 2
console.log(a % b); // Resto de la división: 0 (con negativos no equivale siempre al módulo matemático).
console.log(a ** b); // Exponenciación: 100000

// 2. Operadores de Asignación: Se utilizan para asignar valores a las variables.
let c = 20;
c += 5; // Equivalente a c = c + 5
console.log(c); // Salida: 25

c -= 10; // Equivalente a c = c - 10
console.log(c); // Salida: 15

c *= 2; // Equivalente a c = c * 2
console.log(c); // Salida: 30

c /= 3; // Equivalente a c = c / 3
console.log(c); // Salida: 10

c %= 4; // Equivalente a c = c % 4
console.log(c); // Salida: 2

// Con Number, un valor positivo entre +0 da Infinity y uno negativo da -Infinity; 0 / 0 da NaN.
// Con BigInt, dividir entre cero lanza RangeError. Number.isFinite ayuda a rechazar resultados no finitos.

// 3. Operadores de Comparación: Se utilizan para comparar valores y devuelven un valor booleano (true o false).
let d = 10;
let e = "10";

console.log(d == e); // Igualdad con conversión automática de tipos: true
console.log(d === e); // Igualdad estricta (compara valores y tipos): false
console.log(d != e); // Desigualdad con conversión automática de tipos: false
console.log(d !== e); // Desigualdad estricta (compara valores y tipos): true
console.log(d > 5); // Mayor que: true
console.log(d < 15); // Menor que: true
console.log(d >= 10); // Mayor o igual que: true
console.log(d <= 10); // Menor o igual que: true

// 4. Operadores Lógicos: permiten combinar condiciones y usan cortocircuito.
// && y || devuelven operandos, no necesariamente booleanos: "Ada" || "Invitado" devuelve "Ada".
// && omite el segundo operando si el primero es falsy; || lo omite si el primero es truthy.
let f = true;
let g = false;

console.log(f && g); // AND lógico: false
console.log(f || g); // OR lógico: true
console.log(!f); // NOT lógico: false

// 5. Operadores de Incremento y Decremento: Se utilizan para aumentar o disminuir el valor de una variable en 1.
let h = 5;

h++; // Incremento: h = h + 1
console.log(h); // Salida: 6

h--; // Decremento: h = h - 1
console.log(h); // Salida: 5

// 6. Operadores de Concatenación: Se utilizan para unir cadenas de texto.
let saludo = "Hola";
let nombre = "Mundo";

let mensaje = saludo + " " + nombre; // Concatenación
console.log(mensaje); // Salida: Hola Mundo

// 7. Operadores Ternarios: Se utilizan como una forma abreviada de una declaración if-else.
let edadUsuario = 18;
let mensajeEdad = (edadUsuario >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensajeEdad); // Salida: Eres mayor de edad