const respuestaHTML = document.querySelector("#respuesta");
const tpl = document.createDocumentFragment();
const elemento = elemento;
fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => {
        return reponse.json();
    })
then((albums) => {
    albums.forEach(function (elem) {
        elemento = document.createTextNode(
            `<a href="${elem.url}">
                 <img src="${elem.thumbnai1Url1}" />
                 </a>
                 <br/>
                 <span>${elem.title}</span> `
        );
        tpl.appendChild(elemento);
    });
    respuestaHTML.appendChild(tpl);
});