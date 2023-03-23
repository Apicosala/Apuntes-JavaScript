//  ### Clausulas o funciones de cierre:
const saludar = function (nombre) {
    return "Hola " + nombre;
}
console.log(saludar("Carlos"));

const a = "Hey";
function global() {
    const b = "¿Qué ";
    function local() {
        const c = "tal?";
        return a + b + c;
    }
    return local;
}
// para poder accder a la funcion local debriamos poner doble ()
console.log(global()());// devuelve "Hey¿Que tal?". los primeros () llaman a la funcion y los segunod () la ejecutan
console.log(global()); // devuelve [Function: local]
// para evitar el doble () creamos una constate y la igualamaos a global.
const closure = global();
console.log(closure());
/* estos ejemplos son de funciones anidadas, pero ya nos acercamos a 
la definición e Clousures que se asemejan mucho a las Clases.*/
const miContador = (function () {
    let = _contador = 0; //se pone _delante de la variable para señalar que mo es accesible desde fuera de la función.
    function incrementar() {
        return _contador++;
    }
    function decrementar() {
        return _contador--;
    }
    function valor() {
        return _contador;
    }
    return {
        incrementar,
        decrementar,
        valor
    }
})();
// esto es un ejemplo de Clousure, a la variable let = contador no puedes acceder desde fuera
console.log(miContador.valor());// devuelve 0, valor inicial
miContador.incrementar();// devuelve 0 solo le damos la orden de incrementar
console.log(miContador.valor());// 1
miContador.incrementar();
console.log(miContador.valor());// 2

class MiContador {
    constructor(valor, incrementar, decrementar) {
        this.valor = valor;
        this.incrementar = incrementar;
        this.decrementar = decrementar;
    }
    value(valor) {
        return this.valor[valor];
    }
    ascendente(incrementar) {
        return this.incrementar[incrementar] = valor++;
    }
    descente(decrementar) {
        return this.decrementar[decrementar] = valor--;
    }
}
const contador1 = new MiContador
console.log(contador1.value());