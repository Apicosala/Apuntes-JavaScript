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
