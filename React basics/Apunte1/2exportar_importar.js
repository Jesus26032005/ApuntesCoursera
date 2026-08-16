import React from 'react';

// Para exportar un componente se debe usar la palabra reservada export, esto se hace para que el componente pueda ser usado en otros archivos. Existen dos formas de exportar un componente, la primera es exportarlo por defecto y la segunda es exportarlo de forma nombrada.

// Exportar por defecto: Esta forma de exportar un componente se hace usando la palabra reservada export default, esto hace que el componente pueda ser importado con cualquier nombre en otro archivo.
export default function ComponenteExportadoPorDefecto() {
  return (
    <div>
      <h1>Hola, soy un componente exportado por defecto</h1>
    </div>
  );
}

// Exportar de forma nombrada: Esta forma de exportar un componente se hace usando la palabra reservada export, esto hace que el componente pueda ser importado con el mismo nombre en otro archivo.
export function ComponenteExportadoDeFormaNombrada() {
  return (
    <div>
      <h1>Hola, soy un componente exportado de forma nombrada</h1>
    </div>
  );
}

// otra forma es colocando al final del archivo export anadiendo ya sea el nombre del componente entre llaves o despues de export default el nombre del componente, esto hace que el componente pueda ser importado con el mismo nombre en otro archivo.

function ComponenteExportadoAlFinal() {
  return (
    <div>
      <h1>Hola, soy un componente exportado al final del archivo</h1>
    </div>
  );
};

export {ComponenteExportadoAlFinal};

function ComponenteExportadoAlFinalDefault() {
  return (
    <div>
      <h1>Hola, soy un componente exportado al final del archivo con export default</h1>
    </div>
  );
}
export default ComponenteExportadoAlFinalDefault;


// Para importar un componente se debe usar la palabra reservada import, esto se hace para que el componente pueda ser usado en el archivo donde se importa. Existen dos formas de importar un componente, la primera es importarlo por defecto y la segunda es importarlo de forma nombrada.

// Importar por defecto: Esta forma de importar un componente se hace usando la palabra reservada import, esto hace que el componente pueda ser importado con cualquier nombre en otro archivo.
import ComponenteImportadoPorDefecto from './ComponenteExportadoPorDefecto';

// Importar de forma nombrada: Esta forma de importar un componente se hace usando la palabra reservada import, esto hace que el componente pueda ser importado con el mismo nombre en otro archivo. igual se realiza cuando no se exporta por defecto
import { ComponenteExportadoDeFormaNombrada } from './ComponenteExportadoDeFormaNombrada';

// el alias 
// Otra forma de importar un componente es usando un alias, esto se hace para evitar conflictos de nombres o para hacer el nombre del componente mas corto. Para usar un alias se debe usar la palabra reservada as, esto hace que el componente pueda ser importado con el nombre del alias en otro archivo.
import { ComponenteExportadoDeFormaNombrada as ComponenteAlias } from './ComponenteExportadoDeFormaNombrada';

// Importar todos los componentes de un archivo: Esta forma de importar todos los componentes de un archivo se hace usando la palabra reservada import, esto hace que todos los componentes puedan ser importados con el mismo nombre en otro archivo.
import * as Componentes from './ComponenteExportadoDeFormaNombrada';