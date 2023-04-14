import Teacher from "./teacher.js";
import Student from "./estudiantes.js";
import Curso from "./curso.js";


const PedroTeacher = new Teacher('Pedro', 'González', 'Matemáticas');

const JuliaStudent = new Student('Julia', 'Pérez', 'Ingeniería');
const AlexStudent = new Student('Alex', 'Picó', 'Ingeniería');
const JuanStudent = new Student('Juan', 'García', 'Ingeniería');

const frontcurso = new Curso('Frontend');
const backcurso = new Curso('Backend');

frontcurso.setstudents(JuliaStudent);
frontcurso.setstudents(AlexStudent);
frontcurso.setstudents(JuanStudent);

backcurso.setstudents(JuliaStudent);
backcurso.setstudents(AlexStudent);
console.log("*************************************************************")
console.log(frontcurso.getname());
frontcurso.getstudents().forEach((student) => {
    console.log(student.getFullName());
    console.log(student.getNota());
    console.log(student.aprobado());
});
console.log("*************************************************************")
console.log(PedroTeacher.getFullName());

PedroTeacher.ponerStudentNota(JuliaStudent, 7);
PedroTeacher.ponerStudentNota(AlexStudent, 8);
console.log(JuliaStudent.getFullName());
console.log(JuliaStudent.getNota());
console.log(JuliaStudent.aprobado());
console.log(AlexStudent.getFullName());
console.log(AlexStudent.getNota());
console.log(AlexStudent.aprobado());
console.log(JuanStudent.saludar());
console.log(JuanStudent.getNota());
console.log(JuanStudent.aprobado());



