// los hooks son funciones especiales que nos permiten "enganchar" el estado y otras características de React a componentes funcionales. Los hooks nos permiten usar el estado y otras características de React sin escribir una clase. Los hooks solo se pueden usar en componentes funcionales, y no se pueden usar en clases ni en funciones regulares.
// Los hooks más comunes son useState, useEffect, useContext, useReducer, useCallback, useMemo, useRef, useImperativeHandle, useLayoutEffect y useDebugValue. Cada uno de estos hooks tiene un propósito específico y nos permite agregar diferentes funcionalidades a nuestros componentes funcionales.

// actualmente el unico que se ha visto es useState, que nos permite agregar estado a un componente funcional. En el siguiente ejemplo, se muestra cómo usar useState para crear un contador que se incrementa cada vez que el usuario hace clic en un botón.

function Contador() {
    const [count, setCount] = React.useState(0); //tambien se puede colocar useState(0) en lugar de React.useState(0)
}

// reglas de los hooks:
// 1. Los hooks solo se pueden usar en el nivel superior de un componente funcional. No se pueden usar dentro de bucles, condicionales o funciones anidadas.
// 2. Los hooks solo se pueden usar en componentes funcionales. No se pueden usar en clases ni en funciones regulares.
// 3. Los hooks deben llamarse en el mismo orden en cada renderizado. Esto significa que no se deben llamar a los hooks dentro de condicionales o bucles, ya que esto podría cambiar el orden de las llamadas a los hooks y causar errores.
//Sólo puedes llamar hooks en el nivel superior de tu componente o tus propios hooks.
//No puedes llamar hooks dentro de bucles o condiciones.
//Sólo puedes llamar hooks desde funciones React, y no desde funciones JavaScript normales.

//El estado de React debe actualizarse de forma inmutable. Esto significa que no debes cambiar directamente el objeto de estado, sino que debes crear una nueva copia del objeto con los cambios que deseas realizar. Esto se puede hacer utilizando el operador de propagación (...) para crear una copia del objeto y luego actualizar las propiedades que deseas cambiar. Por ejemplo, si tienes un objeto de estado llamado "usuario" con propiedades "nombre" y "edad", y deseas actualizar la propiedad "edad", puedes hacer lo siguiente:
const [usuario, setUsuario] = useState({ nombre: 'Juan', edad: 30 });
setUsuario({ ...usuario, edad: 31 }); // Esto crea una nueva copia del objeto "usuario" con la propiedad "edad" actualizada a 31, y luego actualiza el estado con la nueva copia del objeto.


/*
¿Qué es un Hook en React?
En términos sencillos, un Hook es una función especial predefinida por React que te permite "engancharte" (de ahí la traducción literal de hook: gancho) a las características internas del motor de React, como la memoria (estado) o el ciclo de vida del componente.

Para entender por qué son tan importantes, hay que ver un poco de contexto:

El "Antes" y el "Después" de los Hooks
Antes de los Hooks (React 16.8 y versiones anteriores):
Si creabas un componente usando una función normal de JavaScript, ese componente era "tonto". Solo servía para recibir datos y mostrar HTML. Si querías que el componente tuviera memoria (por ejemplo, guardar si un botón fue clickeado o no), estabas obligado a convertir esa función en una Clase (programación orientada a objetos), lo cual hacía el código mucho más largo, complejo y difícil de leer.

Después de los Hooks (El estándar actual):
React introdujo los Hooks para que puedas usar absolutamente todas las capacidades de React sin tener que escribir Clases. Los Hooks dotaron a las funciones simples de "superpoderes".

Los Hooks más utilizados
Todos los Hooks en React empiezan por la palabra use por convención. Aquí tienes los más esenciales que te encontrarás en cualquier proyecto:

useState (El de la memoria): Te permite declarar una variable de estado. Es decir, un dato que cuando cambia, le avisa a React que debe volver a dibujar la pantalla para mostrar el nuevo valor.

useEffect (El de las tareas secundarias): Te permite ejecutar código en momentos específicos, como justo después de que el componente aparece en pantalla por primera vez, o cuando una variable en particular cambia. Se usa mucho para hacer peticiones a servidores (APIs).

useCallback (El optimizador): Como vimos en el apunte anterior, le dice a React que guarde una función en memoria y no la vuelva a crear a menos que sea estrictamente necesario.

useRef (La referencia directa): Te permite acceder directamente a un elemento del DOM (como un <input>) para manipularlo sin causar un re-renderizado.
*/