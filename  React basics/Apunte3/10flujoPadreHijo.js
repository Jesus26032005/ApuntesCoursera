// El flujo padre-hijo en React se refiere a la forma en que los datos y las funciones se pasan desde un componente padre a un componente hijo a través de props. En este flujo, el componente padre puede enviar información al componente hijo. y del mismo modo, el componente hijo puede enviar información de vuelta al componente padre.

// Existen dos tipos de data, los props y el state. Los props son inmutables y se utilizan para pasar datos desde el componente padre al hijo, mientras que el state es mutable y se utiliza para manejar datos internos del componente. Ademas los estados pueden ser compartidos entre componentes a través de props, lo que permite que los componentes hijos puedan acceder y modificar el estado del componente padre, aunque esto no hace que el flujo de datos sea bidireccional.

// Ejemplo de flujo padre-hijo en React:
// Componente padre
function Padre() {
  const mensaje = "Hola desde el padre";

  const enviarAlHijo = () => {
    console.log("Mensaje enviado al hijo");
  };

  return (
    <div>
      <h1>Componente Padre</h1>
      <button onClick={enviarAlHijo}>Enviar mensaje al hijo</button>
      <Hijo mensaje={mensaje} enviarAlPadre={() => setMensaje('Hola desde el hijo')} />
    </div>
  );
}

// Componente hijo
function Hijo(props) {
  return (
    <div>
      <h2>Componente Hijo</h2>
      <p>Mensaje del padre: {props.mensaje}</p>
      <button onClick={props.enviarAlPadre}>Enviar mensaje al padre</button>
    </div>
  );
}
// No solo pasa de padre a hijo, sino que el hijo puede enviar a otro componente hijo, y así sucesivamente.

