 console.log("Hola desde BOMMetodos.js")

// window.alert("Alerta")

// let aceptar = window.confirm("Confirmacion") 
// console.log("aceptar", aceptar)

// let prompt = window.prompt("Cual es tu nombre: ")
// console.log("Tu nombre es: ", prompt)

/* alert confirm prompt se le puede sacer la palabra window */

const $btnAbrir = document.getElementById("abrir-ventana"),
      $btnCerrar = document.getElementById("cerrar-ventana"),
      $btnImprimir = document.getElementById("imprimir-ventana")

console.log($btnCerrar)      

let ventana 
$btnAbrir.addEventListener("click", e=>{
    ventana = window.open("https://jonmircha.com")   /* Les asigno la referencia */
})      

$btnCerrar.addEventListener("click", e=>{
    /* window.close() /* Cierra la ventana del navegador no es recomendable */
    ventana.close()
})      

$btnImprimir.addEventListener("click", e=>{
      window.print() /* Mandar a Imprimir la pantalla */
})      



