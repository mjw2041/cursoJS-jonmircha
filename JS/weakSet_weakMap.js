
/*const ws = new WeakSet([1,2,3,4,5,true,false,"hello",null,undefined,{}]);*/
/* No se puede usar un WeakSet con valores primitivos como números, cadenas o booleanos.
  * Debe ser un objeto, función o WeakMap. */     

const ws = new WeakSet()
let valor1 = {"valor1": 1}
let valor2 = {"valor2": 2}
let valor3 = {"valor3": 3}
let valor4 = {"valor3": 4}

ws.add(valor1)  /* Solo accepta objetos, no primitivos */
ws.add(valor2) 
ws.add(valor3)
console.log(ws)

console.log(ws.has(valor1)) /* true si existe el objeto */
console.log(ws.has(valor4)) /* true si existe el objeto */

ws.delete(valor2) /* Eliminar el objeto */
console.log(ws)

const wm = new WeakMap()
let llave1 = {}
let llave2 = {}
let llave3 = {}
let llave4 = {}


wm.set(llave1, "valor1")
wm.set(llave4,4)
console.log(wm)

console.log(wm.has(llave1)) /* true si existe el objeto */
console.log(wm.has(llave3)) /* true si existe el objeto */

console.log(wm.get(llave1)) /* devuelve el valor de la llave */  
console.log(wm.get(llave4)) /* devuelve el valor de la llave */  
console.log(wm.get(llave3)) /* devuelve el valor de la llave */  

wm.set(llave3,"llave3")
console.log(wm.get(llave3)) /* devuelve el valor de la llave */  
wm.delete(llave3) /* Eliminar el objeto */
console.log(wm.get(llave3)) /* devuelve el valor de la llave */  


