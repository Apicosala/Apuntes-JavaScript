//   ### Condicionales: if, if else, if/else, switch.
// if
let operacion = 5 + 3;
if (operacion >= 8) {
    console.log("es true")
};
if (operacion < 8) {
    console.log("es falso")
};
// else
let operacion1 = 6 + 4;
if (operacion1 = 10) {
    console.log("Muy bien, has acertado")
} else {
    console.log("Intentalo de nuevo")
};
/*
si se cumple el bloque 1 (if) se ejecuta y 
si no, 
se ejecutabbloque 2 (else)
*/

// if else
let operacion2 = 5 + 1;
if (operacion2 > 7) {
    console.log("es mayor que 7")
} else if (operacion2 < 7 && operacion2 > 4) {
    console.log("está entre 7 y 4")
} else if (operacion2 > 1 && operacion2 < 4) {
    console.log("está entre 1 y 4")
} else {
    console.log("es 0")
};
/*
se comprueba el bloque 1 (if), si cumple s ejecuta.
Si no se van probando, bloque 2 (else if), bloque 3 (else if), ...
si no se cumple ninguno de los bloques se ejecuta el else
*/

// switch
/*
Con switch podemos sustituir un conjunto de "else if" de una manera
más legible.
Se comprueba la condición y según el caso que devuelva, ejecutará
un bloque u otro. 
Para separar los bloques se utiliza "break". Existe tambien un bloque opcional
que es "default", que se ejecuta en el caso que no se cumpla ningún bloque.
*/
let operacion3 = 5 + 2;
switch (operacion3) {
    case 0:
        console.log("El resultado es 0");
        break;
    case 7:
        console.log("El resultado es 7");
        break;
    default:
        console.log("El resultado no es ni 0 ni 7")
}

switch (operacion2) {
    case operacion2 > 7:
        console.log("es mayor que 7");
        break;
    case operacion2 < 7 && operacion2 > 4:
        console.log("está entre 7 y 4");
        break;
    case operacion2 > 1 && operacion2 < 4:
        console.log("está entre 1 y 4");
        break;
    case 6:
        console.log("Es 6, muy bien!!!");
        break;
    default:
        console.log("es 0")
}


