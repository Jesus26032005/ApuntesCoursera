// un string es una cadena de caracteres, y en JavaScript se pueden crear strings usando comillas simples, comillas dobles o backticks (plantillas literales).

// comillas simples
let string1 = 'Hola, soy un string con comillas simples';

// se podria decir que es un array de caracteres, pero en realidad es un objeto que tiene propiedades y metodos que se pueden usar para manipular el string.

// para acceder a un caracter de un string, se puede usar la notación de corchetes o el metodo charAt().

console.log(string1[0]);
console.log(string1.charAt(0));

// se puede obtener el largo de un string usando la propiedad length.
console.log(string1.length)

// algunos metodos utiles para manipular strings son:
// toUpperCase() y toLowerCase() para convertir a mayusculas o minusculas.
console.log(string1.toUpperCase());
console.log(string1.toLowerCase());

// indexOf() para obtener la posicion de un caracter o substring.
console.log(string1.indexOf('soy'));

// lastIndexOf() para obtener la ultima posicion de un caracter o substring.
console.log(string1.lastIndexOf('o'));

// substring() para extraer una parte del string, sus parametros son el indice inicial y el indice final (no incluido).
console.log(string1.substring(0, 4));

// slice() para extraer una parte del string, sus parametros son el indice inicial y el indice final (no incluido), pero a diferencia de substring() puede recibir indices negativos para contar desde el final del string.
console.log(string1.slice(0, 4));

// replace() para reemplazar un substring por otro.
console.log(string1.replace('Hola', 'Adios'));

// split() para dividir un string en un array de substrings apartir de un separador.
console.log(string1.split(' '));

// trim() para eliminar los espacios en blanco al inicio y al final del string.
let string2 = '   Hola, soy un string con espacios en blanco   ';
console.log(string2.trim());

// includes() para verificar si un substring esta contenido en el string.
console.log(string1.includes('soy'));

// startsWith() y endsWith() para verificar si un string empieza o termina con un substring.
console.log(string1.startsWith('Hola'));
console.log(string1.endsWith('simples'));

// repeat() para repetir un string un numero de veces.
console.log(string1.repeat(3));

// concat() para concatenar strings.
let string4 = 'Hola, ';
let string5 = 'soy un string concatenado';
console.log(string4.concat(string5));

// template literals (backticks) permiten crear strings multilinea y usar expresiones dentro del string.
let nombre = 'Juan';
let edad = 30;
let string3 = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
console.log(string3);