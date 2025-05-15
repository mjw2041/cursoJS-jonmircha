console.log("Hola desde modificandoElementoOldStyle")

const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure")
  $cloneCard = $cards.cloneNode(true) // Si no le pongo true solo clona el esqueleto vacio 

$newCard.innerHTML = `
    <img src="https://picsum.photos/seed/picsum/100/100" alt="Any">
    <figcaption>Any<figcaption>`
$newCard.classList.add("card") /* Agrega la clase card */
// $cards.replaceChild( $newCard, $cards.children[2]) /* Replazo la tarjeta 3  ( posision 2) por la nueva tarjeta */
// $cards.insertBefore($newCard, $cards.children[1]) // Inserta una tarjeta antes de la tarjeta 2 (posicion 1)
$cards.insertBefore($newCard, $cards.firstElementChild) // Inserta una tarjeta antes de la primer tarjeta
console.log($cards)
$cards.removeChild($cards.lastElementChild) // eliminar la ultima carta*
document.body.appendChild($cloneCard)