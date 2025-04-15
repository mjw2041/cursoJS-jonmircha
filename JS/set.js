/**
 *   Un Set en JavaScript es una colección de valores únicos. Fue introducido en ES6 (ECMAScript 2015) 
 *   y se utiliza cuando necesitas almacenar elementos sin duplicados.
 *   Definición técnica:
 *   Set es un objeto que permite almacenar valores únicos de cualquier tipo, 
 *   ya sea primitivo o referencias a objetos.
 *   los objetos siempre son distintos aunque tengan las misma propiedades y vaolres
 */


const set = new Set([1,2,3,3,4,5,{}, {}, true, false, false,"Hola", "Hola", "HOLA"])
console.log(set)
console.log(set.size) /* Tamaño del set */

const set2 = new Set()
set2.add(1)
set2.add(2)
set2.add(2)
set2.add(3)
set2.add(true)
set2.add(false)
set2.add(true)
set2.add({})

console.log(set2)
