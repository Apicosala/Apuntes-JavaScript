const datosPelis = [{
    id: 1,
    título: "Iron Man",
    año: 2008
}, {
    id: 2,
    título: "Spiderman: Homecoming",
    año: 2017
}, {
    id: 3,
    título: "Avengers: Endgame",
    año: 2019
}];// un Array de datos con 3 objetos, vamos a genera una function que devuelve estos datos.
const getDatos = () => {
    return datosPelis
};
console.log(getDatos()); /* me devuelve
 { id: 1, 'título': 'Iron Man', 'año': 2008 },
 { id: 2, 'título': 'Spiderman: Homecoming', 'año': 2017 },
 { id: 3, 'título': 'Avengers: Endgame', 'año': 2019 }
 Al ser sincron me los devuelve los datos sin problema, pero si los datos estubieran fuera
 y tardarse un tiempo en devolverlo para ejecutar ( cualquier llamada en la red tiene un
pequeño tiempo de respuesta) eso produce la asincronia al no ser algo directo.
vamos a simular esa asincronia con SetTimeout, que nos permite ejecutar una función 
pasado X tiempo (el tiempo que pongamos) */
const getdatos1 = () => {
    setTimeout(() => {
        return datosPelis
    }, 1500); // le estamos diciendo que me devuelva la f en 1,5 segundos

};
console.log(getdatos1());// nos devuelve undefined porque ha esperado 1,5" pero como no ha pasado nada
// lo resovemos gracias a las Promesas, nos permite ejecutar código y cuando este listo se devuelve y si no devuelve error.

const getdatos2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(datosPelis);
        }, 1500);
        //si quisieramos indicar algun posible error utilizariamos reject
    });
};
getdatos2()
    .then((datos) => console.log(datos));
//  .catch(error => ....) si queremos poner un error
// tambien en lugar de .then o .catch podemos utilzar otra manera de llamar, utilizando await (esperar)


async function ejemploAwait() {
    try {
        const datos1 = await getdatos2(); // datos1 = espera que getdatos2 me de valores ( en este caso 1,5")
        console.log(datos1); //imprime los datos cuando llamen a la async funcion
    } catch (error) {
        console.log(error);// si hay error imprime error
    }
}
ejemploAwait();

