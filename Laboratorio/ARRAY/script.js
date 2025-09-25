const myNumbers = [];
const inputElement = document.getElementById('num-input');
const sortedArrayElement = document.getElementById('sorted-array');
const minElement = document.getElementById('min-value');
const maxElement = document.getElementById('max-value');
const averageElement = document.getElementById('average-value');

// Función para validar y actualizar todos los datos
function updateDisplay() {
    if (myNumbers.length === 0) {
        sortedArrayElement.textContent = "Array Ordenado: []";
        minElement.textContent = "Mínimo: N/A";
        maxElement.textContent = "Máximo: N/A";
        averageElement.textContent = "Media: N/A";
        return;
    }

    // Ordena el array para mostrarlo y encontrar min/max
    const sortedNumbers = [...myNumbers].sort((a, b) => a - b);
    
    // Calcula la suma para la media
    const sum = sortedNumbers.reduce((total, num) => total + num, 0);
    const average = (sum / sortedNumbers.length).toFixed(2); // Redondea a 2 decimales

    // Muestra los resultados en la página
    sortedArrayElement.textContent = `Array Ordenado: [${sortedNumbers.join(', ')}]`;
    minElement.textContent = `Mínimo: ${sortedNumbers[0]}`;
    maxElement.textContent = `Máximo: ${sortedNumbers[sortedNumbers.length - 1]}`;
    averageElement.textContent = `Media: ${average}`;
}

// Listener para el evento "keypress"
inputElement.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const inputValue = inputElement.value.trim();
        const num = Number(inputValue);

        // Validación: si no es un número o si no está entre 0 y 999
        if (isNaN(num) || num < 0 || num > 999 || inputValue === "") {
            alert("Por favor, ingresa un número válido entre 0 y 999.");
            inputElement.value = '';
            return;
        }
        
        myNumbers.push(num);
        inputElement.value = ''; // Limpiamos el campo
        updateDisplay();
    }
});