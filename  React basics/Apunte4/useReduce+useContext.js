// ============================================================
// APUNTE: useReducer + useContext + optimización de re-renders
// ============================================================


// ------------------------------------------------------------
// 1. useReducer - lo básico
// ------------------------------------------------------------
// Alternativa a useState para lógica de estado compleja o con
// múltiples sub-valores relacionados.

import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  // El reducer debe ser una función PURA:
  // - mismas entradas -> misma salida
  // - nunca muta el estado, siempre retorna un objeto nuevo
  // - sin efectos secundarios (nada de fetch, setTimeout, etc.)
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error(`Acción no soportada: ${action.type}`);
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // dispatch({ type: 'increment' }) dispara el reducer internamente
  // y React re-renderiza si el nuevo estado es distinto.

  return null; // (JSX omitido, esto es un apunte)
}


// ------------------------------------------------------------
// 2. Dato clave: dispatch tiene identidad ESTABLE
// ------------------------------------------------------------
// React garantiza que "dispatch" es la MISMA función en cada
// render. Por eso es seguro pasarla a componentes hijos sin
// causar re-renders extra (a diferencia de una función normal
// creada dentro del componente, que se recrea cada vez).


// ------------------------------------------------------------
// 3. useReducer + useContext: compartir el estado sin prop drilling
// ------------------------------------------------------------

import { createContext, useContext } from 'react';

// 3.1 Crear DOS contexts, no uno solo
export const CartStateContext = createContext(null);
export const CartDispatchContext = createContext(null);

// ¿Por qué dos y no uno con { state, dispatch }?
// -> "state" cambia en cada actualización.
// -> "dispatch" nunca cambia (ver punto 2).
// Si los separas, un componente que SOLO llama dispatch
// (ej. un botón "agregar") no se re-renderiza cuando cambia
// el estado, porque no está suscrito a CartStateContext.

const cartInitialState = { items: [], total: 0 };

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const newItems = [...state.items, action.payload];
      return {
        items: newItems,
        total: newItems.reduce((sum, item) => sum + item.price, 0),
      };
    }
    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.id !== action.payload);
      return {
        items: newItems,
        total: newItems.reduce((sum, item) => sum + item.price, 0),
      };
    }
    case 'CLEAR_CART':
      return cartInitialState;
    default:
      throw new Error(`Acción desconocida: ${action.type}`);
  }
}

// 3.2 Provider: único lugar donde se llama useReducer
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
}

// 3.3 Hooks personalizados (buena práctica, no obligatorio)
export function useCartState() {
  const context = useContext(CartStateContext);
  if (context === null) {
    throw new Error('useCartState debe usarse dentro de un CartProvider');
  }
  return context;
}

export function useCartDispatch() {
  const context = useContext(CartDispatchContext);
  if (context === null) {
    throw new Error('useCartDispatch debe usarse dentro de un CartProvider');
  }
  return context;
}

// Uso en componentes:
//   const { items, total } = useCartState();      // lee estado
//   const dispatch = useCartDispatch();            // solo despacha
//   dispatch({ type: 'ADD_ITEM', payload: producto });


// ------------------------------------------------------------
// 4. La regla real de Context (por qué esto importa)
// ------------------------------------------------------------
// Cuando el "value" de un Provider cambia (nueva referencia),
// React re-renderiza a TODOS los componentes que consumen ese
// context, sin importar qué parte del objeto usen realmente.
//
// React compara por REFERENCIA, no analiza tu JSX para saber
// qué propiedades usaste. Por eso separar contexts sí evita
// re-renders: cada consumidor se suscribe solo al context que
// le importa.


// ------------------------------------------------------------
// 5. Mismo patrón, pero con useState (caso más común)
// ------------------------------------------------------------
// Con useState, una función normal SÍ cambia de identidad en
// cada render del Provider. Para que separar contexts tenga
// sentido, primero hay que estabilizar la función.

import { useState, useCallback, useMemo } from 'react';

const ApiContext = createContext(null);

function ApiProviderMalo({ children }) {
  const [luces, setLuces] = useState(['Luz 1', 'Luz 2', 'Luz 3']);

  // MAL: esta función se crea nueva en cada render de ApiProvider
  const agregarLuz = (luz) => {
    setLuces([...luces, luz]); // además depende del closure "luces"
  };

  return (
    <ApiContext.Provider value={{ luces, agregarLuz }}>
      {children}
    </ApiContext.Provider>
  );
}

function ApiProviderBueno({ children }) {
  const [luces, setLuces] = useState(['Luz 1', 'Luz 2', 'Luz 3']);

  // BIEN: forma funcional (no depende del closure) + useCallback
  // con [] hace que "agregarLuz" tenga identidad estable, igual
  // que "dispatch" en useReducer.
  const agregarLuz = useCallback((luz) => {
    setLuces(prev => [...prev, luz]);
  }, []);

  // useMemo evita crear un objeto "value" nuevo en cada render.
  // Sin esto, aunque agregarLuz sea estable, el objeto que lo
  // envuelve sigue siendo nuevo cada vez -> mismo problema.
  const value = useMemo(() => ({ luces, agregarLuz }), [luces, agregarLuz]);

  return (
    <ApiContext.Provider value={value}>
      {children}
    </ApiContext.Provider>
  );
}


// ------------------------------------------------------------
// 6. ¿Cuándo separar state y funciones en contexts distintos?
// ------------------------------------------------------------
// Checklist - las 3 condiciones deben cumplirse JUNTAS:
//
// [ ] 1. Árbol grande: hay muchos componentes anidados que solo
//        DESPACHAN acciones (ej. botones) y nunca leen el estado.
//
// [ ] 2. Las funciones ya están estabilizadas con useCallback
//        (si no, separar contexts no sirve de nada).
//
// [ ] 3. Mediste con React DevTools Profiler y confirmaste
//        re-renders innecesarios y costosos. No optimices sin medir.
//
// Si las 3 son "sí" -> separar contexts (o pensar en Zustand/Redux).
// Si falta alguna -> un solo context con { state, funciones } está bien.


// ------------------------------------------------------------
// 7. Tabla resumen: useReducer vs useState en este patrón
// ------------------------------------------------------------
//
// | Con useReducer                  | Con useState                     |
// |----------------------------------|-----------------------------------|
// | dispatch YA es estable            | la función NO es estable de por sí|
// | separar contexts es casi gratis   | primero hay que useCallback       |
// | ideal para lógica de estado compleja | ideal para estado simple       |
//
//
// ------------------------------------------------------------
// 8. Qué significa "re-render" (para no confundirse)
// ------------------------------------------------------------
// Re-render != cambio visual en pantalla.
// React vuelve a ejecutar la función del componente y compara
// el resultado (reconciliación). Si no hay diferencias, no toca
// el DOM real. El "costo" es tiempo de CPU desperdiciado, no
// necesariamente algo que el usuario vea o note (a menos que
// el árbol sea grande o los componentes sean pesados).