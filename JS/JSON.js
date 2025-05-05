const JSON_Cadena = {
    "cadena": "jon",
    "numero": 35,
    "booleano": true,
    "arreglo": ["correr", "programar", "cocinar"],
    "objeto": {
        "twitter": "@mweihmuller",
        "email": "mweihmuller@lasegunda.com"
    },
    "nulo": null 
}
/*
 JSON.parse(texto) toma un string que representa datos en formato JSON (JavaScript Object Notation) 
 y lo convierte en un valor real de JavaScript: puede ser un objeto, 
 un array, un número, un booleano o un string.
*/

console.log(JSON)
console.log(JSON.parse("{}"))
console.log(JSON.parse("[1,2,3]"))
console.log(JSON.parse("true"))
console.log(JSON.parse("false"))
console.log(JSON.parse("19"))
console.log(JSON.parse("null"))
/* console.log(JSON.parse("Hola Mundo")) */
/* Estp da error porque no es tipo de datos aceptado 
 *  un texto debe estar entre comillas dobles dentro del string
*/
console.log(JSON.parse('"Hola Mundo"'))

/* 
   JSON.stringify(valor) convierte un valor de JavaScript (objeto, array, string, número, etc.) en un texto JSON.
   Es lo contrario de JSON.parse.
*/
console.log(JSON.stringify("{}"))
console.log(JSON.stringify([1,2,3]))
console.log(JSON.stringify(true))
console.log(JSON.stringify(false))
console.log(JSON.stringify(19))
console.log(JSON.stringify(null))
console.log(JSON.stringify("Hola Mundo"))
console.log(JSON.stringify(JSON_Cadena))
