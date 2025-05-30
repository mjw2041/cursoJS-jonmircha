console.log("Hola desde stopPropagationPreventDefault.js")

const $divEventos = document.querySelectorAll(".eventos-flujo div"),
   $linklEventos = document.querySelector(".eventos-flujo a");
console.log($divEventos);
console.log($linklEventos);


function flujoEventos(e) {
      console.log(`Hola te saluda desde ${this.className} el click lo origino ${e.target.className}`);      
      e.stopPropagation() /* Para la propagacion */
} 

$divEventos.forEach(div => {
      div.addEventListener("click", flujoEventos, false);
  
});

$linklEventos.addEventListener("click", (e) =>{
      alert("Hola soy tu amigo y profesor Jonathan Mircha")
      e.preventDefault(); /* Cambiar la accion por defecto a la que nosotros necesitamos */
      e.stopPropagation();
})