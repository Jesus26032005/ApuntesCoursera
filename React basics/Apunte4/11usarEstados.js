// Un estado es un valor que puede cambiar con el tiempo, y que afecta a la forma en que se renderiza un componente. En React, los estados se manejan mediante el hook useState. EL hook useState es una función que nos permite agregar estado a un componente funcional. Cuando llamamos a useState, nos devuelve un par de valores: el estado actual y una función para actualizar ese estado.
// Para usar useState, primero debemos importarlo desde la librería de React. Luego, se usa deestructuring para obtener el estado y la función de actualización. El primer valor es el estado actual, y el segundo valor es la función que nos permite actualizar ese estado. 

//creacion y asignacion de un estado
import React, { useState } from 'react';

function Contador() {
  // Declaramos una nueva variable de estado llamada "count"
  const [count, setCount] = useState(0); //tambien se puede colocar React.useState(0) en lugar de importar useState

  return (
    <div>
      <p>Has hecho clic {count} veces</p>
    </div>
  );
}

export default Contador;

// Para actualizar un estado, se usa la funcion de setNombreDelEstado, que es la segunda variable que devuelve useState. Esta función recibe como argumento el nuevo valor del estado, y React se encarga de actualizar el estado y volver a renderizar el componente con el nuevo valor. Esta funcion no se debe usar en el cuerpo del componente, sino en un evento o en una funcion que se ejecute en respuesta a alguna accion del usuario.

// EN un evento
function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}> // Cuando el usuario hace clic en el botón, se llama a la función setCount con el nuevo valor del estado, que es count + 1. Esto hace que el estado count se actualice y el componente se vuelva a renderizar con el nuevo valor.
        Haz clic aquí
      </button>
    </div>
  );
}

export default Contador;

// En una funcion 
function Contador() {
    const [count, setCount] = useState(0);

    const botonapretado = () => {
        setCount(count + 1); // Cuando el usuario hace clic en el botón, se llama a la función setCount con el nuevo valor del estado, que es count + 1. Esto hace que el estado count se actualice y el componente se vuelva a renderizar con el nuevo valor.
    }

    return (
        <div>
            <p>Has hecho clic {count} veces</p>
            <button onClick={botonapretado}>
                Haz clic aquí
            </button>
        </div>
    );
}


// cuando usar o no estados
// Usa estados cuando necesites que un componente se actualice dinámicamente en respuesta a interacciones del usuario o cambios en los datos. Evita usar estados para valores que no cambian durante la vida útil del componente o que no afectan su renderizado. 
// SI NO NECESITA MANTENER SU ESTADO PROPIO PARA FUNCIONAR , NO USAR ESTADOS
// SI NECESITA MANTENER SU ESTADO PROPIO PARA FUNCIONAR , USAR ESTADOS
// Ademas se puede definir dependiendo de esto:

/*
Cambia con el tiempo por interacción del usuario, respuesta de red, timers, etc. (no es un valor fijo).
El componente necesita re-renderizarse cuando ese valor cambia. Si nadie en el UI depende visualmente de ese valor, quizá no necesites que React lo trackee.
No se puede derivar de otras props o estado. Esta es la prueba más importante: si puedes calcularlo a partir de algo que ya tienes, no lo guardes como estado nuevo — calcúlalo en el render.

Probablemente NO debería ser estado si:

Es un valor derivado. Ejemplo: si tienes items en estado, no necesitas otro estado itemCount — simplemente usa items.length en el render.
Es una prop pasada tal cual, sin transformación. No la copies a estado local salvo que realmente necesites una copia editable independiente (y en ese caso, sé explícito sobre por qué).
Es algo que no afecta el render, como un ID de timeout, una referencia a un DOM node, o un valor mutable que usas entre renders sin que dispare uno nuevo. Para eso usa una ref, no estado.
Se puede recalcular desde el DOM o desde otra fuente externa cuando lo necesites, en vez de sincronizarlo manualmente.


 En React, los componentes con estado son como esos invitados que traen sus propias cosas: guardan información interna que puede cambiar, como si alguien decide qué música poner o qué comida servir. Por otro lado, los componentes sin estado son como los invitados que solo reciben lo que les dan: no guardan información propia, sino que muestran lo que les pasa el componente principal.


 Cuándo usar componentes con estado (stateful):

Cuando el componente necesita guardar y manejar datos que cambian con el tiempo (por ejemplo, datos de usuario, formularios, contadores).
Cuando el componente debe responder a interacciones del usuario que afectan su contenido o comportamiento.
Cuando el componente es el dueño principal de cierta información que debe compartirse con otros componentes hijos.
Cuando necesitas controlar efectos secundarios o lógica que depende de cambios en los datos internos.
Cuándo no usar componentes con estado (usar componentes sin estado/stateless):

Cuando el componente solo necesita mostrar datos que recibe de sus padres sin modificarlos.
Cuando el componente es simple y no requiere lógica interna compleja.
Cuando quieres que el componente sea más fácil de probar y reutilizar.
Cuando quieres mejorar el rendimiento evitando estados innecesarios y renderizados adicionales.
*/