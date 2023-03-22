/*   ### Funciones: ###
Las Funciones en JS, son bloques de código ejecutable, a los que podemos asignar parámatros y poerar con ellos.
Las Funcines; normalmente al acabar su ejecución, devuelven un valor utilizando "return".
Estructura: function+"nombreFuncion"(parámetro) {
    return ........;
}
*/
function saludar(nombre) {
  return `¡Hola ${nombre}!`
  // return "Hola " + nombre + "!!"; ta,bien se puede poner así
}
saludar("Carlos");
saludar("María");
saludar("Fran");

console.log(saludar("Carlos"));

// Parametros por defecto: ES6+. (tambien se podria aplicar or (||))
function saludo(tipo = "Hola", nombre = "Carlos") {
  return `${tipo}, ${nombre}!`
}

saludo();
saludo("Adios");
saludo("Hasta luego", "Pepe");
console.log(saludo("Hasta luego", "Pepe"));
console.log(saludo("Adios"));
console.log(saludo());

//Funciones como Objetos:

const cordial = function (nombre) {
  return "Hola " + nombre;
};
console.log(cordial("Carlos"));

// Funciones como Clases: (el nombre que le pongamos a la clase empieza por Mayúscula)
class Inventario {
  constructor(nombre) {
    this.nombre = nombre;
    this.articulos = [];
  }
  add(nombre, cantidad) {
    this.articulos[nombre] = cantidad;
  }
  borrar(nombre) {
    delete this.articulos[nombre];
  }
  cantidad(nombre) {
    return this.articulos[nombre];
  }
  getNombre() {
    return this.nombre;
  }
}

const libros = new Inventario("libros");
libros.add("React.js", 3);
libros.add("JS", 10);
libros.cantidad("JS");
libros.borrar("React.js")
console.log(libros.cantidad("JS"));

class Vehiculo {
  constructor(tipo, nombre, ruedas) {
    this.tipo = tipo;
    this.nombre = nombre;
    this.ruedas = ruedas;
  }
  getRuedas() {
    return this.ruedas;
  }
  arrancar() {
    console.log(`Arrancando el ${this.nombre}`);
  }
  aparacar() {
    console.log(`Aparcanado el ${this.nombre}`);
  }
}
// creamos una Clase Coche que hereda class Vehiculo
class Coche extends Vehiculo {
  constructor(nombre) {
    super("coche", nombre, 4);
  }
}
let fordFocus = new Coche("Ford Focus");
fordFocus.getRuedas();
fordFocus.arrancar();
fordFocus.aparacar();
console.log(fordFocus.getRuedas());
console.log(fordFocus.arrancar());

class Ordenador {
  constructor(id, marca, procesador, ram, ssd) {
    this.id = id;
    this.marca = marca;
    this.procesador = procesador;
    this.ram = ram;
    this.ssd = ssd;
  }
  iniciar() {
    console.log("El Ordenador se está iniciando...")
  }
  mostrarCaracteristicas() {
    let caracteristicas = `
    Procesador: ${this.procesador}
    RAM: ${this.ram}
    iSD: ${this.ssd}
    `;
    return caracteristicas;

  }
}
let pcGamer = new Ordenador(1001, "MS1", "Intel Core 7", 32, 700);
console.log(pcGamer);

console.log();

pcGamer.iniciar();

console.log();

console.log(pcGamer.mostrarCaracteristicas());