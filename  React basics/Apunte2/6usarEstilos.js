// Para usar estilos existen varias formas, una de ellas es mediante el uso de objetos de estilo en línea. En React, se puede crear un objeto que contenga las propiedades de estilo y luego aplicarlo a un elemento utilizando el atributo "style".

// Existen varias formas , el primero es creando el objeto de estilo dentro del componente y luego aplicarlo al elemento correspondiente, desenvolviendo el objeto de estilo en la propiedad "style" del elemento. A continuación, se muestra un ejemplo de cómo aplicar estilos en línea utilizando un objeto de estilo:
function MiComponente() {
  const estilos = {
    color: 'blue',
    fontSize: '20px',
    backgroundColor: 'lightgray',
    padding: '10px',
    borderRadius: '5px'
  };

  return (
    <div style={estilos}>
      <h1>Hola, soy un componente con estilos en línea</h1>
      <p>Este es un párrafo dentro del componente.</p>
    </div>
  );
}

// Otra forma es definiendo el objeto y desenvolviendolo directamente en la propiedad "style" del elemento, sin necesidad de crear una variable adicional. A continuación, se muestra un ejemplo de cómo aplicar estilos en línea directamente en la propiedad "style":
function MiComponenteDirecto() {
  return (
    <div style={{ color: 'blue', fontSize: '20px', backgroundColor: 'lightgray', padding: '10px', borderRadius: '5px' }}>
      <h1>Hola, soy un componente con estilos en línea</h1>
      <p>Este es un párrafo dentro del componente.</p>
    </div>
  );
}
// NOTA: CUANDO USAMOS OBJETOS DE ESTILO ES NECESARIO UTILIZAR CAMEL CASE PARA LAS PROPIEDADES DE ESTILO, POR EJEMPLO, "background-color" SE CONVIERTE EN "backgroundColor". TAMBIÉN ES IMPORTANTE RECORDAR QUE LOS VALORES DE LAS PROPIEDADES DE ESTILO DEBEN SER CADENAS DE TEXTO (STRING) O NÚMEROS (NUMBER), DEPENDIENDO DEL TIPO DE PROPIEDAD. ASIMISMO EN EL CASO DE USAR UN CONST SE CAMBIA ; por : por ,






// Otra forma de aplicar estilos en React es mediante el uso de clases CSS. Se pueden definir clases en un archivo CSS separado y luego aplicarlas a los elementos utilizando el atributo "className". A continuación, se muestra un ejemplo de cómo aplicar estilos utilizando clases CSS:
// En el archivo CSS (estilos.css):
/*
.mi-clase {
  color: blue;
  font-size: 20px;
  background-color: lightgray;
  padding: 10px;
  border-radius: 5px;
}
*/
// En el componente React:
import './estilos.css'; // se puede importar el archivo CSS en el componente para aplicar los estilos definidos en él o en el archivo index.html, se puede importar el archivo CSS en el componente para aplicar los estilos definidos en él. Esto permite mantener los estilos separados del código del componente y facilita la reutilización de estilos en diferentes componentes.

// otra foirma sino es importarlo si es que existe un css propio en la misma carpeta del componente, se puede importar el archivo CSS en el componente para aplicar los estilos definidos en él. Esto permite mantener los estilos separados del código del componente y facilita la reutilización de estilos en diferentes componentes.
function MiComponenteConClase() {
  return (
    <div className="mi-clase">
      <h1>Hola, soy un componente con estilos mediante clases CSS</h1>
      <p>Este es un párrafo dentro del componente.</p>
    </div>
  );
}

// igual se puede aplicar estilos mediante id, siendo necesario definir el id en el elemento y luego aplicar los estilos correspondientes en el archivo CSS. A continuación, se muestra un ejemplo de cómo aplicar estilos utilizando un id:
// En el archivo CSS (estilos.css):
/*
#mi-id {
  color: blue;
  font-size: 20px;
  background-color: lightgray;
  padding: 10px;
  border-radius: 5px;
}
*/
// En el componente React:
function MiComponenteConId() {
  return (
    <div id="mi-id">
      <h1>Hola, soy un componente con estilos mediante id</h1>
      <p>Este es un párrafo dentro del componente.</p>
    </div>
  );
}