let obj = {
    foo: function () { return "foo" },
    bar: function () {
        document.addEventListener("click", event => this.foo())
    }
}
//this es el contexto de la función en el momento que se está llamando