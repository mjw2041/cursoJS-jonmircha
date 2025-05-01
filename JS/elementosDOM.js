console.log("Elementos el DOM")
console.log(window.document)
console.log(document)  /* DEvuelve el documento HTML completo */
console.log(document.head) /* Devuelve el head del documento HTML */
console.log(document.body) /* Devuelve el body del documento HTML */   
console.log(document.HTML  ) /*Devuelve el HTML del documento HTML */
console.log(document.documentElement ) /*Devuelve el HTML del documento HTML */
console.log(document.doctype ) /* Devuelve el doctype del documento HTML */
console.log(document.characterSet ) /* Devuelve el charset del documento HTML */
console.log(document.title) /* Devuelve el título del documento HTML */
console.log(document.links) /* Devuelve los enlaces del documento HTML  Esto no es un arreglo Es un HTPPColection*/ 
console.log(document.images) /* Devuelve las imagenes del documento HTML  Esto no es un arreglo Es un HTPPColection*/
console.log(document.forms) /* Devuelve los formularios del documento HTML  Esto no es un arreglo Es un HTPPColection*/
console.log(document.scripts) /* Devuelve los scripts del documento HTML  Esto no es un arreglo Es un HTPPColection*/   
console.log(document.styleSheets) /* Devuelve las hojas de estilo del documento HTML */

setTimeout(() => {
      console.log(document.getSelection().toString()); /* Devuelve el texto seleccionado del documento HTML */
    }, 3000);

document.write("<h2>Inserto un mensaje desde el JS</h2>") /* Escribe en el documento HTML */          