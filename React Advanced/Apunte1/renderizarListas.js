// para renderizar listas en React, podemos usar el método map() de los arrays para iterar sobre los elementos y devolver un nuevo array de elementos JSX. Cada elemento JSX debe tener una propiedad key única para ayudar a React a identificar qué elementos han cambiado, agregado o eliminado.


// pero primero , vamos a recordar que hace map, map es un método de los arrays que nos permite transformar cada elemento del array en un nuevo valor, y devuelve un nuevo array con los valores transformados. Por ejemplo, si tenemos un array de números y queremos obtener un nuevo array con el doble de cada número, podemos usar map de la siguiente manera:
const numeros = [1, 2, 3, 4, 5];
const dobles = numeros.map(numero => numero * 2);
console.log(dobles); // [2, 4, 6, 8, 10]

// El argumento que recibe la función de callback de map es el elemento actual del array, y podemos usarlo para transformar el valor. En este caso, estamos multiplicando cada número por 2 para obtener el doble.

// Ahora, para renderizar una lista en React, podemos usar map de la siguiente manera:
function ListaDeNumeros() {
    const numeros = [1, 2, 3, 4, 5];
    return (
        <ul>
            {numeros.map(numero => (
                <li key={numero}>{numero}</li>
            ))}
        </ul>
    );
}

// En este ejemplo, estamos iterando sobre el array de números y devolviendo un elemento <li> para cada número. Cada elemento <li> tiene una propiedad key única que es el valor del número. Esto ayuda a React a identificar qué elementos han cambiado, agregado o eliminado cuando se actualiza la lista.

// igualmente lo que se podria hacer es guardar el resultado de map en una variable y luego renderizar esa variable en el return, de la siguiente manera:
function ListaDeNumeros() {
    const numeros = [1, 2, 3, 4, 5];
    const elementosDeLista = numeros.map(numero => (
        <li key={numero}>{numero}</li>
    ));
    
    return (
        <ul>
            {elementosDeLista}
        </ul>
    );
}

// los keys son importantes porque ayudan a React a identificar qué elementos han cambiado, agregado o eliminado cuando se actualiza la lista. Si no se proporcionan keys únicas, React puede tener problemas para actualizar la lista correctamente y puede causar errores o comportamientos inesperados.

