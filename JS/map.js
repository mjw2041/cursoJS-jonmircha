/**
 *   Defincion: Map es una colección de pares clave-valor, similar a un objeto {}, pero con algunas ventajas muy útiles.
 *   Características principales de un Map:
 *   Las claves pueden ser de cualquier tipo: objetos, funciones, números, etc. (en un objeto {}, las claves solo pueden ser strings o symbols).
 *   Mantiene el orden de inserción.
 *   Tiene métodos útiles como .set(), .get(), .has(), y .delete().   
 * 
 */

let mapa = new Map;

mapa.set("nombre", "Maxi") /* Agregar elemento */
mapa.set("apellido", "Weihmuller")
mapa.set("edad", 35)

console.log(mapa)
console.log(mapa.size)

console.log(mapa.has("nombre"))  /* true si existe la llave */
console.log(mapa.has("correo"))
console.log(mapa.get("edad")) /* devuelve el valor de la llave */
mapa.set("edad", 52 ) /* Sobrescribir la llave */
console.log(mapa.get("edad")) /* devuelve el valor de la llave */

mapa.delete("apellido")
console.log(mapa)
