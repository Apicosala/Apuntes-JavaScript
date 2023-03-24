/*
Las clases Core más utilizadas: Object, Number, Array, y String.
Todas ellas heredan de Object
*/
/*   ## Object ## = es una colección de variables y funciones agrupadas de manera estructural.
A las variables dentro de un Objeto se les llama propiedades.
A las funciones dentro de un Objeto se les llama métodos.
*/
const libroReact = {
    título: "Desarrollo Web con React",
    autor: "Carlos Azaustre",
    paginas: 64,
    formatos: ["PDF", "ePub", "Mobi"],
    precio: 17.99,
    publicado: false,
    leer: function () {
        console.log("He leído el libro de React.js")
    },
};
/* como vemos las propiedades son pares clave-valor, separadas por comas.
Podemos acceder a la propiedades de forma independiente (o bien con la notación punto
"función.propiedad;" o con la notación array "función[propiedad];")
*/
libroReact.título;
libroReact["formatos"];
//tambien podemos modificarlos de la misma manera:
libroReact.precio = 20.00;
libroReact["publicado"] = true;
// con array podemos acceder a las propiedades con variables pero con la notación de punto no
let propiedad = "autor";
libroReact[propiedad];
libroReact.propiedad; // sale undefined
/* como hemos dicho antes aqui las funciones se llaman método
 leer: function () {
        console.log("He leído el libro de React.js")
    },
*/
libroReact.leer(); // nos devuelve "He leído el libro de React.js"

//para crear objetos podemos hacerlo con llave {} o creando una nueva instancia de clase
let miObjeto = { propiedad: "valor" };
let miObjeto1 = new Object({ propiedad: "valor" });

//   ## Anidación ##
/*
Un objeto pude tener propiedades y estas propiedades dentro tener más propiedades y
podremos acceder a ellas con notación punto, array o mixta (array y punto)
*/
const libro = {
    título: "Desarrollo Web con React.js",
    autor: {
        nombre: "Carlos Azaustre",
        nacionalidad: "Española",
        edad: 36,
        contacto: {
            email: "carlosazaustre@gmail.com",
            telefono: "555 - 5555 - 5555",
        },
    },
    editorial: {
        nombre: "carlos.azaustre.es Books",
        web: "https://carlosazaustre.es",
    },
};
libro.autor.nacionalidad;
libro.autor.contacto.telefono;
libro["autor"]["edad"];
libro.autor["contacto"].email;

//   ## Igualdad entre Objetos ##
const coche1 = { marca: "Ford", modelo: "Focus" };
const coche2 = { marca: "Ford", modelo: "Transit" };
const coche3 = coche1;
coche1 === coche2; // false pq el modelo es diferente.
coche1.marca === coche2.marca; // true.
coche1 === coche3; // true.
coche3.modelo === coche2.modelo; //false.

//   ## Módulo Math: las más utilizadas: ##
Math.PI; //3.14159265...
Math.E; // e = 2.7182818...
Math.random(1, 10); // número aletorio dentro de los parametros marcados.
Math.pow(2, 4); // 2 elevado a 4.
Math.sqrt(121); // raiz cuadrada de 121.
Math.min(4, 3, 1); // devuelve el mínimo del conjunto de números.
Math.max(12, 4, 8); // devuelve el máximo del conjunto de números.
Math.floor(12, 3) //devuelve la parte entera más próxima por debajo, seria 12.
Math.ceil(12, 3); //devuelve la parte entera más próxima por arriba, seria 13.
Math.round(5, 4); // redondea y saca la parte entera, en este caso 5.
Math.sin(); //seno.
Math.cos(); //coseno.
Math.tan(); //tangente.
Math.log();//logaritmo.

//  ## Array: métodos más utilizados ##
// se pueden crear Array de 2 formas:
let miArray = [];
let miArray1 = new Array();
//tipos:
let listaNotas = [5, 4.4, 7, 8, 3.2, 10]; // Array de números.
let listaNombres = ["Pablo", "Pedro", "Luis", "Kiko"]; //Array de strings.
let nombresNotas = [{ Pablo: 5 }, { Pedro: 4.4 }, { Luis: 7 }] // Array de Objetos
let variasListas = [
    [2, 4, 6],
    [8, 3],
    [1, 2, 3, 4, 5]
]; // Arrays de arrays (Matriz)
let mixto = [1, true, [3, 2], "Hola", { clave: "valor" }]; // Array mixto

let milista1 = [1, 2, 3, 4, 5];
milista1[1]; // de vuelve el 2, recordar que el indice es 0, 1, 2, 3, ...
milista1.length; // me devuelve el último elemento.

// Métodos en Array:
let miLista = [3, 6, 1, 4];
miLista.sort(); // devuelve un nuevo array con los valores ordenados.
console.log(miLista);
miLista.pop(); //devuelve el último elemento de array (6) y lo saca de la lista, quedaria [1, 3, 4]
console.log(miLista);
miLista.push(2); // introduce un elemento al final de la lista [1, 3, 4, 2]
console.log(miLista);
miLista.reverse(); // lista al réves
/*otro muy utilizado es "join()" sirve para unir string del array uniéndolos con el "separador" que le pasemos como parametro de la función.
 si pongo .join("*") <li>*3*</li>
 si pongo .join("") <li>3</li> 
 si pongo .join("-") <li>-3-</li>
 */

let valeu = 3;
const template = [
    "<li>",
    valeu,
    "</li>"
].join("");
console.log(template);

/* Si queremos aplicar una misma función a todos los elementos de una Array,
por ejemplo, saber la raiz cuadrada [2,4,6,8,10]
pondremos .map()
*/
let listaMap = [2, 4, 6, 8, 10];
let raices2 = listaMap.map(Math.sqrt); // el map hace que se aplique a todos los elemetos de la array
console.log(raices2);

let resultados = listaMap.map(function (elemento) {
    return (elemento *= 2);
});
console.log(resultados);

/*la opcion .filter(), nos permite filtrar los elementos, en el ejemplo
vamos a filtar los elelemtos por los que son divisbles por 3. */

let lista3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let resultadoDivisible3 = lista3.filter(function (elemento) {
    return (elemento % 3 === 0);
});
let resultado = lista3.filter(elemento => elemento % 3 === 0)
console.log(resultadoDivisible3);

/* para trocear u obtener una parte de la Array utilizamos .slice(),
si ponemos lista.slice(2) nos devolverá otra lista sin la posición 0 y 1. Ya que la array es inmutable.
si ponemos lista.slice (2, 4) el primer parametro es inclusivo per el ultimo parametro NO.
Nos dará otra lista con los elemtos entre 2 hasta 4 sin incluir
por tanto, nos quitaria las posiciones 0, 1 y la 4 para arriba 
admite parametros en negativo -2 */
lista3.slice(2);
console.log(lista3);
lista3.slice(2, 4);
lista3.slice(2, -2); // desde el 2 hasta el penúltimo.
console.log(lista3);

//   ## Stings: métodos y comportamientos ##
"Javacript"[2]; //devuelve la segunda posición del indice "v".
"Javascript".charCodeAt(2); //devuelve 118 unicode.
"Javascript".length; // nos devuelve el nuemro de carateres que tenga "10".
"Javascript".indexOf("script"); // nos devuelve el indice en el que empieza "script", 4.
"Javascript".substring(4, 10); // devuelve la parte contenida entre el indice 4 y 10, scrip.
// se pueden crear String de 2 formas:
const texto = "Hola mundo";
const texto1 = new String("Hola mundo");
// una String puede ser pasada a Array con .split() pasando como parametro el delimitador que queramos que separe los elementos.
const fecha = new Date();
fecha.toString().split(" ");
//fecha = fecha.split("")
console.log(fecha.toString());
// Wed Mar 22 2023 10:01:15 GMT+0100 (hora estándar de Europa central)
console.log(fecha.toString().split(" "));
/*
 'Wed',      'Mar',
  '22',       '2023',
  '10:01:15', 'GMT+0100',
  '(hora',    'estándar',
  'de',       'Europa',
  'central)'
  split me lo pasa asi
*/
console.log(fecha.toString().split(" ")[4]);
//10:05:17