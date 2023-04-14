class Persona {
    #nombre;
    #apellido;

    constructor(nombre, apellido) {
        this.#nombre = nombre;
        this.#apellido = apellido;
    }
    saludar = () => {
        console.log(`Hola, me llamo ${this.#nombre} ${this.#apellido}`);
    }
    steName = (nombre) => {
        this.#nombre = nombre;
    }
    steApellido = (apellido) => {
        this.#apellido = apellido;
    }
    getFullName = () => {
        return `${this.#nombre} ${this.#apellido}`;
    }
}

export default Persona;


const Alex = new Persona('Alex', 'Picó');
Alex.saludar();
const Pepa = new Persona('Pepa', 'Pérez');
console.log(Pepa.getFullName());
console.log(Alex.getFullName());