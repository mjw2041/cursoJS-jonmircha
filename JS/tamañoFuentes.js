// Obtener los elementos
const inputRango = document.getElementById("tamaño-fuente");
const valorFuente = document.getElementById("valor-fuente");
const contenido = document.querySelector(".contenido");

// Agregar un evento para escuchar el cambio en el input de rango
inputRango.addEventListener("input", function() {
    const tamaño = inputRango.value;
    valorFuente.textContent = tamaño;  // Actualizar el valor mostrado
    contenido.style.fontSize = `${tamaño}px`;  // Cambiar el tamaño de la fuente
});
