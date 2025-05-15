console.log("Hola Desde Template HTML")

const $cards = document.querySelector(".cards"),
$template = document.getElementById("template-card").content,
$fragment = document.createDocumentFragment(),
cardContent = [
   {
    title: "Tecnologia",
    img: "https://picsum.photos/seed/picsum/100/100"
   },

   {
    title: "Animales",
    img: "https://picsum.photos/seed/picsum/100/100"
   },

   {
    title: "Arquitectura",
    img: "https://picsum.photos/seed/picsum/100/100"
   },

   {
    title: "Gente",
    img: "https://picsum.photos/seed/picsum/100/100"
   },

   {
    title: "Naturaleza",
    img: "https://picsum.photos/seed/picsum/100/100"
   }
]
console.log($template)
cardContent.forEach(el =>{ 
    $template.querySelector("img").setAttribute("src", el.img) 
    $template.querySelector("img").setAttribute("alt", el.title)
    $template.querySelector("figCaption").textContent = el.title

    let $clone = document.importNode($template, true /* Clonar el template, caso contrario se puede usar solo una vez */)
    $fragment.appendChild($clone)
    console.log(el.title)
})

$cards.appendChild($fragment)