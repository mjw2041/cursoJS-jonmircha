console.log("Hola desde nodosSelectores.js");

console.log(document.getElementsByTagName("li")) /* Devuelve una colección de nodos HTML que coinciden con la etiqueta "li" */
console.log(document.getElementsByClassName("card")) /* Devuelve una colección de nodos HTML que coinciden con la clase "parrafo" */
console.log(document.getElementsByName("nombre")) /* Devuelve una colección de nodos HTML que coinciden con el nombre "nombre" */
console.log(document.getElementById("menu")) /* Devuelve un nodo HTML que coincide con el id "parrafo" */

console.log(document.querySelector("li")) /* Devuelve el primer nodo HTML que coincide con la etiqueta "li" */    
console.log(document.querySelectorAll("li")) /* Devuelve una colección de nodos HTML que coinciden con la etiqueta "li" */      
console.log(document.querySelectorAll(".card")) /* Devuelve una colección de nodos HTML que coinciden con la clase "parrafo" */
console.log(document.querySelectorAll("#menu")) /* Devuelve una colección de nodos HTML que coinciden con el id "parrafo" */
console.log(document.querySelectorAll("a").length) /* Devuelve el número de nodos HTML que coinciden con la etiqueta "a" */

document.querySelectorAll("a").forEach((el) => {
      console.log(el) /* Devuelve el nodo HTML que coincide con la etiqueta "a" */
      console.log(el.getAttribute("href")) /* Devuelve el atributo href del nodo HTML que coincide con la etiqueta "a" */      
})

console.log(document.querySelector(".card")) /* Devuelve el primer nodo HTML que coincide con la clase "parrafo" */
console.log(document.querySelectorAll(".card")) /* Devuelve una colección de nodos HTML que coinciden con la clase "parrafo" */
console.log(document.querySelectorAll(".card")[3]) /* Devuelve el cuarto nodo HTML que coincide con la clase "parrafo" */

console.log(document.querySelectorAll("#menu li")) 
/* Devuelve una colección de nodos HTML que coinciden con la etiqueta "li" dentro del nodo HTML que coincide con el id "menu" */
console.log(document.querySelector("#menu li")) 
/* Devuelve el primer nodo HTML que coincide con la etiqueta "li" dentro del nodo HTML que coincide con el id "menu" */

