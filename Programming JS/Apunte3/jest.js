// Jest es un framework de pruebas para JavaScript.
// Permite comprobar que el código produce los resultados esperados y detectar errores al modificarlo.
// También puede probar TypeScript, con la configuración necesaria para transformar ese código.
// Su enfoque de configuración mínima facilita comenzar a escribir pruebas en muchos proyectos.

// Conceptos clave de Jest

// 1. Mocking (simulación de funciones y dependencias)
// Permite sustituir una dependencia por una versión controlada para probar el código de forma aislada.
// Con jest.fn() podemos crear una función simulada y comprobar cómo fue llamada.

/* Ejemplo para un archivo .test.js ejecutado con Jest:
const obtenerUsuario = jest.fn().mockReturnValue({ nombre: "Ana" });

test("obtiene un usuario mediante una función simulada", () => {
    const usuario = obtenerUsuario(1);

    expect(usuario).toEqual({ nombre: "Ana" });
    expect(obtenerUsuario).toHaveBeenCalledWith(1);
});
*/

// 2. Snapshot testing (pruebas de instantáneas)
// Guarda una representación de un resultado, como una estructura de datos o una interfaz serializada.
// En ejecuciones posteriores, compara el resultado con la instantánea guardada.
// Si hay diferencias, la prueba falla: debemos revisar si el cambio es un error o es intencional.

/* Ejemplo para un archivo .test.js ejecutado con Jest:
test("conserva la estructura del usuario", () => {
    const usuario = { nombre: "Ana", activo: true };

    expect(usuario).toMatchSnapshot();
});
*/

// 3. Code coverage (cobertura del código)
// Jest puede generar reportes de las líneas, funciones, sentencias y ramas ejecutadas durante las pruebas.
// Para recopilar cobertura en un proyecto que tenga Jest instalado:
// npx jest --coverage
// Una cobertura alta no garantiza que las pruebas detecten todos los errores.

// Pregunta de repaso
// ¿Cuál de los siguientes NO es uno de los conceptos clave asociados a Jest?
// - Mocking.
// - Snapshot testing.
// - Code coverage.
// - Compilación en tiempo real de JavaScript en código máquina.

// Respuesta correcta: Compilación en tiempo real de JavaScript en código máquina.
// Esta tarea corresponde a un compilador JIT (Just-In-Time) de un motor de JavaScript, como V8.
// Jest es un framework de pruebas unitarias y de integración; no es un motor ni un compilador JIT.

// Nota: test(), expect() y jest.fn() pertenecen al entorno de Jest.
// Los ejemplos están comentados para conservar este archivo como apunte.
