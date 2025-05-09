/**
 *   TEMA: STRING
 *   
 */
/* Cadena de Texto Sting
   new String  Constructor

   !cadena --> determina si la cadena esta vacia
   
   Funciones Escenciales 
   1-.  length: Longitud de la cadena.
   2-.  toLowerCase() / toUpperCase(): Convierte a minúsculas o mayúsculas.
   3-.  charAt() / charCodeAt(): Obtiene un carácter o su código Unicode en una posición específica.
   4-.  indexOf() / lastIndexOf(): Encuentra la posición de una subcadena.
        devuelve -1 si no lo encuentra
   5-.  includes() / startsWith() / endsWith(): Verifica si una subcadena está en la cadena o si la cadena empieza/termina con una subcadena.
   6-.  slice() / substring() / substr(): Extrae partes de la cadena.
   7-.  trim(): Elimina espacios al principio y al final.
   8-.  replace(): Reemplaza una subcadena por otra.
   9-.  split(): Divide la cadena en un arreglo de subcadenas.
   10-. concat(): Une cadenas.
   11-. repeat(): Repite la cadena un número dado de veces.
   12-. padStart() / padEnd(): Agrega caracteres al principio o al final para llenar la longitud.
   13-. normalize(): Normaliza la cadena para manejar caracteres especiales.
   14-. join(''): Vuelve a unir un array de caracteres en un solo string.
   15-. replaceAll(searchValue, newValue): Reemplaza todas las ocurrencias de una subcadena en la cadena original con un nuevo valor.
   16-. El Remplazo del IN ( ORACLE)
       (!['c', 'f'].includes(<nombre de la variable>.toLowerCase()))
            
*/ 
let nombre = "Maxi"
let apellido = 'Weihmûller'
let saludo = new String("Hola Mundo")  // Constructor 
let lorem = 'lorem esta lorem esta esta lorem'

console.log(nombre, apellido, saludo)
console.log(nombre.length, apellido.length, saludo.length, 
            nombre.toLocaleUpperCase(),
            apellido.toLocaleLowerCase(), 
            lorem.includes("lorem"),
            lorem.split(" ")
)

// Concatenacion (6)
let nombre_2 = "Maximiliano"
let apellido_2 = "Weihmuller"

let saludo_2 = "Hola mi nombre es " + nombre_2 + " " + apellido_2 + "."
console.log(saludo_2)

// Interpolacion o Template
let saludo_3 = `Hola min nombre es ${nombre_2} ${apellido_2}.`
console.log(saludo_3)

let ul = '<ul> <li> Primavera </li> <li>Verano</li> <li> Otoño </li> <li> Invierno </li> </ul>'

console.log(ul)

let ul_2 = `
  <ul> 
     <li> Primavera </li> 
     <li>Verano</li> 
     <li> Otoño </li> 
     <li> Invierno </li>
  </ul>`

console.log(ul_2)            

ul_3 = '<ul> '
ul_3 += '<li> Primavera </li> '    
ul_3 += '<li>Verano</li>'    
ul_3 += '<li> Otoño </li>'    
ul_3 += '<li> Invierno </li>'    
ul_3 += '</ul>`'    
console.log(ul_3)
