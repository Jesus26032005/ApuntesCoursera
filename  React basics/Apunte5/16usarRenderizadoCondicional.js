// El renderizado condicional es una técnica que permite mostrar u ocultar componentes o elementos en función de ciertas condiciones, como el estado de la aplicación o las propiedades de un componente.

// Para ello se pueden utilizar estructuras de control como if, operadores ternarios o expresiones lógicas dentro del JSX. A continuación, se presentan algunos ejemplos de cómo implementar el renderizado condicional en React:

// 1. Usando el if statement:
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please sign up.</h1>;
}

// 2. Usando el operador ternario:
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  return isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>
}

// 3. Usando expresiones lógicas: Aqui lo que se hace es que si la condicion es verdadera se ejecuta el primer elemento y si es falsa se ejecuta el segundo elemento, en este caso se usa el operador && para evaluar la condicion y mostrar el mensaje correspondiente.

// En react si cuando usamos el operador AND (&&) y la condicion es verdadera se ejecuta el primer elemento, pero si es falsa no se ejecuta nada, por lo que podemos usarlo para mostrar un mensaje de bienvenida si el usuario esta logueado y un mensaje de registro si no lo esta.
// siendo que la estructura de control es la siguiente: condicion && elemento a mostrar si es verdadera, y para el caso de que sea falsa podemos usar el operador NOT (!) para negar la condicion y mostrar el mensaje correspondiente.

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  return (
    <div>
      {isLoggedIn && <h1>Welcome back!</h1>}
      {!isLoggedIn && <h1>Please sign up.</h1>}
    </div>
  );
}

// Para ver mas opciones del if para presentar un componnente existen varias formas de hacerlo, como por ejemplo:

// 1. Usando if-else:
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign up.</h1>;
  }
}

// 2. Usando un operador ternario:
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  return (
    <div>
        {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>}
        </div>
    );
}



// Elegir un componente con variables de entorno
// se puede elegir mediante variables q devovler y ademas asignar un componente y ese retornarlo envuelto o colocado en algun lugar ejemplo:
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  let greetingMessage;

  if (isLoggedIn) {
    greetingMessage = <h1>Welcome back!</h1>;
  } else {
    greetingMessage = <h1>Please sign up.</h1>;
  }

  return (
    <div>
      {greetingMessage}
    </div>
  );
}

