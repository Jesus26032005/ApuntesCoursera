// EL return en react, dentro de un componente funcional, es la parte donde se define lo que se va a renderizar en la interfaz de usuario. Es decir, el return devuelve el JSX (JavaScript XML) que representa la estructura y el contenido del componente.

// El return debe contener un solo elemento raíz, que puede ser un elemento HTML, un componente React o un fragmento.

// Si se necesita devolver múltiples elementos, se pueden envolver en un contenedor, como un div, o utilizar un fragmento (<> </>) para evitar agregar nodos adicionales al DOM.

// A continuación, se muestra un ejemplo de un componente funcional que utiliza el return para renderizar contenido:

function MiComponente() {
  return (
    <div>
      <h1>Hola, soy un componente funcional</h1>
      <p>Este es un párrafo dentro del componente.</p>
    </div>
  );
}

// En este ejemplo, el return devuelve un div que contiene un encabezado y un párrafo. Este contenido se renderizará en la interfaz de usuario cuando se utilice el componente MiComponente.

// Es importante tener en cuenta que el return debe ser la última instrucción dentro del cuerpo de la función del componente. Cualquier código que se coloque después del return no se ejecutará, ya que el return finaliza la ejecución de la función.

function ComponenteConFragmento() {
  return (
    <>
      <h1>Hola, soy un componente con fragmento</h1>
      <p>Este es un párrafo dentro del componente.</p>
    </>
  );
}

// En este ejemplo, se utiliza un fragmento para envolver los elementos que se van a devolver en el return. Esto permite devolver múltiples elementos sin agregar nodos adicionales al DOM.

