/* Buscar atributos en el DOM con .getAttribute() y .setAttribute() */
console.log("Hola desde atributosDataAtributes.js");
console.log(document.documentElement.lang) 
console.log(document.documentElement.getAttribute("lang"))  
console.log(document.querySelector(".link-dom").href)  // Devuelve la URL completa del enlace
console.log(document.querySelector(".link-dom").getAttribute("href")) // Devuelve el valor literal del atributo href en el HTML
/*
La diferencia principal radica en cómo interpretan las rutas relativas:
   .href resuelve la ruta relativa a una URL absoluta.
   .getAttribute("href") devuelve el valor literal del atributo href en el HTML.
*/

/* Asignar valores a los atributos */
document.documentElement.lang = "en" // Cambia el idioma del documento a inglés
console.log(document.documentElement.lang)      
document.documentElement.setAttribute("lang", "es-MX") // Cambia el idioma del documento a español
console.log(document.documentElement.getAttribute("lang")) 

/* 
   Asignar los valores por medio de una variablel o constante.
   Como regla a estas variables se la nombre como $nombreElementoDOM
*/
const $linkDOM = document.querySelector(".link-dom") // Selecciona el elemento con la clase "link-dom"
console.log($linkDOM) // Muestra el elemento seleccionado
console.log($linkDOM.getAttribute("href")) // Muestra el valor del atributo href del elemento seleccionado
$linkDOM.setAttribute("target", "_blank") // Cambia el atributo target a "_blank" para abrir el enlace en una nueva pestaña
$linkDOM.setAttribute("href", "https://www.google.com.ar")    // Cambia el atributo href a "www.google.com.ar"
$linkDOM.setAttribute("rel", "noopener") 
 // Cambia el atributo rel a "noopener" para mejorar la seguridad al abrir enlaces en nuevas pestañas

 /**
  *   Validar si un atributo existe o no en el DOM
  *   Para validar si un atributo existe o no en el DOM, se puede usar el método hasAttribute() de la siguiente manera: 
  *   const $linkDOM = document.querySelector(".link-dom")
  *  if ($linkDOM.hasAttribute("rel")) {
  */  
console.log($linkDOM.hasAttribute("rel")) // Devuelve true si el atributo "rel" existe, de lo contrario devuelve false
$linkDOM.removeAttribute("rel") // Elimina el atributo "rel" del elemento seleccionado
console.log($linkDOM.hasAttribute("rel")) // Devuelve false si el atributo "rel" no existe      

// Data Attributes
console.log($linkDOM.getAttribute("data-description")) // Devuelve el valor del atributo data-description del elemento seleccionado
console.log($linkDOM.dataset) // Devuelve un objeto con todos los data attributes del elemento seleccionado
console.log($linkDOM.dataset.description) // Devuelve el valor del atributo data-description del elemento seleccionado  
/* El nombre del atrubuto es sin la palabra data- */
$linkDOM.setAttribute("data-description", "Nuevo Modelo de objeto del DOM") // Cambia el atributo data-description a "Modelo de objeto del DOM"
console.log($linkDOM.getAttribute("data-description")) // Devuelve el valor del atributo data-description del elemento seleccionado
$linkDOM.dataset.description = "Muy Nuevo modelo de objeto del DOM" // Cambia el atributo data-description a "Nuevo modelo de objeto del DOM"
console.log($linkDOM.getAttribute("data-description")) // Devuelve el valor del atributo data-description del elemento seleccionado
/* Remover data attributes */
console.log($linkDOM.hasAttribute("data-description")) 
$linkDOM.removeAttribute("data-description") // Elimina el atributo data-description del elemento seleccionado
console.log($linkDOM.hasAttribute("data-description")) 