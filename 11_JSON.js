/* Los detalles de implementación son que las propiedades del objeto deben ser Strings para que  no 
haya problemas al codificarlo y descodificarlo. No se puede serializar funciones, expersiones regulares,
errores y valores undefined. */
const alumno = {
    id: "08021977",
    nombre: "alejandro.pico",
    password: "ejhcuh12HDWY12hsh",
    datosAlumno: {
        nombre: "Alejandro",
        apellidos: "Picó",
        email: "alejandro.pico@picosala.es",
        provincia: "Alicante",
        ciudad: "Mutxamel"
    },
    preferencias: {
        contacto: {
            email: true,
            notificación: true,
        },
        intereses: ["JavaScript", "Angular", "Nodejs"]
    },
};
console.log(alumno.datosAlumno.ciudad);
/* si queremos serializarlo para realizar un intercambio de datos, debemos usar la función JSON.stringify que devuelve 
en un String la información del objetoque se le pasa por parametros .
*/
var jsonSerializado = JSON.stringify(alumno);
console.log(jsonSerializado); // devuelve una string con todos los datos.
// si queremos acceder a la propiedades no podemos para eso utilizamos JSON.parse que devuelve un objeto
var jsonReconstruido = JSON.parse(jsonSerializado);
console.log(jsonReconstruido);
console.log(jsonReconstruido.datosAlumno.ciudad);

/*
este tipo de datos se utilizan, normalmente en intercambio de datos desde un 
servidor con llamadas HTTP, AJAX
*/

