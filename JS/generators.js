console.log("generators");
/* un gnerador es una funcion que puede ser pausada y reanudada en cualquier 
   momento, se utiliza para crear iteradores de manera sencilla.*/
function* interable() {
      // el yield es el que permite pausar la funcion y devolver un valor.
      // el yield se puede usar como un return, pero no es lo mismo, ya que el yield      
      // permite pausar la funcion y reanudarla en el siguiente yield.
      yield "Hola 1";
      console.log("Instruccion despues del yield 1");
      yield "Hola 2";
      console.log("Instruccion despues del yield 2");
      yield "Hola 3";
      console.log("Instruccion despues del yield 3");      
      yield "Hola 4";
}

let iterador = interable(); // se crea el iterador, pero no se ejecuta la funcion|
console.log(iterador.next()); // se ejecuta la funcion hasta el primer yield,

for (let y of iterador) {
      console.log(y); // se ejecuta la funcion hasta el siguiente yield.
}

/**
 *  guardar los yield en un array y luego recorrerlo con un forEach.
 */
const array = [...interable()]; // se guarda el iterador en un array, se ejecuta la funcion hasta el final.
console.log(array); // se imprime el array con los valores de los yield.
array.forEach((element) => {
      console.log(element); // se recorre el array y se imprime cada elemento.
});
