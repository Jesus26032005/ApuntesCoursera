// Para anadir un id o clase a un elemento en React, se utilizan los atributos "id" y "className" respectivamente. A diferencia del HTML tradicional, en React se utiliza "className" en lugar de "class" para evitar conflictos con la palabra reservada "class" en JavaScript.

// A continuación, se muestra un ejemplo de cómo agregar un id y una clase a un elemento en React:

function MiComponente() {
  return (
    <div id="mi-id" className="mi-clase">
      <h1>Hola, soy un componente con id y clase</h1>
      <p>Este es un párrafo dentro del componente.</p>
    </div>
  );
}

// En este ejemplo, el div tiene un id "mi-id" y una clase "mi-clase". Estos atributos se pueden utilizar para aplicar estilos CSS o para seleccionar el elemento en JavaScript.