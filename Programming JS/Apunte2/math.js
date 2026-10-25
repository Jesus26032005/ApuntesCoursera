// JavaScript dispone de objetos integrados muy útiles. Uno de estos objetos incorporados populares es el objeto Math .

// constantes
// Math.E: devuelve el valor de la constante matemática e
console.log(Math.E); 

// Math.PI: devuelve el valor de la constante matemática pi
console.log(Math.PI); 

// métodos
// Math.abs(x): devuelve el valor absoluto de x
console.log(Math.abs(-5)); 

// Math.ceil(x): devuelve el entero mayor o igual más próximo a x
console.log(Math.ceil(4.2)); 

// Math.floor(x): devuelve el entero menor o igual más próximo a x
console.log(Math.floor(4.8)); 

// Math.round(x): devuelve el valor de x redondeado al entero más próximo
console.log(Math.round(4.5)); 

// Math.trunc(x): devuelve la parte entera de x, eliminando cualquier dígito decimal
console.log(Math.trunc(4.9)); 

// math tiene metodos para calcular potencias y raices cuadradas
// Math.pow(x, y): devuelve el valor de x elevado a la potencia de y
console.log(Math.pow(2, 3)); 

// Math.sqrt(x): devuelve la raíz cuadrada de x
console.log(Math.sqrt(16)); 

// Math.cbrt(x): devuelve la raíz cúbica de x
console.log(Math.cbrt(27)); 

// Math.log(x): devuelve el logaritmo natural (base e) de x
console.log(Math.log(Math.E)); 

// Math.log10(x): devuelve el logaritmo en base 10 de x
console.log(Math.log10(100)); 

// Math.log2(x): devuelve el logaritmo en base 2 de x
console.log(Math.log2(8)); 

// Math.exp(x): devuelve e elevado a la potencia de x
console.log(Math.exp(1)); 

// Math.random(): devuelve un número pseudoaleatorio entre 0 (inclusive) y 1 (exclusivo), es decir, un número decimal aleatorio que incluye 0 pero no incluye 1.
console.log(Math.random());

// si quisieramos un metodo entre un rango de numeros, podemos hacer lo siguiente:
function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}
console.log(randomInRange(1, 10));

// si quisieramos entre 0 y otro valor, podemos hacer lo siguiente:
function randomUpTo(max) {
    return Math.random() * max;
}
console.log(randomUpTo(10));