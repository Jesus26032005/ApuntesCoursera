// La deestructuración es copiar un item el cual se vuelve independiente del original, es decir, si se cambia el valor de la copia, el original no se ve afectado. Para hacer la deestructuración se usan llaves {} para objetos y corchetes [] para arrays y dentro de ellos se colocan los nombres de las propiedades o elementos que se quieren copiar. La deestructuración también permite renombrar las propiedades o elementos copiados usando la sintaxis "nombreOriginal: nuevoNombre".

// 1. DESESTRUCTURACIÓN DE OBJETOS
var bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true
};

// Se crea un nuevo objeto con las propiedades de bird
var {hasWings, canFly, hasFeathers} = bird;

// Se puede cambiar el valor de la copia sin afectar al original
hasWings = false;
console.log("bird has wings", bird.hasWings);

var {hasWings: wings, canFly: fly, hasFeathers: feathers} = bird;
console.log("wings", wings);
console.log("fly", fly);
console.log("feathers", feathers);


// 2. DESESTRUCTURACIÓN DE ARRAYS
var birds = ["eagle", "penguin", "parrot"];

// Se crea un nuevo array con los elementos de birds
var [bird1, bird2, bird3] = birds;

// Se puede cambiar el valor de la copia sin afectar al original
bird1 = "sparrow";
console.log("birds[0]", birds[0]);


// 3. DESESTRUCTURACIÓN DE OBJETOS ANIDADOS
var bird = {
    name: "eagle",
    features: {
        hasWings: true,
        canFly: true,
        hasFeathers: true
    }
};

// Se crea un nuevo objeto con las propiedades de bird.features
var {hasWings, canFly, hasFeathers} = bird.features;

// Se puede cambiar el valor de la copia sin afectar al original
canFly = false;
console.log("bird.features.canFly", bird.features.canFly);