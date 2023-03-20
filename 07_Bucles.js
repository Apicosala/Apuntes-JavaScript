/*   ### Bucles: While, Do/While, For, Bucle forEach, for ... in ###
En ocasiones nos interesa que determinados bloques de código se ejecuten varias veces mientras se cumpla 
una condición.
Flujo de un Bucle{
    Inicialización: fija valores.
    Condición de permanencia en el Bucle : while, for
    Actualización: actualización de variables al ejecutar la iteración

}
*/
// -While.
let i = 1;
while (i < 11) {
    console.log(i);
    i++; //incrementa su valor de uno en uno
}

function buclewhile(num) {
    let i = 1;
    while (i < num) {
        console.log(i);
        i++;
    }
}
console.log(); // lo utilizo para separar resultados en la terminal
buclewhile(11);
console.log();// lo utilizo para separar resultados en la terminal
buclewhile(4);

// -Do/While
function doWhile(num) {
    let i = 0;
    do {
        console.log(i);
        i++
    } while (i < num);
}
// primero ejecuta do (imprime 0) y luego ya comprueba el while
doWhile(7);

/* -For: for(incialización, condición de permanencia, actualización). 
 Nos permite hacer lo mismo que while pero en una misma linea.*/

function bucleFor(num) {
    for (let i = 1; i < num; i++) {
        console.log(i);
    }
}
bucleFor(11);

//Buenas prácticas en el bucle for. Es ,uy común utilizar for para recorrer Arrays para ello tener en cuenta:
const array = [];
array[0] = "1";
array[1] = "2";
array[3] = "3";
array[0]; //nos devolvería "1"
/*otra forma de construir Arryas es llamar es llamar a la clase primitiva array de darle un valor, en este caso 10.000 posiciones
const array = new array(10000); */
const objeto = {
    unArray: new Array(10000)
};
for (let i = 0; i < objeto.unArray.length; i++) {
    objeto.unArray[i] = "Hola";
}
// para optimizar rendimiento
console.time("test")
const obj = {
    unArray: new Array(10000)
};
let longitud = obj.unArray.length; // creamos una variable y al incluimos en for separada con una ,
for (let i = 0, longitud = obj.unArray.length; i < longitud; i++) {
    objeto.unArray[i] = "Hola";
}
console.timeEnd("test")

// para optimizar más
console.time("test1")
const unArray = objeto.unArray
for (let i = 0, longitud = unArray.length; i < longitud; i++) {
    unArray[i] = "Hola";
}
console.timeEnd("test1")

// Bucle forEach
// en este ejemplo diríamos: "papami Array ejecuta esta condicion que es a función"
const miArray = [1, 2, 3, 4,];
miArray.forEach(function (elemento, index) {
    console.log("El valor de la posición " + index + " es " + elemento);
});

const libro = {
    título: "Aprendiendo JS",
    autor: "Carlos Azaustre",
    numPaginas: 96,
    editorial: "carlosazaustre.es",
    precio: "17.96€",
};
//neceistamos que propiedades el obketo sean un array para utilizar forEach.
/*Utilizaremos las funciones de la clase Object : getOwnPropertyNames devuelve una array con las propiedades del objeto
 y getOwnPropertyDescriptor para accceder a su valor*/
const propiedades = Object.getOwnPropertyNames(libro);
propiedades.forEach(function (name) {
    let valor = Object.getOwnPropertyDescriptor(libro, name).value;
    console.log("La propiedad " + name + " contiene: " + valor)
});
// For ... In: for ( "nombre de la propiedad"(Key) in "valor de la propiedad"(object[key]))
const libro1 = {
    título: "Aprendiendo JS",
    autor: "Carlos Azaustre",
    numPaginas: 96,
    editorial: "carlosazaustre.es",
    precio: "17.96€",
};
for (let prop in libro) {
    console.log("La propiedad " + prop + " es: " + libro[prop]);
};