console.log("Hola desde manejadoresEventos.js")
/*
   OJO CUANDO LLAMO A UNA FUNCION EN UN EVENTO, NO SE PUEDE PONER LOS PARENTESIS    
   PORQUE SE DISPARA INMEDIATAMENTE, EN CAMBIO SI SE PONE UNA FUNCION ANONIMA
   */

function HolaMundo() {
      alert("Hola Mundo");
      console.log(event)
}

const $eventoSemantico = document.getElementById("evento-semantico");

$eventoSemantico.onclick = HolaMundo;


$eventoSemantico.onclick = function name(e) {
      alert("Hola mundo desde el Manejador de eventos Semántico");
      console.log(e);
}

const $eventoMultiple = document.getElementById("evento-multiple");

$eventoMultiple.addEventListener("click", HolaMundo);
$eventoMultiple.addEventListener("click", (e) => {
      alert("Hola mundo desde el Manejador de eventos Múltiple");      
      console.log(e.target);  // Elemento que disparó el evento
      console.log(e.type);   // Tipo de evento     
});
