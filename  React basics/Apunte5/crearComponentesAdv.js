// ============================================================
// APUNTE: paréntesis ( ), contenedor (div/Fragment) y llaves { }
// en un return de JSX - cuándo usar cada uno
// ============================================================

// ------------------------------------------------------------
// 1. Los paréntesis ( ) -> NO generan HTML, son solo formato
// ------------------------------------------------------------
// Sirven únicamente para poder escribir el JSX en varias líneas
// sin que "automatic semicolon insertion" de JS rompa el return
// (si pones "return" y luego un salto de línea sin paréntesis,
// JS puede interpretar un ";" invisible ahí y cortar el return).
//
// USAR paréntesis cuando el JSX ocupa más de una línea:
return (
  <div>
    <h1>Hola</h1>
  </div>
);

// NO hacen falta si todo cabe en una sola línea:
return <div><h1>Hola</h1></div>;

// Quitarlos o ponerlos NO cambia el resultado. Son estéticos.
// return (expresion);  ==  return expresion;


// ------------------------------------------------------------
// 2. El div / Fragment -> SÍ generan (o agrupan) elementos,
//    y son obligatorios solo si hay MÁS DE UN elemento hermano
// ------------------------------------------------------------
// Regla de React: un componente solo puede retornar UN elemento
// raíz. Si tienes 2+ elementos al mismo nivel, necesitas algo
// que los envuelva.

// USAR div (o Fragment) cuando hay varios elementos hermanos:
function Componente() {
  return (
    <div>
      <h1>Título</h1>
      <p>Texto</p>
    </div>
  );
}

// Si no quieres agregar un <div> extra al DOM (por CSS, por
// ejemplo), usa un Fragment, que agrupa sin dejar rastro en el HTML:
function Componente2() {
  return (
    <>
      <h1>Título</h1>
      <p>Texto</p>
    </>
  );
}

// NO hace falta div/Fragment si solo hay UN elemento raíz,
// aunque ese elemento tenga hijos adentro (los hijos no cuentan,
// solo importa cuántos elementos hay al nivel más externo):
function Componente3() {
  return <h1>Solo un elemento</h1>; // ok, un solo elemento raíz
}


// ------------------------------------------------------------
// 3. Las llaves { } -> "ventana a JavaScript" DENTRO de JSX
// ------------------------------------------------------------
// Las llaves solo tienen significado especial cuando JSX ESPERA
// contenido: como hijas de un elemento, o como valor de un
// atributo. Ahí adentro puedes meter cualquier expresión JS
// (variables, ternarios, .map, funciones, etc.).

// USAR llaves para insertar un valor/expresión DENTRO de un
// elemento JSX (aquí sí hace falta el div, porque el ternario
// se combina con otro contenido, o simplemente porque así se
// decidió estructurar el componente):
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>}
    </div>
  );
}

// NO uses llaves si el ternario/expresión ES DIRECTAMENTE el
// elemento raíz completo que vas a retornar - en ese caso no
// hay "elemento contenedor" que necesite recibir contenido:
function Greeting2(props) {
  const isLoggedIn = props.isLoggedIn;
  return isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>;
  // sin llaves, sin div: el ternario YA es el elemento raíz
}

// INVÁLIDO: llaves sueltas justo después de "return (", sin
// ningún elemento JSX que las contenga. Aquí "return (" es solo
// JS agrupando una expresión, NO es JSX, así que las llaves NO
// tienen su significado especial y rompen la sintaxis:
// function Greeting3(props) {
//   const isLoggedIn = props.isLoggedIn;
//   return (
//     {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>} // ❌ error
//   );
// }


// ------------------------------------------------------------
// 4. Resumen: las 3 preguntas para decidir
// ------------------------------------------------------------
// 1) ¿El JSX ocupa varias líneas?
//    Sí -> usa ( ) alrededor de todo el return (solo formato).
//
// 2) ¿Voy a retornar más de un elemento al mismo nivel?
//    Sí -> envuélvelos en <div> (si necesitas un wrapper real
//          en el DOM, ej. para aplicar una clase CSS) o en
//          <>...</> Fragment (si NO quieres nodo extra en el DOM).
//    No -> no hace falta div ni Fragment, retorna el único
//          elemento (o expresión que produce un único elemento,
//          como un ternario) directamente.
//
// 3) ¿Estoy insertando una expresión JS DENTRO de un elemento
//    JSX ya existente (como hijo o como atributo)?
//    Sí -> usa { } ahí adentro.
//    No (la expresión ES el elemento raíz completo) -> no uses
//        { }, retorna la expresión directo.