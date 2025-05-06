console.log("Hola desde Clases CSS") 

const $card = document.querySelector(".card")  // Devuelve la primera clase que se llama card
console.log($card)

console.log($card.className) // Devuelve el nombre de la clases
console.log($card.classList) // Devuelve un token list con  las clases 
console.log($card.classList.contains("rotate-45")) // Devuelve true o false si contiene la clase ()
$card.classList.add("rotate-45") // Agregar una clase
console.log($card.classList) // Devuelve un token list con  los datos de la clase
console.log($card.classList.contains("rotate-45")) 
$card.classList.remove("rotate-45") // Eliminar la clase
console.log($card.classList.contains("rotate-45")) 
$card.classList.toggle("rotate-45") // Si tiene la clase la Eliminar, caso contrario la agrega
console.log($card.classList)
$card.classList.replace("rotate-45", "rotate-135") //  Remplaza una clase por otra
$card.classList.add("opacity-80", "sepia") // Agregar varias clases a la vez    
$card.classList.remove ("opacity-80", "sepia") // Agregar varias clases a la vez    
$card.classList.toggle ("opacity-80", "sepia") // Intercambia varias clases a la vez


