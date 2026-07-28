// Los recursos como videos, imagenes, audios, etc. se pueden usar en React de varias formas, una de ellas es importandolos directamente en el componente y usarlos como una variable, otra forma es haciendo referencia a ellos mediante la palabra clave require().

// Los recursos deben de estar en la carpeta assets o en la carpeta public, si se encuentran en la carpeta assets se pueden importar directamente en el componente y usarlos como una variable, si se encuentran en la carpeta public se pueden hacer referencia a ellos mediante la palabra clave require().

// Ejemplo de como importar un recurso desde la carpeta assets:
import React from 'react';
import logo from './assets/logo.png';

function App() {
  return (
    <div>
      <img src={logo} alt="Logo" />
    </div>
  );
}

export default App;

// Ejemplo de como hacer referencia a un recurso desde la carpeta public:

import React from 'react';

function App() {
  return (
    <div>
      <img src={require('./public/logo.png')} alt="Logo" />
    </div>
  );
}

export default App;

/*
Claro, te explicaré de forma sencilla la diferencia entre dos lugares comunes donde puedes guardar los archivos que tu aplicación React necesita: la carpeta assets dentro de la carpeta src y la carpeta public.

Piensa en la carpeta assets como una caja especial dentro de tu taller (tu proyecto React) donde guardas herramientas que usas directamente para construir algo. Estos archivos, como imágenes o fuentes, son importados y usados dentro de tus componentes React. Por ejemplo, si tienes una foto de un gato que quieres mostrar en un componente, la guardas en src/assets y la importas con una línea como esta:

import cat from './assets/cat.jpg';
Luego usas esa imagen en tu componente con:

<img src={cat} alt="Cat" />
P
or otro lado, la carpeta public es como un estante abierto en tu taller donde pones cosas que no necesitas importar directamente en tu código, pero que tu aplicación puede usar, como el favicon o archivos que no dependen de React para funcionar. Si un archivo está en public, puedes acceder a él directamente con una ruta relativa desde la raíz, por ejemplo:

<img src="/logo512.png" alt="Logo" />
En resumen:

Usa src/assets para archivos que necesitas importar y usar dentro de tus componentes React.
Usa public para archivos que tu app puede usar sin necesidad de importarlos, como íconos o archivos estáticos que no afectan la compilación.
¿Quieres que te explique cómo importar imágenes usando la función require o alguna otra parte del contenido?

Si quieres seguir explorando este tema, prueba alguna de estas preguntas de seguimiento:

*/


// Para inscustrar videos en react existen tres formas, con la etiqueta video, inscrutar con base en terceros y algun paeuqete npm como react-player, a continuacion se presentan ejemplos de cada una de ellas:

// 1. Usando la etiqueta video:
import React from 'react';
import video from './assets/video.mp4';

function App() {
  return (
    <div>
      <video width="320" height="240" controls>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default App;

// 2. Inscrutar con base en terceros:
import React from 'react';

function App() {
  return (
    <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
}

export default App;

// 3. Usando un paquete npm como react-player:
import React from 'react';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div>
      <ReactPlayer url='https://www.youtube.com/watch?v=dQw4w9WgXcQ' /> //react-player es un paquete npm que permite reproducir videos de diferentes plataformas como YouTube, Vimeo, SoundCloud, entre otras. Para usarlo primero se debe instalar con el comando npm install react-player y luego importarlo en el componente donde se desea usar. es igual a una etiqueta video pero con mas opciones y configuraciones, ademas de que permite reproducir videos de diferentes plataformas.
    </div>
  );
}

// en react player podemos configurar varias opciones como el autoplay, loop, controls, entre otras, ademas de que permite reproducir videos de diferentes plataformas como YouTube, Vimeo, SoundCloud, entre otras. Para usarlo primero se debe instalar con el comando npm install react-player y luego importarlo en el componente donde se desea usar. es igual a una etiqueta video pero con mas opciones y configuraciones, ademas de que permite reproducir videos de diferentes plataformas.

// algunos parametros que se pueden configurar en react-player son:
// url: la url del video que se desea reproducir.
// playing: un booleano que indica si el video debe reproducirse automaticamente o no.
// loop: un booleano que indica si el video debe reproducirse en bucle o no.
// controls: un booleano que indica si se deben mostrar los controles del reproductor o no.
// volume: un numero entre 0 y 1 que indica el volumen del video.
// muted: un booleano que indica si el video debe estar silenciado o no.
// width: un string o numero que indica el ancho del reproductor.
// height: un string o numero que indica el alto del reproductor.


// Para colocar un audio en react se puede hacer de varias formas, una de ellas es usando la etiqueta audio y otra forma es usando un paquete npm como react-audio-player, a continuacion se presentan ejemplos de cada una de ellas:

// 1. Usando la etiqueta audio:
import React from 'react';
import audio from './assets/audio.mp3';

function App() {
  return (
    <div>
      <audio controls>
        <source src={audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default App;

// 2. Usando un paquete npm como react-audio-player:
import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import audio from './assets/audio.mp3';

function App() {
  return (
    <div>
      <ReactAudioPlayer
        src={audio}
        controls
      />
    </div>
  );
}

export default App;

// Objeto audio
// El objeto Audio es una forma de colocar un audio sin tener que usar la etiqueta audio, se puede crear un objeto audio y asignarle la ruta del audio, luego se puede reproducir el audio con el metodo play() y pausarlo con el metodo pause(), ademas de que se pueden configurar varias opciones como el volumen, el loop, entre otras. A continuacion se presenta un ejemplo de como usar el objeto Audio:
import React, { useEffect } from 'react';
import audio from './assets/audio.mp3';

function App() {
  useEffect(() => {
    const audioObj = new Audio(audio);
    audioObj.play();
    return () => {
      audioObj.pause();
    };
  }, []);

  return (
    <div>
      <h1>Audio is playing...</h1>
    </div>
  );
}

export default App;