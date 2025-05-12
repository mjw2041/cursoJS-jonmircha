console.log("Hola desde Creando Elementos DOM");


const $figure = document.createElement("figure"), // Crear un elemento figura
      $img = document.createElement("img"),
      $figCaption = document.createElement("figcaption"),
      $figCaptionText = document.createTextNode("Animals"), // Crear un Nodo Texto
      $cards = document.querySelector(".cards")

$figure.classList.add("card") // Agrego la clase card

$img.setAttribute("src","https://picsum.photos/seed/picsum/100/100") // cofiguro el src
$img.setAttribute("alt","Animales")  // cofiguro el alt

$figCaption.appendChild($figCaptionText) // La agrego el nodo text

$figure.appendChild($img) // Agregarle el nodo
$figure.appendChild($figCaption) // Agregarle el nodo

$cards.appendChild($figure) // Agregar un nuevo hijo 

console.log($cards)
/* Otra forma de hacerlo*/
 const $figure2 = document.createElement("figure")
$figure2.innerHTML = `
    <img src="https://picsum.photos/seed/picsum/100/100" alt="Animales">
    <figcaption>Animals 2</figcaption>` //agrego el html y nodo figcaption      

$figure2.classList.add("card") // Agrego la clase card 
$cards.appendChild($figure2) // Agregar un nuevo hijo      
console.log($cards)    

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
$ul = document.createElement("ul")
document.write("<h3>Estaciones del Año</h3>")
$ul.innerHTML = "" // Limpiar el contenido
document.body.appendChild($ul) // Agregar un nuevo hijo

estaciones.forEach(el => {
      const $li = document.createElement("li")
      $li.textContent = el // Agregarle el texto
      $ul.appendChild($li) // Agregar un nuevo hijo
})          

/* Otra forma de hacerlocon immerHTML*/

const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"],
$ul2 = document.createElement("ul") 

document.write("<h3>Continentes del Mundo</h3>")
$ul2.innerHTML = "" // Limpiar el contenido  esto es obligatorio   
document.body.appendChild($ul2) // Agregar un nuevo hijo
continentes.forEach(el => {
      $ul2.innerHTML += `<li>${el}</li>` // Agregarle el texto
})

/* Framemtos 
   Esta es la mejor forma
*/
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
$ul3 = document.createElement("ul")
$fragment = document.createDocumentFragment() // Crear un fragmento
document.write("<h3>Meses del Año</h3>")

meses.forEach(el => {
      const $li = document.createElement("li")
      $li.textContent = el
      $fragment.appendChild($li) // Agregar un nuevo hijo al fragmento      
})

$ul3.appendChild($fragment) // Agregar el fragmento al ul
document.body.appendChild($ul3) // Agregar el ul al body
console.log($ul3) // Ver el resultado
