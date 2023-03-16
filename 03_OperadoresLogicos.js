//   ### Operadores AND ###.
/*
Se representa con "&&".
Es un operador lógico que devuelve true siempre que todos los
valores comprobados sean true, si no de ellos es false devuelve 
false
*/
true && true; // true.
true && false; // false.
false && true; // false.
false && false; // false.

/*
es muy utilizado para devolver valores sin que estos
sean modificados, para que devuelva "true" o el último valor,
todos los valores deben ser "true"
*/
0 && true; // devolveria 0, pq el 0 se considera un valor false.
1 && "Hola"; // devolveria "Hola", pq todo número distinto a 0 se considera valor true.
true && true && false; // devolveria false.

//   ### Operador OR ###
/*
Se representa con "||".
Es un opredor lógico que funciona a la inversa de AND (&&).
Devuelve false si todos los valores comparados son false,
si hay algun valor true devolverá true.
*/
true || true; // true.
true || false; // true.
false || true; // true.
false || false; // false.

/*
es muy utilizado para asignar valores por defecto a nuestras funciones.
La lógica es: si el primer valor es true,
devuelve ese valor.
*/
const port = process.env.PORT || 5000;
/*process.env.PORT no exite, no está definido,
 la lógiva de OR dice que si el primer valor es true asignamos el primer valor y si es false asignamos el segundo valor.
 al no existir el primer valor asignamos 5000 const port
 */

