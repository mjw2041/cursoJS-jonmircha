console.log("Hola desde el Traversing DOM.js")

const $cards  = document.querySelector(".cards")
console.log($cards)
console.log($cards.parentElement) // Devuelve el elemento padre
console.log($cards.children) // Devuelve todos los elemento
console.log($cards.children[2]) // Devuelve un elemento en  particular
console.log($cards.firstElementChild) // Devuelve el primer Elemento
console.log($cards.lastElementChild) // Devuelve el ultimo elemento
console.log($cards.previousElementSibling) // Devuelve hermano anterior ( de arriba )
console.log($cards.nextElementSibling) // Devuelve hermano siguiente ( de abajo ) 
console.log($cards.closest("body")) // Devuelve la primera etiqueta ancestras "body"
console.log($cards.children[3].closest("section")) // Devuelve la primera etiqueta ancestral "section  del hijo 3  
