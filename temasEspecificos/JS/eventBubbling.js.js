console.log("Hola desde Event Bubbing")
/* 
     URL: https://www.youtube.com/watch?v=WtTLkE1SQFg&t=378s --- 😎 Leyendo HTML con SELECTORES desde Javascript 😄 DOM
     URL: https://www.youtube.com/watch?v=03eid8Lc8V8&t=129s&ab_channel=Desarrollo%C3%9Atil --- CÓMO manejar EVENTOS en Javascript 🤔 Event Listeners 😄 DOM
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

let clases = $section.classList;
console.log("Clases (listado)" , clases )  // Muestra las clases de un componente


$section.className +="nuevaClase" // Agregarle algo al titulo de la clase
console.log("Clases (Agregar texto)" , clases )

$section.className ="nuevaClase" // Cambiarle el nombre
console.log("Clases (cambio nombre)" , clases )

$section.classList.add("border_grey") //agregar una clase
console.log("Clases (agregar clase) " , clases );

console.log("Clases usando for...of:");
let indice = 0
for (let clase of clases) {  // Recorrer
  indice = indice + 1;
  console.log(` Clase:" ,${indice}, ${clase}`);
  
}

$section.classList.remove("nuevaClase") //Eliminar una clase
console.log("Clases (eliminar clase) " , clases );

$section.classList.toggle("nuevaClase") //Interruptor --> si no lo tiene lo agrega si lo tiene lo saca
console.log("Clases (togle primera vez) " , clases );

$section.classList.toggle("nuevaClase") //Interruptor --> si no lo tiene lo agrega si lo tiene lo saca
console.log("Clases (togle segunda vez) " , clases );

/**
 *  Manejador de Eventos
 */

const clickTitulo = (e) => {
     console.log("El usuario hizo click en el titulo princ")
     console.log("Objeto Event **** ", e)
     console.log(e)
}

function clickTitulo3() {
     console.log("El usuario hizo click en el Sub-titulo")
}

function clickTitulo4() {
     console.log("El usuario hizo click en el mensaje Confirmacion")
}

const $titulo3 = document.getElementById("ingreseDatos")
console.log("Titulo 3", $titulo3)
$titulo3.onclick = clickTitulo3 /* ojo sin parentesis */

const $titulo4 = document.getElementById("cofirmardatos")
console.log("Titulo 4", $titulo4)
$titulo4.addEventListener("click", clickTitulo4); /* ojo sin parentesis */

$titulo4.removeEventListener("click", clickTitulo4); // Remover el event Listener

document.addEventListener("DOMContentLoaded", () => {
      console.log("El documento se ha cargado") ;
});

const enviarFormulario = (event) => {     
     event.preventDefault() /* Se controla el comportamiento por defecto */
     console.log("**** evento **** ")
     console.log(event)     
     const {name, email, password} = event.target
     /* Asignacion Desestruturada */
     console.log( "Nombre: ", name.value, 
                  "Email: ", email.value, 
                  "Password: ", password.value )
     if (name.value.length === 0 ) alert("El nombre no es valido")
     /* Accedo a los que tiene cargarlo los imput */
} 

const $form = document.getElementById("formulario")
$form.addEventListener("submit", enviarFormulario)

const $tituloForm = document.querySelector("#tituloForm"),
      $cabecera = document.querySelector("#cabecera")

$tituloForm.addEventListener("click", (event) => {
     /*console.log("Propiedad Bubble: ", event.bubbles, event.cancelBubble) */
     /*  event.cancelBubble ---> nos indica si el buble esta cancelado 
         event.bubbles     ----> nos indica si esta en modo buble
     */
     /*event.stopPropagation(); /* Para la propagracion  */
     /*console.log("Propiedad Bubble: ", event.bubbles, event.cancelBubble) */
     console.log("CLICK EN EL tituloForm")
})        

$cabecera.addEventListener("click", () => {
     console.log("CLICK EN EL cabecera")
},{
     capture: true 
     /* Se evalua de arriba hacia abajo */

})      



