/**
   *   TEMA: ARRAY ( ARREGLOS)
   *   un arreglo pueda tener adentro o otro arreglo 
   *   puede ser de distintos tipo
   *   la primera posicion es la 0
   *   <nombreArreglo>[nroPosicion] ---> imprime el valor de nroPosicion
   *   Array es el constructor 
   *   .push ---> agregar un elemento
   *   .pop  ---> sacar elementos
   *   .map(Number) ---> convierte cada elemento del array en un número.;
   *   array.splice(indice, 0, elemento); --> agregar elemento en una determinada posicion        
   *           indice: la posición en la que deseas insertar el elemento.
   *           0: el número de elementos a eliminar (en este caso, 0 porque solo queremos 
   *           agregar sin eliminar nada):  Math.max
   *   .slice(1,1) ---> Extrae los elemento del un array desde la posicion hasta el segundo nro sin 
   *                    incluir
   *   .filter (condicion) => crea un nuevo arreglo con aquellos elemento que cumplan con la condicion 
   * 
   *   .include ( valores) ---> Devuelve True si el array tiene algun elamento igual a los valores
   * 
   *    splice(posicion, cantidad); ---> borra un elemento de una determinada posicion,  y cantidad
   *                                     siguientes
   * 
   *    reverse() --> Invierte el array de caracteres
   * 
   *    forEach(function(item, id)  ---recorre un array el primer 
   *          el primer parametro es el item 
   *          el segundo parametro es el identificador
   * 
   *    
   *    .Math.max   ---> el nro mas alto de un array
   *    sort ---> ordena un arreglo
   */  
      

const arregloVacio = []
console.log(arregloVacio)

const arreglo = [1,2,"Maxi", true, [1,2,3]]
console.log(arreglo)
console.log(arreglo.length, arregloVacio.length)
console.log(arreglo[1])
console.log(arreglo[4][2])


const arreglo_1 = Array.of("X","Y","Z",1,2,3)
console.log(arreglo_1) 

const arreglo_2 = Array.of(10).fill(false)
console.log(arreglo_2)

const arreglo_3 = new Array();
console.log(arreglo_3)

const arreglo_4 = new Array(1,2,3,4,false,"Viva", [1,2,3]);
console.log(arreglo_4)

const colores_arreglo = ["azul", "verde", "rojo"]
colores_arreglo.push("amarillo")
console.log(colores_arreglo)

colores_arreglo.pop
console.log(colores_arreglo)

colores_arreglo.splice(1, 0, "violeta");

colores_arreglo.forEach(function(item, id){
  console.log(`<li id=${id}> ${item}`)
} )

console.log(" **************** ")

const subArreglo = colores_arreglo.slice(1,1)

console.log(subArreglo)   

colores_arreglo.splice(1, 1)

console.log(colores_arreglo)

/* Ejemplo filter 
*/
let numbers =  [1,2,3,4,5,6,7]
let evenNums = numbers.filter(isEven)
let oddNums = numbers.filter(isOdd)

function isEven(element) {
    return element % 2 === 0;
}

function isOdd(element) {
    return element % 2 !== 0;
}

console.log('Arreglos ' + evenNums)
console.log('Arreglos ' + oddNums)

/*
   EJEMPLO INCLUDE 
*/

let mensaje = "Hol Mnd"
let vocales = ["a", "e", "i", "o", "u"]
let vectormensaje = mensaje.split("")
console.log(vectormensaje)
let hayVocales = vectormensaje.some(letras => vocales.includes(letras)) 
console.log(`En ${mensaje} hay vocales ??? ---> ${hayVocales}`)

/* 
  EJEMPLO MAP
*/
// Array original
const numeros = [1, 2, 3, 4, 5];

// Usamos .map para crear un nuevo array donde multiplicamos cada número por 2
const numerosMultiplicados = numeros.map(function(numero) {
  return numero * 2;
});

console.log(numerosMultiplicados);  // [2, 4, 6, 8, 10]

const numerosMultiplicados_2 = numeros.map(numero => numero * 2);
console.log(numerosMultiplicados_2);  // [2, 4, 6, 8, 10]

/*
    Ejemplo Math.max ( el nro mas alto de un array )
*/

const numeros_maximo = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// Usamos Math.max con el operador de expansión para encontrar el número más alto
const maximo = Math.max(...numeros_maximo );

console.log(maximo);  // 9

/*
   Ejemplo de sort ( ordenamiento)
*/

const numbers_1 = [10, 2, 33, 4, 15];
numbers_1.sort((a, b) => a - b);  // Ordena de menor a mayor
console.log(numbers_1);  // [2, 4, 10, 15, 33]
