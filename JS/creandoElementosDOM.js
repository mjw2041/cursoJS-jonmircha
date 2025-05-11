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


