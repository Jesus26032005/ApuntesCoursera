// ============================================================
// APUNTE: Audio (Web API) - HTMLAudioElement
// ============================================================


// ------------------------------------------------------------
// 1. ¿Qué es Audio?
// ------------------------------------------------------------
// Audio NO es parte del lenguaje JavaScript (ECMAScript).
// Es una Web API: funcionalidad que el NAVEGADOR expone, igual que document, window, fetch o localStorage.
// Por eso no existe en entornos sin navegador (ej. Node.js puro, sin librerías extra).
//
// Audio es un "atajo" para crear un elemento <audio> del HTML SIN tener que escribirlo en el documento. El elemento nunca aparece visualmente en la página, no tiene controles visibles, vive "flotando" en memoria, accesible solo desde la variable.
//
// Estas dos formas son equivalentes:

// A) Creado por HTML:
//    <audio src="cancion.mp3"></audio>
//    const sound = document.querySelector('audio');

// B) Creado por JS (lo que normalmente se usa para efectos de
//    sonido, notificaciones, música de fondo, etc.):
const sound = new Audio("cancion.mp3");

// En ambos casos, "sound" es un objeto de tipo HTMLAudioElement.
console.log(sound instanceof HTMLAudioElement); // true


// ------------------------------------------------------------
// 2. El constructor: siempre con "new"
// ------------------------------------------------------------
// Audio es un CONSTRUCTOR (no una función normal), por eso SIEMPRE se usa con "new". Sin "new" lanza un TypeError.

const bird1 = new Audio("/bird1.mp3"); // ✅ correcto
// Audio("/bird1.mp3");                // ❌ falta "new" -> TypeError

// También se puede crear vacío y asignar el src después:
const bird2 = new Audio();
bird2.src = "/bird2.mp3";


// ------------------------------------------------------------
// 3. Cadena de herencia (por qué comparte cosas con <video>)
// ------------------------------------------------------------
// EventTarget
//   -> Node
//      -> Element
//         -> HTMLElement
//            -> HTMLMediaElement   (compartida con <video>)
//               -> HTMLAudioElement
//
// Por eso Audio comparte métodos/propiedades con <video>:
// ambos heredan de HTMLMediaElement.


// ------------------------------------------------------------
// 4. Métodos principales
// ------------------------------------------------------------
sound.play();   // inicia/reanuda la reproducción
sound.pause();  // pausa (NO reinicia, se queda en el mismo punto)
sound.load();   // recarga el recurso desde el "src" actual


// ------------------------------------------------------------
// 5. Propiedades principales
// ------------------------------------------------------------
sound.paused;      // boolean -> ¿está pausado ahora mismo? (NO es método, sin paréntesis)
sound.currentTime; // number  -> segundo actual de reproducción (se puede LEER y también ASIGNAR)
sound.duration;    // number  -> duración total en segundos
sound.volume;      // number entre 0 y 1 -> volumen
sound.muted;       // boolean -> silenciado o no
sound.loop;        // boolean -> si se repite al terminar
sound.src;         // string  -> ruta del archivo de audio


// ------------------------------------------------------------
// 6. Eventos comunes (con addEventListener)
// ------------------------------------------------------------
sound.addEventListener('ended', () => {
  console.log('El audio terminó');
});

sound.addEventListener('timeupdate', () => {
  console.log('Segundo actual:', sound.currentTime);
});

sound.addEventListener('play', () => console.log('Empezó a sonar'));
sound.addEventListener('pause', () => console.log('Se pausó'));


// ------------------------------------------------------------
// 7. Patrón típico: botón que hace play/pause (toggle)
// ------------------------------------------------------------
function toggle() {
  if (sound.paused) {
    sound.play();
  } else {
    sound.pause();
  }
}
// OJO: sound.paused es una PROPIEDAD (sin paréntesis).
// sound.pause() es un MÉTODO (con paréntesis) y ejecuta la
// acción de pausar. Son cosas distintas aunque se llamen parecido.


// ------------------------------------------------------------
// 8. Cuidado al usarlo dentro de un componente de React
// ------------------------------------------------------------
// PROBLEMA: si creas el Audio directo en el cuerpo del componente,
// se vuelve a crear un objeto NUEVO en cada re-render, perdiendo
// la referencia al anterior (que puede quedar sonando "huérfano"
// en segundo plano sin forma de controlarlo).

function AppMal() {
  const bird1 = new Audio("/bird1.mp3"); // ⚠️ se recrea en cada render
  // ...
}

// SOLUCIÓN: usar useRef para que se cree UNA sola vez y persista
// entre renders.
import { useRef } from "react";

function AppBien() {
  const bird1 = useRef(new Audio("/bird1.mp3")).current;

  function toggle1() {
    if (bird1.paused) {
      bird1.play();
    } else {
      bird1.pause();
    }
  }

  return null; // (JSX omitido, esto es un apunte)
}


// ------------------------------------------------------------
// 9. Resumen rápido
// ------------------------------------------------------------
//
// | Cosa                    | Detalle                                        |
// |--------------------------|-------------------------------------------------|
// | ¿Es parte de JS puro?    | No, es una Web API del navegador                |
// | Tipo de objeto que crea  | HTMLAudioElement                                 |
// | Constructor              | new Audio("ruta.mp3")  (siempre con "new")       |
// | .play() / .pause()       | Métodos -> ejecutan una acción                   |
// | .paused                  | Propiedad -> boolean, solo consulta el estado    |
// | .currentTime              | Propiedad -> segundo actual (lectura/escritura)  |
// | En React                  | Usar useRef para que no se recree en cada render|