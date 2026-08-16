// Para crear un componente en react se usan funciones de javascript, estas funciones deben retornar un elemento de react, que puede ser un elemento html o un componente de react. Para crear un componente se debe importar la libreria de react y luego crear una funcion que retorne el elemento deseado.

import React from 'react';

function Componente() {
  return (
    <div>
      <h1>Hola, soy un componente de React</h1>
    </div>
  );
}

export default Componente;


// Componente con algun valor dentro con jsx: Paa colocar valores dentro del html se debe usar llaves {}, dentro de estas llaves se puede colocar cualquier valor de javascript, como variables, funciones, etc.
function ComponenteConValor() {
  const nombre = 'Juan';
  return (
    <div>
      <h1>Hola, {nombre}</h1>
    </div>
  );
}

export default ComponenteConValor;

//Componentes en funciones de flecha: Los componentes tambien se pueden crear con funciones de flecha, estas funciones son mas cortas y faciles de leer, pero tienen algunas limitaciones, como que no pueden tener estado ni ciclo de vida.
const ComponenteFlecha = () => {
  return (
    <div>
      <h1>Hola, soy un componente de React creado con una funcion de flecha</h1>
    </div>
  );
}

export default ComponenteFlecha;


//Componente dentro de otro componente: Los componentes pueden estar dentro de otros componentes, esto se hace para organizar mejor el codigo y para reutilizar componentes. Para colocar un componente dentro de otro se debe importar el componente y luego colocarlo dentro del return del componente padre.
import Componente from './Componente';

function ComponentePadre() {
  return (
    <div>
      <h1>Hola, soy un componente padre</h1>
      <Componente />
    </div>
  );
}

export default ComponentePadre;