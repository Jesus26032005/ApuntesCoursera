// Para crear un componente ademas de la forma tradicional, se pueden usar funciones anonimas o funciones flecha. A continuación, se muestra un ejemplo de cómo crear un componente utilizando una función anónima y una función flecha:

// Componente utilizando una función anónima
// recordemos que una función anónima es una función que no tiene un nombre y se puede asignar a una variable. En este caso, se asigna la función anónima a la constante "ComponenteAnonimo". A continuación, se muestra un ejemplo de cómo crear un componente utilizando una función anónima:
const ComponenteAnonimo = function() {
  return (
    <div>
      <h1>Hola, soy un componente creado con una función anónima</h1>
      <p>Este es un párrafo dentro del componente.</p>
    </div>
  );
}

// Componente utilizando una función flecha
// preview de funcion flecha
// La forma mas comun de una funcion flecha es la siguiente: const nombreFuncion = (parametros) => { // cuerpo de la funcion }. A continuación, se muestra un ejemplo de cómo crear un componente utilizando una función flecha:
const ComponenteFlecha = () => { } // En este caso dentro del parentesis van los argumentos que recibe la funcion, y dentro de las llaves va el cuerpo de la funcion.

// Otra forma si es que solo se tiene un argumento es la siguiente: const nombreFuncion = parametro => { // cuerpo de la funcion }
const ComponenteFlechaUnArgumento = parametro => { }

// FInalmente hay que recordar que si la funcion flecha solo tiene una linea de codigo, se puede omitir las llaves y el return, quedando de la siguiente manera: const nombreFuncion = parametro => parametro + 1.
const ComponenteFlechaUnaLinea = () => <div><h1>Hola, soy un componente creado con una función flecha de una sola línea</h1><p>Este es un párrafo dentro del componente.</p></div>

// si es que es un con varias lines de codigo, se debe usar las llaves y el return, quedando de la siguiente manera: const nombreFuncion = parametro => { return parametro + 1; }.
const ComponenteFlechaVariasLineas = () => {
  return (
    <>
      <h1>Hola, soy un componente creado con una función flecha de varias líneas</h1>
      <p>Este es un párrafo dentro del componente.</p>
    </>
    );
}




// DIFERENCIAS, VENTAJAS Y DESVENTAJAS ENTRE FUNCIONES ANONIMAS Y FUNCIONES FLECHA
// Diferencias:
// 1. Sintaxis: La sintaxis de las funciones flecha es más concisa y legible que la de las funciones anónimas. Las funciones flecha utilizan la palabra clave "=>" para definir la función, mientras que las funciones anónimas utilizan la palabra clave "function".
// 2. Contexto de "this": Las funciones flecha no tienen su propio contexto de "this", sino que heredan el contexto del ámbito en el que se encuentran. En cambio, las funciones anónimas tienen su propio contexto de "this", lo que puede llevar a confusiones al trabajar con objetos y clases.
// 3. Uso de "arguments": Las funciones flecha no tienen acceso al objeto "arguments", mientras que las funciones anónimas sí lo tienen. Esto puede ser una limitación si se necesita acceder a los argumentos pasados a la función.

// Ventajas de las funciones flecha:
// 1. Sintaxis más concisa y legible, lo que facilita la escritura y comprensión del código.
// 2. Herencia del contexto de "this", lo que evita problemas al trabajar con objetos y clases.
// 3. Mayor compatibilidad con funciones de orden superior, como map, filter y reduce, ya que permiten una sintaxis más limpia y directa.

// Desventajas de las funciones flecha:
// 1. No tienen su propio contexto de "this", lo que puede ser una limitación en ciertos casos donde se necesita un contexto específico.
// 2. No tienen acceso al objeto "arguments", lo que puede ser una limitación si se necesita acceder a los argumentos pasados a la función.
// 3. No se pueden utilizar como constructores, ya que no tienen su propio contexto de "this" y no pueden ser llamadas con la palabra clave "new".