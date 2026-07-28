// JSX permite escribir expresiones de JavaScript dentro de llaves {}, lo que permite insertar valores dinámicos en el código HTML. A continuación, se muestra un ejemplo de cómo utilizar expresiones incrustadas en JSX:

function MiComponente() {
  const nombre = 'Juan';
  const edad = 25;

  return (
    <div>
      <h1>Hola, {nombre}</h1>
      <p>Tengo {edad} años</p>
    </div>
  );
}




// tambien podemos hacer llamadas a funciones dentro de las llaves {}, lo que permite ejecutar código JavaScript y mostrar el resultado en el HTML. A continuación, se muestra un ejemplo de cómo utilizar expresiones incrustadas con funciones:
function obtenerSaludo(nombre) {
  return `Hola, ${nombre}`;
}

function MiComponenteConFuncion() {
  const nombre = 'Juan';

  return (
    <div>
      <h1>{obtenerSaludo(nombre)}</h1>
      <p>Este es un párrafo dentro del componente.</p>
    </div>
  );
}
// se puede tambien crear la funcion dentro del mismo componente A continuación, se muestra un ejemplo de cómo crear una función dentro del mismo componente:
function MiComponenteConFuncionInterna() {
  const nombre = 'Juan';

  function obtenerSaludo(nombre) {
    return `Hola, ${nombre}`;
  }

  return (
    <div>
      <h1>{obtenerSaludo(nombre)}</h1>
      <p>Este es un párrafo dentro del componente.</p>
    </div>
  );
}
// o se puede dentro de los corchetes crear una funcion anonima. A continuación, se muestra un ejemplo de cómo crear una función anónima dentro de los corchetes:
function MiComponenteConFuncionAnonima() {
  const nombre = 'Juan';

  return (
    <div>
      <h1>{(() => `Hola, ${nombre}`)()}</h1>
      <p>Este es un párrafo dentro del componente.</p>
    </div>
  );
}



// y finalmente podemos usar las expresiones para atributos de los elementos HTML, lo que permite establecer valores dinámicos para los atributos. A continuación, se muestra un ejemplo de cómo utilizar expresiones incrustadas para establecer atributos dinámicos:
function MiComponenteConAtributos() {
  const urlImagen = 'https://via.placeholder.com/150';
  const textoAlternativo = 'Imagen de ejemplo';

  return (
    <div>
      <img src={urlImagen} alt={textoAlternativo} />
      <p>Este es un párrafo dentro del componente.</p>
    </div>
  );
}

// podemos usar valores constantes con elementos HTML, lo que permite establecer valores fijos para los atributos. A continuación, se muestra un ejemplo de cómo utilizar valores constantes para establecer atributos fijos:
function MiComponenteConConstantes() {
  const urlImagen = 'https://via.placeholder.com/150';
  const textoAlternativo = 'Imagen de ejemplo';
  const texto = <p>Este es un párrafo dentro del componente.</p>;
  
  return (
    <div>
      <img src={urlImagen} alt={textoAlternativo} />
      {texto} // se puede usar la constante "texto" directamente dentro del JSX, lo que permite reutilizar el mismo contenido en diferentes partes del componente.
    </div>
  );
}


function ComponenteConConstanteRetornada() {
  const texto = <p>Este es un párrafo dentro del componente.</p>;
  return texto; // se puede retornar la constante "texto" pudiendo modificarla igual
}


// al permitir tener elementos htmo como constantes podemos modificarlos y reutilizarlos en diferentes partes del componente, lo que facilita la organización y mantenimiento del código. A continuación, se muestra un ejemplo de cómo utilizar elementos HTML como constantes:
function MiComponenteConElementos() {
  const urlImagen = 'https://via.placeholder.com/150';
  const textoAlternativo = 'Imagen de ejemplo';
  const imagen = <img src={urlImagen} alt={textoAlternativo} />;
  const parrafo = <p>Este es un párrafo dentro del componente.</p>;
  
  return (
    <div>
      {imagen}
      {parrafo}
    </div>
  );
}


// finalmente tambien se pueden anadir expresiones al pasarlos como props
function ComponenteHijo({ nombre, edad }) {
  return (
    <div>
      <h1>Hola, {nombre}</h1>
      <p>Tengo {edad} años</p>
    </div>
  );
}

function ComponentePadre() {
  const nombre = 'Juan';
  const edad = 25;

  return (
    <div>
      <ComponenteHijo nombre={nombre} edad={edad} />
    </div>
  );
}