// Se puede realizar el recorrido de un objeto con un bucle for...in, el cual itera sobre todas las propiedades enumerables de un objeto, incluyendo las heredadas a través de la cadena de prototipos.

var bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true

};

for (let propiedad in bird) {
    console.log(`${propiedad}: ${bird[propiedad]}`);
}

// Si se quisiera usar un bucle for...of se puede hacer uso de los metodos .keys(), values() o entries() de Object, los cuales devuelven un array con las propiedades, valores o pares clave-valor del objeto respectivamente.
var propiedades = Object.keys(bird);
for (let propiedad of propiedades) {
    console.log(`${propiedad}: ${bird[propiedad]}`);
}


// DIFERENCIAS ENTRE FOR OF Y FOR IN

// For in itera usando los indices del objeto, mientras que for of itera usando los valores del objeto. Por lo tanto, for in es más adecuado para objetos, mientras que for of es más adecuado para arrays y otros objetos iterables.

// For in itera sobre todas las propiedades enumerables de un objeto, incluyendo las heredadas a través de la cadena de prototipos, mientras que for of itera sobre los valores de un objeto iterable, como un array o un string. 

// For in itera sobre las propiedades heredadas, mientras que for of itera sobre los valores de un objeto iterable.