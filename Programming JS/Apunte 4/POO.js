// POO es Programación Orientada a Objetos, es un paradigma de programación que utiliza "objetos" para modelar datos y funcionalidades. En JavaScript, se pueden crear objetos utilizando clases o funciones constructoras.

// Una clase es una plantilla para crear objetos con propiedades y métodos. A continuación, se muestra un ejemplo de cómo definir una clase en JavaScript:
class Persona {
    // EL constructor es un método especial que se llama automáticamente cuando se crea una nueva instancia de la clase. Se utiliza para inicializar las propiedades del objeto.
    constructor(nombre, edad) {
        // Las propiedades se definen dentro del constructor utilizando la palabra clave this, que hace referencia a la instancia actual del objeto.
        this.nombre = nombre; // Propiedad nombre
        this.edad = edad;     // Propiedad edad
    }

    // Para añadir un metodo a una clase , no es necesario usar la palabra function, simplemente se define el nombre del metodo seguido de paréntesis y llaves.
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// Para crear una instancia de la clase Persona, se utiliza la palabra clave new seguida del nombre de la clase y los argumentos necesarios para el constructor.
const persona1 = new Persona('Juan', 30);
const persona2 = new Persona('María', 25);

// Ahora podemos llamar al método saludar() en cada instancia de la clase.
persona1.saludar();
persona2.saludar();


// Todas las clases en JavaScript heredan de la clase Object, lo que significa que todas las instancias de una clase tienen acceso a los métodos y propiedades de Object. 
// Se puede acceder al metodo create para crear un nuevo objeto
let objeto1 = Object.create(persona1); 

// PRINCIPIOS DE POO
// Herencia: Permite que una clase (subclase) herede propiedades y métodos de otra clase (superclase). Esto facilita la reutilización de código y la creación de jerarquías de clases. En JavaScript, se puede lograr mediante la palabra clave extends.
class Empleado extends Persona {
    constructor(nombre, edad, puesto) {
        // Se llama al constructor de la superclase utilizando super() para inicializar las propiedades heredadas.
        super(nombre, edad);
        this.puesto = puesto; // Propiedad adicional para la subclase Empleado
    }

    // Se puede sobrescribir el método saludar() de la superclase para proporcionar un comportamiento específico para la subclase.
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y trabajo como ${this.puesto}.`);
    }
}

// Encapsulacion: Es el principio de ocultar los detalles internos de un objeto y exponer solo lo necesario a través de métodos públicos. Esto ayuda a proteger los datos y mantener la integridad del objeto. En js se maneja de tres formas, los campos privados, y la convencion de usar _ para indicar que una propiedad es privada, y los metodos get y set para acceder a las propiedades privadas. 
class CuentaBancaria {
    // Campo privado utilizando el prefijo # igual se puede en una funcion
    #saldo;

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
        this._numeroCuenta = Math.floor(Math.random() * 1000000); // Propiedad privada utilizando la convención de _
    }

    // Método público para depositar dinero en la cuenta
    depositar(cantidad) {
        if (cantidad > 0) {
            this.#saldo += cantidad;
            console.log(`Se han depositado ${cantidad}. Nuevo saldo: ${this.#saldo}`);
        } else {
            console.log('La cantidad a depositar debe ser mayor que cero.');
        }
    }

    // Método público para retirar dinero de la cuenta
    retirar(cantidad) {
        if (cantidad > 0 && cantidad <= this.#saldo) {
            this.#saldo -= cantidad;
            console.log(`Se han retirado ${cantidad}. Nuevo saldo: ${this.#saldo}`);
        } else {
            console.log('Cantidad inválida o saldo insuficiente.');
        }
    }

    // Debido a que el saldo es un campo privado, se pueden tenner getters y setters para acceder a él de manera controlada. En este caso, solo se proporciona un getter para obtener el saldo actual.
    get Saldo() {
        return this.#saldo;
    }

    set Saldo(nuevoSaldo) {
        if (nuevoSaldo >= 0) {
            this.#saldo = nuevoSaldo;
            console.log(`El saldo ha sido actualizado a: ${this.#saldo}`);
        } else {
            console.log('El saldo no puede ser negativo.');
        }
    }

    // asimismo existen los valores y metodos estaticos, que son aquellos que pertenecen a la clase en sí misma y no a las instancias de la clase. Se definen utilizando la palabra clave static. Los métodos estáticos se pueden llamar directamente en la clase sin necesidad de crear una instancia.
    static informacionCuenta() {
        console.log('Esta es una clase para manejar cuentas bancarias.');
    }
}

// Abstracción: Es el principio de simplificar la complejidad al enfocarse en los aspectos esenciales de un objeto y ocultar los detalles innecesarios. Esto permite a los desarrolladores trabajar con objetos de manera más intuitiva y eficiente. 

// Polimorfismo: Es el principio de permitir que diferentes clases implementen métodos con el mismo nombre pero con comportamientos distintos. Esto permite a los objetos de diferentes clases ser tratados de manera uniforme, lo que facilita la extensibilidad y la flexibilidad del código. En JavaScript, se puede lograr mediante la sobrescritura de métodos en subclases, como se mostró en el ejemplo de la clase Empleado que sobrescribe el método saludar() de la clase Persona.

// Nota: En el constructor se pueden tener valores por defecto, de esta manera si no se pasa un valor al crear una instancia de la clase, se utilizará el valor por defecto.
class Producto {
    constructor(nombre = 'Producto genérico', precio = 0) {
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarInformacion() {
        console.log(`Nombre: ${this.nombre}, Precio: ${this.precio}`);
    }
}

const producto1 = new Producto();
console.log(producto1)