// API context se refiere a un patrón de diseño en React que permite compartir datos y funciones relacionadas con la API entre componentes sin necesidad de pasar props manualmente a través de cada nivel del árbol de componentes. Esto se logra utilizando el Context API de React, que proporciona una forma de crear un contexto global para la aplicación.

// Para usar el API context, primero se crea un contexto utilizando React.createContext(). Luego, se define un proveedor de contexto que envuelve los componentes que necesitan acceder a los datos de la API. Este proveedor puede contener el estado y las funciones necesarias para interactuar con la API.

// Los componentes hijos pueden consumir el contexto utilizando el hook useContext() o el componente Context.Consumer. Esto permite que los componentes accedan a los datos y funciones del contexto sin necesidad de pasar props manualmente.

// En resumen, el API context facilita la gestión de datos relacionados con la API en una aplicación React, mejorando la organización del código y reduciendo la complejidad al evitar el paso de props a través de múltiples niveles de componentes.

// ejemplo de uso del API context en React:

import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const ApiContext = createContext();

// Proveedor de contexto
const ApiProvider = ({ children }) => {
  const [luces, setluces] = useState(['Luz 1', 'Luz 2', 'Luz 3']); // Se crea un estado para almacenar las luces y se inicializa con un array de luces.
  
  const agregarLuz = (luz) => { // Se define una función para agregar una nueva luz al estado. (Opcional)
    setluces([...luces, luz]);
  };

  return ( // Se devuelve el proveedor de contexto con el valor que contiene el estado y la función para agregar luces.
    // Se devuelve un proveedor de contexto que envuelve los componentes hijos y proporciona el estado de luces y la función para agregar luces a través del valor del contexto.
    <ApiContext.Provider value={{ luces, agregarLuz }}> 
      {children} // Se renderizan los componentes hijos que consumen el contexto.
    </ApiContext.Provider>
  );
};

// Componente que consume el contexto
const ComponenteHijo = () => {
  const { luces, agregarLuz } = useContext(ApiContext);  // Se utiliza el hook useContext para acceder al contexto y obtener el estado de luces y la función para agregar luces.

  return (
    <div>
      <h2>Luces:</h2>
      <ul>
        {luces.map((luz, index) => (
          <li key={index}>{luz}</li>
        ))}
      </ul>
      <button onClick={() => agregarLuz(`Luz ${luces.length + 1}`)}>Agregar Luz</button>
    </div>
  );
}

const App = () => {
  return (
    <ApiProvider> {/* Se envuelve el componente ComponenteHijo con el proveedor de contexto para que pueda acceder al estado y funciones del contexto. */}
      <ComponenteHijo />
    </ApiProvider>
  );
}



// USEREDUCE: Es un hook de React que permite manejar el estado de un componente de manera más compleja que useState. Se utiliza cuando se tiene un estado que depende de acciones o eventos, y se necesita actualizarlo de manera predecible. useReducer recibe un reducer (una función que define cómo actualizar el estado) y un estado inicial, y devuelve el estado actual y una función dispatch para enviar acciones al reducer.

// Ejemplo de uso de useReducer en React:

import React, { useReducer } from 'react';

// Definir el estado inicial
const initialState = { count: 0 };

// Definir el reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState); // Se utiliza useReducer para manejar el estado del contador.

  return (
    <div>
      <h2>Contador: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>Incrementar</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrementar</button>
    </div>
  );
}

/* 
useState — actualización directa
javascript
const [contador, setContador] = useState(0);

setContador(contador + 1);        // le dices directamente el nuevo valor
setContador(prev => prev + 1);    // o le pasas una función

Tú, desde donde sea que llames a setContador, decides exactamente cuál va a ser el nuevo valor. La lógica de "cómo cambia el estado" está dispersa en cada lugar donde llamas al setter.

useReducer — actualización centralizada con "acciones"
javascript
const reducer = (estado, accion) => {
  switch (accion.type) {
    case 'incrementar':
      return { contador: estado.contador + 1 };
    case 'decrementar':
      return { contador: estado.contador - 1 };
    case 'reset':
      return { contador: 0 };
    default:
      return estado;
  }
};

const [estado, dispatch] = useReducer(reducer, { contador: 0 });

dispatch({ type: 'incrementar' });
dispatch({ type: 'reset' });

Aquí no le dices directamente el nuevo valor. Le mandas una "orden" o acción ({ type: 'incrementar' }) a una función central llamada reducer, y es esa función la única responsable de decidir cómo cambia el estado según qué acción reciba.

Comparación directa
	useState	useReducer
Sintaxis	const [valor, setValor] = useState(inicial)	const [estado, dispatch] = useReducer(reducer, inicial)
Cómo actualizas	Llamas al setter con el nuevo valor	Mandas una "acción" (objeto con type)
Dónde vive la lógica	Dispersa, en cada setValor(...) que escribas	Centralizada, toda en la función reducer
Ideal para	Estado simple: un número, un string, un booleano, un array pequeño	Estado complejo: varios valores relacionados, muchas formas distintas de actualizar
Analogía
useState es como tener un control remoto simple: cada botón cambia algo directamente. "Sube volumen", "baja volumen".
useReducer es como tener un empleado de mostrador: tú no tocas nada directamente, le dices "quiero esto" (la acción) y él decide, siguiendo reglas fijas, cómo actualizar el sistema. Todas las reglas de negocio están en un solo lugar (el reducer), no repartidas por todos lados.
¿Cuándo usar cada uno?
Usa useState cuando:
El estado es simple (un booleano, un string, un número, un objeto pequeño).
Las actualizaciones son directas y no dependen de muchas condiciones.
Ejemplo: tu propio código de luces — es solo un array al que le agregas cosas, no necesita useReducer.
javascript
const [luces, setLuces] = useState(['Luz 1', 'Luz 2']);
Usa useReducer cuando:
El estado tiene varias propiedades relacionadas que cambian juntas (ej. un formulario con nombre, email, errores, cargando...).
Hay muchas formas distintas de actualizar el mismo estado (varias "acciones" posibles), y quieres tenerlas todas centralizadas en un solo lugar para no repetir lógica.
El siguiente estado depende del estado anterior de forma compleja (no es solo sumar 1, sino aplicar reglas condicionales).
Quieres que la lógica de actualización sea más fácil de testear por separado (el reducer es una función pura, la puedes probar sin renderizar componentes).
Ejemplo típico donde useReducer brilla:
javascript
const reducer = (estado, accion) => {
  switch (accion.type) {
    case 'agregar':
      return { ...estado, luces: [...estado.luces, accion.payload] };
    case 'eliminar':
      return { ...estado, luces: estado.luces.filter((_, i) => i !== accion.payload) };
    case 'apagarTodas':
      return { ...estado, luces: [] };
    default:
      return estado;
  }
};

Si tu manejo de luces creciera a "agregar", "eliminar", "apagar todas", "renombrar"... ahí sí conviene migrar a useReducer, porque tener 4-5 funciones sueltas tipo agregarLuz, eliminarLuz, apagarTodas empieza a ser más difícil de mantener que un solo reducer con un switch.
*/