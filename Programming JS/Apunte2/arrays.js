// un array es un tipo de dato que permite almacenar multiples valores en una sola variable estos pueden ser de cualquier tipo de dato, incluyendo otros arrays y objetos

let frutas = ["manzana", "banana", "naranja"];
console.log(frutas);

// acceder a un elemento del array
console.log(frutas[0]); // manzana
console.log(frutas[1]); // banana
console.log(frutas[2]); // naranja

// modificar un elemento del array
frutas[1] = "kiwi";
console.log(frutas); // ["manzana", "kiwi", "naranja"]

// Algunos atributos para los arrays son:
// length: devuelve el numero de elementos en el array
console.log(frutas.length)

// push: agrega uno o mas elementos al final del array
frutas.push("pera");
console.log(frutas); // ["manzana", "kiwi", "naranja", "pera"]

// pop: elimina el ultimo elemento del array y lo devuelve
let ultimaFruta = frutas.pop();
console.log(ultimaFruta); // "pera"
console.log(frutas); // ["manzana", "kiwi", "naranja"]

// unshift: agrega uno o mas elementos al inicio del array
frutas.unshift("fresa");
console.log(frutas); // ["fresa", "manzana", "kiwi", "naranja"]

// shift: elimina el primer elemento del array y lo devuelve
let primeraFruta = frutas.shift();
console.log(primeraFruta); // "fresa"
console.log(frutas); // ["manzana", "kiwi", "naranja"]

// indexOf: devuelve el indice del primer elemento que coincida con el valor especificado, o -1 si no se encuentra
let indice = frutas.indexOf("kiwi");
console.log(indice); // 1

// includes: devuelve true si el array contiene el elemento especificado, o false en caso contrario
let contieneNaranja = frutas.includes("naranja");
console.log(contieneNaranja); // true

// slice: devuelve una copia de una parte del array dentro de un nuevo array, sin modificar el array original, sus argumentos son el indice de inicio y el indice de fin el cual no es incluido en el nuevo array
let algunasFrutas = frutas.slice(1, 3);
console.log(algunasFrutas); // ["kiwi", "naranja"]
console.log(frutas); // ["manzana", "kiwi", "naranja"]

// for...in recorre claves enumerables como texto y puede incluir propiedades heredadas o adicionales.
// En este array sencillo coinciden con sus índices; para recorrer valores normalmente preferimos for...of.
for (let i in frutas) {
    console.log(frutas[i]);
}

// se puede utilizar un bucle for of para recorrer un array y acceder a sus elementos, for of devuelve el valor de cada elemento del array, por lo que se puede acceder a los elementos del array directamente
for (let fruta of frutas) {
    console.log(fruta);
}

// Una matriz puede representarse con arrays anidados, por ejemplo [[1, 2], [3, 4]].
// No es un tipo distinto de array: cada elemento del array exterior es otro array (una fila).

// Tarea 1:
let clothes = ["camisa","pantalon","tennis","chor","sueter"]
clothes.pop()
clothes.push("playera")
console.log(clothes[2])
