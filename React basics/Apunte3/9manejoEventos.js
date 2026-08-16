// AL igual que en html, en React podemos manejar eventos de manera similar, pero con algunas diferencias importantes. En React, los nombres de los eventos se escriben en camelCase y se pasan como funciones en lugar de cadenas de texto.
// Ejemplo de manejo de eventos en React:
import React from 'react';
// Para manejar eventos en React, se define una función que se ejecutará cuando ocurra el evento. En este caso, se define la función `handleClick` que muestra una alerta cuando se hace clic en el botón.
function ManejoEventos() {
  // Función que se ejecutará cuando se haga clic en el botón
  const handleClick = () => {
    alert('¡Botón clickeado!');
  };

  return (
    <div>
      <h1>Manejo de Eventos en React</h1>
      <button onClick={handleClick}>Haz clic aquí</button>
    </div>
  );
}

// No tiene que ser una funcion flecha siempre sino que podemos definir la función por fuera y pasarla como referencia al evento. Esto es útil para mantener el código limpio y reutilizable. AUnque no es recomendable si se ba usar parametros del componente.
function handleClickOutside() {
  alert('¡Botón clickeado desde una función externa!');
}

function ManejoEventosConFuncionExterna() {
  return (
    <div>
      <h1>Manejo de Eventos con Función Externa</h1>
      <button onClick={handleClickOutside}>Haz clic aquí</button>
    </div>
  );
}
// o tambien podemos definir la función anonima y aignandole a una constante y luego pasarla como referencia al evento. Esto es útil para mantener el código limpio y reutilizable.
function ComponenteConFuncionAnonima() {
    const eventoAnonimo = function() {
        alert('¡Botón clickeado desde una función anónima!');
    };

    return (
        <div>
            <h1>Manejo de Eventos con Función Anónima</h1>
            <button onClick={eventoAnonimo}>Haz clic aquí</button>
        </div>
    );
}
// Se puede colocar la funcion anonima directamente en el evento.
function ComponenteConFuncionAnonimaDirecta() {
    return (
        <div>
            <h1>Manejo de Eventos con Función Anónima Directa</h1>
            <button onClick={function() { alert('¡Botón clickeado desde una función anónima directa!'); }}>Haz clic aquí</button>
        </div>
    );
}
// igual se puede hacer con una funcion flecha directamente en el evento.
function ComponenteConFuncionFlechaDirecta() {
    return (
        <div>
            <h1>Manejo de Eventos con Función Flecha Directa</h1>
            <button onClick={() => alert('¡Botón clickeado desde una función flecha directa!')}>Haz clic aquí</button>
        </div>
    );
}

//finalmente igual se puede definir la funcion dentro del cuerpo del componente y luego pasarla como referencia al evento.
function ComponenteConFuncionInterna() {
    function handleClickInterno() {
        alert('¡Botón clickeado desde una función interna!');
    }
    return (
        <div>
            <h1>Manejo de Eventos con Función Interna</h1>
            <button onClick={handleClickInterno}>Haz clic aquí</button>
        </div>
    );
}

// NOTA SIEMPRE SE REFERENCIA A LA FUNCIÓN Y NO SE EJECUTA DIRECTAMENTE. SI SE EJECUTA DIRECTAMENTE, EL EVENTO SE EJECUTARÁ INMEDIATAMENTE AL RENDERIZAR EL COMPONENTE, EN LUGAR DE ESPERAR A QUE EL USUARIO HAGA CLIC.

// NOTA: diferencia entre una funcion declarada por expresion y declaracion: Es una expresiion es cuando se asigna una funcion a una variable, mientras que una declaracion es cuando se declara la funcion con la palabra reservada function. La diferencia principal es que las funciones declaradas son "hoisted", es decir, se pueden usar antes de ser declaradas, mientras que las funciones expresadas no lo son y solo se pueden usar después de ser definidas.





// FUNCIONES COMO PROPS
//SE PUEDEN PASAR FUNCIONES COMO PROPS A COMPONENTES HIJOS Y USARLAS COMO EVENT HANDLERS. ESTO ES ÚTIL PARA COMUNICAR COMPONENTES PADRE E HIJO.
// EJEMPLO DE PASAR UNA FUNCIÓN COMO PROP A UN COMPONENTE HIJO:
function ComponenteHijo({ onClick }) {
  return (
    <button onClick={onClick}>Haz clic en el hijo</button>
  );
}

function ComponentePadre() {
  const handleClick = () => {
    alert('¡Botón del hijo clickeado!');
  };

  return (
    <div>
      <h1>Componente Padre</h1>
      <ComponenteHijo onClick={handleClick} />
    </div>
  );
}





//ERROREES DE MANEJO DE EVENTOS VS ERRORES DE RENDERIZACIÓN
export default ManejoEventos;
import { useState } from 'react';
//Diferencia entre errores en eventos vs errores de renderización

// Existen dos tipos de errores en React: errores que ocurren dentro de los manejadores de eventos y errores que ocurren durante la renderización del componente.
// El primero se puede manejar con try...catch, mientras que el segundo requiere un enfoque diferente, como los "Error Boundaries".

export default function ErrorHandlingNotes() {
  
  // =================================================================
  // 1. ERRORES EN MANEJADORES DE EVENTOS (Event Handlers)
  // =================================================================
  // - ¿Cuándo ocurren? Fuera del ciclo de renderizado de React (ej. cuando el usuario hace clic).
  // - ¿Cómo se manejan? Usando bloques tradicionales de JavaScript: try...catch.
  // - ¿Por qué? Porque el componente ya terminó de construirse en la pantalla.
  
  const handleClick = () => {
    try {
      // Intentamos algo que sabemos que fallará: 
      // Los números no tienen el método de texto toUpperCase()
      const numero = 5;
      numero.toUpperCase(); 
      
    } catch (error) {
      // El error se atrapa de forma segura. 
      // La aplicación NO se queda en blanco ni colapsa.
      console.log("Algo salió mal en el evento (atrapado con try...catch):", error.message);
    }
  };
  // =================================================================
  // 2. ERRORES DE RENDERIZACIÓN
  // =================================================================
  // - ¿Cuándo ocurren? Mientras React está leyendo el código para dibujar la interfaz.
  // - ¿Cómo se manejan? NO se usa try...catch. Se usan "Límites de Error" (Error Boundaries).
  // - ¿Qué es un Error Boundary? Es un componente especial que envuelve a otros componentes 
  //   para atrapar sus errores de renderización y mostrar una interfaz de repuesto.

  // ❌ EJEMPLO DE ERROR DE RENDERIZACIÓN (Comentado para no romper la app):
  // Si descomentas la siguiente línea, la aplicación fallará inmediatamente 
  // al intentar dibujarse en pantalla. Un try...catch aquí no lo solucionaría adecuadamente.
  // const errorEnRender = (5).toUpperCase(); 
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Apuntes: Manejando Errores</h2>
      
      {/* Al hacer clic, se ejecuta el evento de forma segura */}
      <button onClick={handleClick} style={{ padding: '10px', cursor: 'pointer' }}>
        Haz clic para probar el try...catch
      </button>

      <p style={{ marginTop: '20px', color: 'gray' }}>
        <em>Nota: Abre la consola del navegador para ver el error atrapado al hacer clic.</em>
      </p>
    </div>
  );
}