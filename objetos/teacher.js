import Persona from './clases.js';
class Teacher extends Persona {
    constructor(nombre, apellido, materia) {
        super(nombre, apellido);
        this.materia = materia;
    }
    ponerStudentNota = (student, nota) => {
        student.ponerNota(nota);
    }
}

export default Teacher;