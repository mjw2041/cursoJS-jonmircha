// script.js

/**
 * Envía un mensaje (recibido por parámetro) a una IP/URL de destino (recibida por parámetro).
 */
function enviarMensajeAIP(url, mensaje) {
    const datos = {
        payload: mensaje // Clave de dato esperada por el servidor
    };
    
    // Actualiza el div de resultados
    document.getElementById('resultado').innerHTML = '⏳ Enviando solicitud...';

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error HTTP! Estado: ${response.status}. Verifica que el servidor esté activo.`);
        }
        return response.text(); // Devuelve la respuesta como texto
    })
    .then(data => {
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.style.backgroundColor = '#d4edda'; // Fondo verde para éxito
        resultadoDiv.style.color = '#155724';
        resultadoDiv.innerHTML = `✅ **Mensaje Enviado con Éxito**<br>
                                  **URL:** ${url}<br>
                                  **Respuesta del Servidor:**<br>${data}`;
    })
    .catch(error => {
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.style.backgroundColor = '#f8d7da'; // Fondo rojo para error
        resultadoDiv.style.color = '#721c24';
        resultadoDiv.innerHTML = `❌ **ERROR en la Comunicación**<br>
                                  ${error.message}`;
        console.error('Error:', error);
    });
}

// --- LÓGICA PARA MANEJAR EL FORMULARIO ---

document.getElementById('mensajeForm').addEventListener('submit', function(event) {
    // Evita que el formulario haga el envío tradicional y recargue la página
    event.preventDefault(); 
    
    // Obtener los valores del formulario
    const url = document.getElementById('urlInput').value;
    const mensaje = document.getElementById('mensajeInput').value;
    
    // Llamar a la función de envío
    if (url && mensaje) {
        enviarMensajeAIP(url, mensaje);
    } else {
        alert('Por favor, completa ambos campos.');
    }
});