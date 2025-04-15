/**
 *  Definicion 
 *   Un Symbol en JavaScript es un tipo de dato primitivo introducido en ES6 (ECMAScript 2015),
 *   que se utiliza para crear identificadores únicos.
 *   Symbol es un tipo de dato cuyos valores son únicos e inmutables. 
 *   Se suele usar como claves de propiedades en objetos para evitar colisiones con otras propiedades.
 */

let id = Symbol("id")
let id2 = Symbol("id2")

console.log(id,id2)
console.log(typeof id, typeof id2)
 console.log(id===id2)

 const NOMBRE = Symbol("nombre")
 const SALUDAR = Symbol("saludar")

 const persona = {
    [NOMBRE]: "Maxi",  /** Propiedad SYMBOL */
    [SALUDAR]: function () {   /** Propiedad SYMBOL */
        console.log("Hola")          
    } 
 }

 console.log(persona)

 persona.NOMBRE = "Maximiliano Weihmuller"
 console.log(persona)

 /**
  * 
  *  cuando lo recorro no aparece el Symbol
  */
 
 console.log('****************')
 for (let clave in persona) {    
    console.log(clave); // Ana, 30, Madrid
    console.log(persona[clave]); // Ana, 30, Madrid
  }

  /**
   *   Para ver los Symbol de un objeto
   * 
   */
  console.log(Object.getOwnPropertySymbols(persona))

  console.log('***IMPRIMIR LA PROPIEDAD SYMBOL*************')
  console.log(persona[NOMBRE])

  persona[SALUDAR]()

  
