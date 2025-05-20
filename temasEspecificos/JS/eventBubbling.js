console.log("Hola desde Event Bubbing")
/* 
     URL: https://www.youtube.com/watch?v=WtTLkE1SQFg&t=378s --- 😎 Leyendo HTML con SELECTORES desde Javascript 😄 DOM
     URL: https://www.youtube.com/watch?v=03eid8Lc8V8&t=102s --- CÓMO manejar EVENTOS en Javascript 🤔 Event Listeners 😄 DOM
     URL: https://www.youtube.com/watch?v=xlci1S08Cww&list=LL
*/
console.log(document)
console.log(document.getElementById("cabecera")) // Selector por Id
console.log(document.getElementsByClassName("border-grey")) // Selector por clase  -- Devuelve un HTTPCOLECTION
console.log(document.getElementsByTagName("nav")) // Selector por TAG  -- Devuelve un HTTPCOLECTION
console.log(document.getElementsByName("nombreCabecera")) // Selector por Nombre  -- Devuelve un NodeList
/* Por valores CSS */
console.log("Por valores CSS") 
console.log(document.querySelectorAll("li")) // Selector por TAG  -- Devuelve un Node List
console.log(document.querySelectorAll(".border-grey")) // Selector por Clase  -- Devuelve un Node List
console.log(document.querySelectorAll("#cabecera")) // Selector por ID  -- Devuelve un Node List
/*console.log(document.querySelectorAll(["name =nombreCabecera"])) // Selector por name  -- Devuelve un Node List*/
console.log(document.querySelectorAll('[name="nombreCabecera"]')); // Selector por atributo name

const $elemento = document.getElementById("cabecera")
console.log($elemento.children) //Devuelve los elementos hijos que contiene ese nodo HTTPColection
console.log($elemento.parentElement) // Devuelve el Elemento Padre

const lista1 = document.getElementsByClassName("border-grey")
const lista2 = document.querySelectorAll(".border-grey")

console.log(lista1)
console.log(lista2)

/* 
   NodeList no es dinamico, si modifico los valores tengo que volver a recargar
   HTTPColection si es dinamico, cambia a medida que voy modificando
*/

/* Para covertir un httpColection a aray*/
console.log("Convertir a ARRAY")
const lista1Array = [...lista1]
lista1Array.forEach((el)=>{
     console.log(el)
} )

/* Creacion de Elementos */
const titulo2 = document.createElement("h2") // Crear un elemento
const textoTitulo2 = document.createTextNode("Nuevo texto Creado para el Video"); // Crear Texto
const comentario = document.createComment("ComentarioRamdon")

/*
  clobar node
*/

const articulo = document.querySelector('article')
const articuloClone = articulo.cloneNode(true) 
const estaEnPagina = articuloClone.isConnected; // true si esta en el html, caso contrario false


/* insertar en el html */
const $section = document.getElementById("section")
/* $section.appendChild(articuloClone)*/
// $section.insertAdjacentElement('beforebegin', articuloClone)

/* Insertar el nodo */
// $section.append(titulo2)


/* Insertar Texto sin etiqueta */
//$section.insertAdjacentText('beforebegin', " ***** Texto insertado Directamente ****")

/* Insertar un texto HTML */
//$section.insertAdjacentHTML('beforebegin', "<H3> Texto HTML insertado Directamente </H3>")

// $section.remove() // Eliminar una seccion 

/* Modificar el texto */
// $section.innerHTML = '<h3> Nuevo Titulo </h3>'

$textoSector = $section.outerHTML
console.log("Texto Seccion " , $textoSector) // Saca a una variable lo que hay en un nodo

// Obtener atributos
let atributos = $elemento.getAttribute('id')
console.log("Atributos " , atributos ) // Saca a una variable lo que hay en un nodo

$elemento.setAttribute('id', 'cabeceraNueva')
atributos = $elemento.getAttribute('id')
console.log("Despues de Cambio Atributos " , atributos ) // Saca a una variable lo que hay en un nodo

let clases = $section.classList();
console.log("Clases " , clases ) 
