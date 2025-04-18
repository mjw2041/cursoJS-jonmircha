/**
 *   Defincion: Map es una colección de pares clave-valor, similar a un objeto {}, pero con algunas ventajas muy útiles.
 *   Características principales de un Map:
 *   Las claves pueden ser de cualquier tipo: objetos, funciones, números, etc. (en un objeto {}, las claves solo pueden ser strings o symbols).
 *   Mantiene el orden de inserción.
 *   Tiene métodos útiles como .set(), .get(), .has(), y .delete().   
 * 
 */

const mapa = new Map;

mapa.set("nombre", "Maxi") /* Agregar elemento */
mapa.set("apellido", "Weihmuller")
mapa.set("edad", 35)

console.log(mapa)
console.log(mapa.size)

console.log(mapa.has("nombre"))  /* true si existe la llave */
console.log(mapa.has("correo"))
console.log(mapa.get("edad")) /* devuelve el valor de la llave */
mapa.set("edad", 52 ) /* Sobrescribir o la llave  o agregar una nueva llave*/
console.log(mapa.get("edad")) /* devuelve el valor de la llave */

mapa.delete("apellido")
console.log(mapa)

mapa.set(19, "diecinueve")
mapa.set(true, "Verdadero")
mapa.set({}, {})
mapa.set(null, "Nulo")

for ([llave, valor] of mapa) {
      console.log(` llave ${llave} ${valor}` );    
}


const mapa2 = new Map ([["nombre","kEnAi"], 
                       ["edad", 7],
                       ["animal", "Perro"],
                       [null, "Nulo"]  
])

console.log(mapa2)

// crear una array con las llaves //
const llavesMapa2 = [...mapa2.keys()]
// crear una array con las llaves //
const valoresMapa2 = [...mapa2.values()]

console.log("llaves", llavesMapa2)
console.log("valores", valoresMapa2 )