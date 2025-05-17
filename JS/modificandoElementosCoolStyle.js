console.log("Hola desde modificandoElementoCollStyle")

const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure")

  $letContentCard = `
    <img src="https://picsum.photos/seed/picsum/100/100" alt="Nueva">
    <figcaption><figcaption>`
    
    $newCard.classList.add("card") 

    $newCard.insertAdjacentHTML("afterbegin", $letContentCard) // Agregar contenido HTML a la tarjeta 
    $newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any") // Agregar texto a la tarjeta      

    // $cards.insertAdjacentElement("beforebegin", $newCard) // Insertar afuera de la lista arriba
    //$cards.insertAdjacentElement("afterbegin", $newCard) // Inserta una tarjeta antes de la primer tarjeta ( primer Hijo )
    //$cards.insertAdjacentElement("beforeend", $newCard) // Inserta una tarjeta al final de la lista
    //$cards.insertAdjacentElement("afterend", $newCard) // Insertar afuera de la lista abajo

    // $cards.prepend($newCard) // Agregar la tarjeta al principio de la lista
    // $cards.prepend($newCard) // Agregar la tarjeta al principio de la lista
    // $cards.append($newCard) // Agregar la tarjeta al final de la lista
     $cards.before($newCard)  // Agregar la tarjeta al principio afuera de la lista
    // $cards.after($newCard) // Agregar la tarjeta al final afuera de la lista

