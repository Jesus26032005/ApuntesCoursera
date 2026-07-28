import React, { useState, useCallback } from 'react';
// Para virtualizar listas gigantes en proyectos reales se usa:
// import { FixedSizeList } from 'react-window';

/**
 * APUNTE: Optimización con Miles de Componentes
 * Soluciones para evitar congelamientos en el navegador y caídas de FPS.
 */

// =================================================================
// 1. REACT.MEMO (Evita el renderizado innecesario de componentes hijos)
// =================================================================
// Envuelves el componente con React.memo. Así, solo se volverá a dibujar
// si sus props ('item' o 'onBorrar') sufren un cambio real.
const ElementoLista = React.memo(({ item, onBorrar }) => {
  return (
    <li>
      {item.nombre} 
      {/* Usamos función anónima porque necesitamos pasar el id */}
      <button onClick={() => onBorrar(item.id)}>Borrar</button>
    </li>
  );
});

export default function OptimizacionEjemplo() {
  const [lista, setLista] = useState([/* Miles de elementos */]);

  // =================================================================
  // 2. USECALLBACK (Conserva la referencia de la función en memoria)
  // =================================================================
  // Al usar useCallback, React NO vuelve a crear esta función en cada re-render.
  // Esto permite que 'React.memo' en ElementoLista sepa que la prop 'onBorrar' es la misma.
  const handleBorrar = useCallback((id) => {
    setLista((prevLista) => prevLista.filter((item) => item.id !== id));
  }, []);

  return (
    <div>
      <h2>Optimización para grandes volúmenes de datos</h2>

      {/* =================================================================
          3. VIRTUALIZACIÓN / WINDOWING (La solución definitiva para el DOM)
          =================================================================
          - En lugar de inyectar 10,000 nodos <li> al HTML, solo dibuja
            los 10 o 20 elementos visibles en el cuadro de pantalla.
          - Conforme el usuario hace scroll, recicla la vista.

          Ejemplo de sintaxis con 'react-window':
          <FixedSizeList
            height={400}      // Altura visible de la caja
            itemCount={10000}  // Total de elementos
            itemSize={35}     // Altura enpx de cada renglón
            width={300}
          >
            {RowComponent}
          </FixedSizeList>
      */}

      {/* =================================================================
          4. PAGINACIÓN / SCROLL INFINITO
          =================================================================
          - En lugar de renderizar todo el arreglo, corta los datos con .slice()
            o trae de la API solo bloques de 20 en 20 según se requiera.
      */}
      <ul>
        {lista.slice(0, 20).map((item) => (
          <ElementoLista key={item.id} item={item} onBorrar={handleBorrar} />
        ))}
      </ul>
    </div>
  );
}