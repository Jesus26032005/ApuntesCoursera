// Los props: los props son propiedades que se pasan a un componente para que pueda recibir datos desde su componente padre. Son inmutables, lo que significa que no se pueden cambiar dentro del componente hijo. Se utilizan para personalizar y configurar componentes de manera flexible.

// los props se pasan como un dato de tipo objeto, y se pueden acceder a ellos mediante la sintaxis "props.nombrePropiedad". A continuación, se muestra un ejemplo de cómo utilizar los props en un componente funcional:

function componentePadre() {
  const nombre = "Juan";
  const edad = 30;

  return (
    <div>
      <h1>Componente Padre</h1>
      <ComponenteHijo nombre={nombre} edad={edad} />
    </div>
  );
}

function ComponenteHijo(props) {
  return (
    <div>
      <h2>Componente Hijo</h2>
      <p>Nombre: {props.nombre}</p>
      <p>Edad: {props.edad}</p>
    </div>
  );
}

// En este ejemplo, el componente padre pasa las propiedades "nombre" y "edad" al componente hijo a través de los props. El componente hijo recibe estas propiedades y las utiliza para mostrar la información correspondiente.

// Los props son equivalentes a los parámetros de una función, y se pueden pasar cualquier tipo de dato, como cadenas de texto, números, objetos, funciones, etc. Además, los props permiten que los componentes sean reutilizables y modulares, ya que se pueden personalizar según las necesidades del componente padre.

// Es importante destacar que los props son de solo lectura, lo que significa que no se pueden modificar dentro del componente hijo. Si se necesita cambiar el estado de un componente, se debe utilizar el estado (state) en lugar de los props.


// props.childen: los props.children son una propiedad especial que se utiliza para pasar contenido o elementos hijos a un componente. Permite que un componente envuelva y renderice otros elementos dentro de él, lo que facilita la creación de componentes más flexibles y reutilizables.

// A continuación, se muestra un ejemplo de cómo utilizar los props.children en un componente funcional:

function ComponenteContenedor(props) {
    // El props.children contiene los elementos que se pasan como hijos del componente contenedor. Estos elementos se pueden renderizar dentro del componente utilizando la sintaxis {props.children}. Esto permite que el componente contenedor actúe como un envoltorio para otros elementos, lo que facilita la composición de la interfaz de usuario.

  return (
    <div className="contenedor">
      <h1>Componente Contenedor</h1>
      <p>Este es un párrafo dentro del componente contenedor.</p>
      {props.children} //Aqui es como indicar que se rendericen los elementos hijos dentro del componente contenedor. Esto permite que el componente contenedor actúe como un envoltorio para otros elementos, lo que facilita la composición de la interfaz de usuario. Se desenvuelven los elementos hijos
    </div>
  );
}


function App() {
    // Para utilizar los props.children, se puede envolver cualquier contenido o elementos dentro del componente contenedor al llamarlo. Esto permite que el componente contenedor renderice esos elementos dentro de su estructura, lo que facilita la creación de interfaces de usuario más complejas y personalizadas.
    // se usa una sintaxis tipo abrir y cerrar etiqueta para envolver el contenido que se desea pasar como hijos del componente contenedor. Esto permite que el componente contenedor reciba y renderice esos elementos dentro de su estructura.
  return (
    <ComponenteContenedor> //Se pasan los elementos hijos dentro del componente contenedor al envolverlos entre las etiquetas de apertura y cierre del componente       contenedor. Esto permite que el componente contenedor reciba y renderice esos elementos dentro de su estructura.
      <p>Este es un párrafo dentro del componente contenedor.</p>
      <button>Botón dentro del contenedor</button>
    </ComponenteContenedor>
  );
}

// se puede hacer una anidación de componentes, es decir, un componente puede contener a otro componente como hijo. Esto permite crear estructuras más complejas y jerárquicas en la interfaz de usuario. A continuación, se muestra un ejemplo de cómo anidar componentes utilizando los props.children:

function ComponentePadre() {
  return (
    <div>
      <h1>Componente Padre</h1>
      <ComponenteContenedor>
        <ComponenteHijo />
      </ComponenteContenedor>
    </div>
  );
}

function ComponenteHijo() {
  return (
    <div>
      <h2>Componente Hijo</h2>
      <p>Este es un párrafo dentro del componente hijo.</p>
    </div>
  );
}

// En este ejemplo, el componente padre contiene al componente contenedor, y el componente contenedor a su vez contiene al componente hijo. Esto permite crear una estructura jerárquica de componentes, donde cada componente puede recibir y renderizar contenido de sus componentes hijos utilizando los props.children.