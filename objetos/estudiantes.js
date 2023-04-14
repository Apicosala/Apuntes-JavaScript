import Persona from './clases.js';

class Student extends Persona {
    #nota = 0;
    #carrera;
    constructor(nombre, apellido, carrera) {
        super(nombre, apellido);
        this.#carrera = carrera;
    }
    saludar = () => {
        console.log(`Hola, me llamo ${this.getFullName()} y estudio ${this.#carrera}`);
    }
    ponerNota = (nota) => {
        this.#nota = nota;
    }
    getNota = () => {
        return this.#nota;
    }
    aprobado = () => {
        return this.#nota >= 5;
    }
    suspenso = () => {
        return this.#nota < 5;
    }
}

export default Student;


const Julia = new Student('Julia', 'Pérez', 'Ingeniería');
Julia.saludar();
const Alex = new Student('Alex', 'Picó', 'Ingeniería');
Alex.saludar();
console.log(Julia.getFullName());
console.log(Alex.getFullName());
console.log(Julia);
console.log(Alex);