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
console.log("Recorriendo set")
for (item of set) {
    console.log(item)
}
console.log("Recorriendo set2")

set2.forEach(item=>console.log(item))

/**
 *  Para acceder a un elemento de set. primero lo tengo que convertir a Array
 */

var arrayFromSet = Array.from(set)
console.log(arrayFromSet)
console.log(arrayFromSet[1])

set.delete("HOLA")
console.log(set)

console.log(set.has(1)) /* True si existe el valor entreparentesis */
console.log(set.has(0))

set.clear(set2) /* Limpiarlo */
console.log(set2)
