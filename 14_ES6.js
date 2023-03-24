const nombre = "Alex";
const apellido = "Picó";
const poblacion = "MTX"
console.log(nombre + " " + apellido);
// con template lo hariamos
console.log(`${nombre} ${apellido}`);
/*un ejemplo de como usar las templates en React
function Componente({ blackgroundColor }) {
    return (<div className>{`bg.color.${blackgroundColor} `}</div>)
};
*/
// acortadores de nombre ES6
const persona = {
    nombre: nombre,
    apellido: apellido,
    poblacion: poblacion,
};
console.log(persona);
console.log(persona.apellido);
// en ES6 podemos ponerlo acortando
const person1 = {
    nombre,
    apellido,
    poblacion,
};
console.log(person1);
/* en React como utilizar esto:
function Componente({initialState, totalCount}) {
    const[state, setState] = useState({initialState, totalCount});
}
*/
// funciones =>
function nomFuncion() {
    return "Hola"
};
console.log(nomFuncion());

const nomFuncion1 = () => {
    return "Hola";
};
console.log(nomFuncion1());

const posts = [{
    id: 1,
    title: "Mi primer post",
    image: "https://img.com/1",
    tags: ["Javascript", "webdevelopment"],
}, {
    id: 2,
    title: "mi experiencia con React",
    image: "https://img.com/2",
    tags: ["Javascript", "webdevelopment", "react"],
}, {
    id: 3,
    title: "Por qué deje Angular",
    image: "https://img.com/3",
    tags: ["Javascript", "webdevelopment", "angular"],
}]
posts.map(posts => posts.title);
console.log(posts.map(posts => posts.title));
console.log(posts.filter(posts => posts.tags.includes("react")));
console.log(posts.filter(posts => posts.id));
console.log(posts.reduce((alltags, posts) => {
    return Array.from(new Set([...alltags, ...posts.tags]))
}, []));

// un ejemplo de desestructuración
const cuadrado = {
    x: 10,
    y: 10,
};
function calcularArea(cuadrado) {
    return cuadrado.x * cuadrado.y;
};
console.log(calcularArea(cuadrado));

function calcArea(cuadrado) {
    const { x, y } = cuadrado;
    return x * y;
};
console.log(calcArea(cuadrado));

function calArea({ x, y }) {
    return x * y;
};
console.log(calArea(cuadrado));

/* En React lo hariamos: 
function Avatar({ username, url }) {
    return <img src={url} alt={username} />

};
*/
//Parámetros por defecto en ES6
// antes se hacía:
function suma(a, b) {
    if (a === undefined || b === undefined) {
        console.log("Debes de definir 2 valores");
        return;
    }
    return a + b;
};
console.log(suma(3));
console.log(suma(2, 5));
//ejemplo de parámetros por defecto:
function suma1(a = 0, b = 0) {
    return a + b;
};
console.log(suma1(3)); //no da error da 3.
console.log(suma1(3, 3)); //6

//Otra forma
function suma2(a, b) {
    a = a ?? 0; // a = a y si no 0
    b = b ?? 0;// b = b y si no 0
    return a + b
}
console.log(suma2(3));


//Parámetros Rest
const array1 = [1, 2, 3, 4, 5];
const otroArray = [6, 7, 8, 9, 10];
//antes si queríamos unir estos arrays
const newArray = array1.concat(otroArray);
console.log(newArray);
//ahora lo hariamos con los parámetros rest (tb sirve para obejtos):
const nuevoArray = [...array1, ...otroArray];
console.log(nuevoArray);

const obj1 = {
    a: "a",
    b: "b",
    c: "c",
};
const obj2 = {
    d: "d",
    e: "e",
};
//si uqeremos crear un Objeto que tenga las caracteristicas de estos Objetos, antes se hacia:
const nuevoObj = Object.assign({}, obj1, obj2);
console.log(nuevoObj);
//ahora lo haríamos:
const newObj = { ...obj1, ...obj2 };
console.log(newObj);

//Ternarios (acortadores de las sentencias if / else)
const coche = {
    marca: "Tesla",
    model: "CiberTruck",
}
let modelo;
if (coche.model) {
    modelo = coche.model;
} else {
    modelo = "X"
};
console.log(modelo);
// lo acortamos:
let modelo1 = coche.model ? coche.model : "X"; // "CiberTruck"
let modelo2 = coche.matricula ? coche.matricula : "Sin matricular" // "Sin matricular"
console.log(modelo1);
console.log(modelo2);

// Truco final
const user = {
    nombre: "x",
    edad: "1",
    localización: {
        x: "0",
        y: "Z",
        city: {
            zipcode: "%5",
            ldl: "OK",
        }
    }
}
// para acceder a "ldl" e imprimirlo teniamos que hacer:
const ldl = user && user.localización && user.localización.city && user.localización.city.ldl;
console.log(ldl);
// Ahora lo haremos:
const zipcode = user?.localización?.city?.zipcode;
console.log(zipcode);
