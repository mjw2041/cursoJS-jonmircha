console.log("Hola desde Manejo Texto y HTML.js")

const $whatisDOM =  document.getElementById("que-es")
let text = `
<p>
    El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
API para documentos HTML y XML.
    </p>
    <p>
    Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
`

$whatisDOM.innerText = text; /* Se creo para internet explorer, no reconoce las etiquetas HTML */
$whatisDOM.textContent = text; /* Es parte del standard , no reconoce las etiquetas HTML */
$whatisDOM.innerHTML = text; /* Es parte del standard , reconoce las etiquetas HTML */
$whatisDOM.outerHTML = text; 

/**
 * 
   innerHTML manipula solo el contenido dentro de un elemento.
   outerHTML manipula el elemento completo, incluyendo sus etiquetas.
 * 
 */

