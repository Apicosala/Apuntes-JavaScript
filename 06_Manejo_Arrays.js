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
// ## Método Find:
console.log(posts.find(posts => posts.title == "Por qué deje Angular")); // nos devuelve todo el objeto donde de encuentra
/*quiero que recorra los "posts (variable)" y 
que nos devuelva los que su titulo sea "Por qué dje Angular"
{
  id: 3,
  title: 'Por qué deje Angular',
  image: 'https://img.com/3',
  tags: [ 'Javascript', 'webdevelopment', 'angular' ]
}
*/

// Método Some (Hay algún eleemento que contenga?), Includes & Every (en todos esta el elemento: ) :
console.log(posts.some(posts => posts.id)); // devuelve true.
console.log(posts.some(posts => posts.subtitle)); // devuelve false
console.log(posts.some(posts => posts.tags.includes("angular"))); // true
console.log(posts.some(posts => posts.tags.includes("node"))); // false dentro de tags no hay ningún elemento "node"
console.log(posts.every(posts => posts.tags.includes("Javascript"))); // true, en todos los tags esta Javascript incluido
console.log(posts.every(posts => posts.tags.includes("react"))); // false, no en todos

//Método Map
// queremos hacer un Array solo con los títulos que contiene posts.
console.log(posts.map(posts => posts.title)); //me devuelve un array solo con los tíltulos.

//Método Filter
console.log(posts.filter(posts => posts.tags.includes("angular")));
console.log(posts.filter(posts => posts.image !== undefined));

//Método Reduce
console.log(posts.reduce((allTags, posts) => {
    return [...allTags, ...posts.tags]
}, []))
/*de esta forma hace una array con todos los elementos de Tags pero repertidos,
si no queremos que se repita utilizaremos SET*/
console.log(posts.reduce((allTags, posts) => {
    return Array.from(new Set([...allTags, ...posts.tags])) // devuelveme un nuevo Array pero sin repetidos
}, []))