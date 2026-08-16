// Prop drilling es un término comúnmente utilizado para describir ​tener que pasar el estado a través de props en varias capas de componentes ​del padre al hijo, al hijo de ese hijo, y así sucesivamente. 

// Esto puede hacer que el código sea más difícil de mantener y entender, especialmente si hay muchos niveles de componentes involucrados. Para evitar el prop drilling, se pueden utilizar técnicas como el Context API de React o librerías de gestión de estado como Redux o MobX. Estas técnicas permiten compartir el estado entre componentes sin tener que pasar props a través de múltiples niveles de componentes.

// EJemplo de prop drilling:
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Contador: {count}</h1>
      <ComponenteHijo count={count} setCount={setCount} />
    </div>
  );
}

function ComponenteHijo({ count, setCount }) {
  return (
    <div>
      <h2>Componente Hijo</h2>
      <ComponenteNieto count={count} setCount={setCount} />
    </div>
  );
}

function ComponenteNieto({ count, setCount }) {
  return (
    <div>
      <h3>Componente Nieto</h3>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

export default App;

// En este ejemplo, el estado "count" y la función "setCount" se pasan desde el componente "App" al "ComponenteHijo" y luego al "ComponenteNieto". Esto es un ejemplo de prop drilling, ya que el estado se pasa a través de múltiples niveles de componentes.