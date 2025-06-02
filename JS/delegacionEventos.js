console.log("Hola desde delegacionEventos.js")

function flujoEventos(e) {
      console.log(`Hola te saluda desde ${this} el click lo origino ${e.target.className}`);      
      /*e.stopPropagation(); No hace falta porque el document es el primer nodo*/
} 


document.addEventListener("click", (e)=> {
    console.log("Click en", e.target)

    if (e.target.matches(".eventos-flujo div")) {
        flujoEventos(e)
    }
    
    if (e.target.matches(".eventos-flujo a")) {
      alert("Hola soy tu amigo y profesor Jonathan Mircha")
      e.preventDefault();
      /*e.stopPropagation(); No hace falta porque el document es el primer nodo*/
    }
})  

