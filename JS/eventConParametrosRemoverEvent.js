console.log("Hola desde eventConParametrosRemoverEvent.js")

function saludar(nombre = "Desconocido") {
      alert(`Hola ${nombre} `)
      console.log(event);
}

const $eventoMultiple = document.getElementById("evento-multiple");

$eventoMultiple.addEventListener("click", () => {
      saludar();
      saludar("Juan");
});     

const $eventoRemover = document.getElementById("evento-remover");

const removerDobleClick = (e) => { 
      console.log("Removiendo el evento de doble click");
      $eventoRemover.removeEventListener("click", removerDobleClick);
      $eventoRemover.disabled = true;
}

$eventoRemover.addEventListener("click", removerDobleClick);