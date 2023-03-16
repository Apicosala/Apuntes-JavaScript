// ### Operadores Aritméticos ###
let x = 4;
let y = 6;
console.log(x + y)
console.log(x - y)
console.log(x / y)
console.log(x * y)

let A = 1;
let B = ++A; // incremeta el valor de A y que B tenga tambien ese valor A=2, B=2. Pre-incremneto primero se ahce el incremento al estar ++ delante de A y luego se hace igualacion
let C = A++; // C=2, A=3 En este caso primero se iguala C a B++ y luego se hace el incremento, al estar ++ despues de la variable
let a = A-- //a=3 (es el valor actual de A) y A pasaria a valer A=2
let b = --A // A pasaría de su valor actual 2 a A=1 y b=1
let suma = x + y;
console.log(suma)
let resta = 18 - 9;
let restaXY = x - y;

let potencia = 3 ** 3; // sería 3 elevado a 3.
let cuadradoX = x ** 2;
console.log(cuadradoX)

let frases = "Hola " + "Mundo" + "!!"
console.log(frases)

//   ### Operador typeof ### nos permite saber el tipo devariable con la que operamos
typeof 5;
typeof false;
typeof "Carlos";
typeof undefined;

//   ### Operadores booleanos ### (true or false).
//-Negación: convierte un valor booleano en su opuesto.
!true; // = false
!false; // = true
!!true; // =true
//-Igualdad o Identidad: igualdad (igualdad débil) se prepresenta == e identidad === (con === comprobamos tanto el valor como el tipo (type))
true === true; // true.
true === false; // false.
3 == "3"; // true porque no comprueba el tipo.
3 === "3" // false comprueba el tipo y distingue entre unmber y string.
// -Desigualdad estricta !==
true !== true; // false.
true !== false // true.
//-Comparación: >, <, <=, =>.
5 > 3;
5 < 3;
3 >= 3;
2 <= 1;
"a" < "b";
