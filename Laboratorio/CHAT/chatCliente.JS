// Este código se ejecuta en la MÁQUINA CLIENTE (la que envía el mensaje).

/**
 * Envía un mensaje (recibido por parámetro) a una IP/URL de destino (recibida por parámetro).
 *
 * @param {string} url La dirección completa de la máquina servidora (ej: 'http://192.168.1.50:3000/api/mensaje').
 * @param {string} mensaje El contenido del mensaje a enviar a la otra máquina.
 */
function comunicarseEntreMaquinas(url, mensaje) {
  // Los datos se empaquetan en un objeto JSON.
  const datos = {
    // Puedes usar la clave que necesites, aquí usamos 'payload'
    payload: mensaje 
  };

  fetch(url, {
    method: 'POST', // Usamos POST para enviar datos
    headers: {
      // Indicamos al servidor que el cuerpo de la solicitud es JSON
      'Content-Type': 'application/json'
    },
    // Convertimos el objeto JavaScript a una cadena JSON para el envío
    body: JSON.stringify(datos)
  })
  .then(response => {
    // 1. Verificamos el estado de la respuesta HTTP
    if (!response.ok) {
      throw new Error(`Error de conexión o en el servidor. Estado: ${response.status}`);
    }
    console.log('✅ Solicitud enviada con éxito.');
    return response.json(); // Intentamos leer la respuesta del servidor como JSON
  })
  .then(data => {
    // 2. Manejamos la respuesta de la máquina servidora
    console.log('Respuesta recibida de la otra máquina:', data);
  })
  .catch(error => {
    // 3. Capturamos errores (red, CORS, etc.)
    console.error('❌ Falló la comunicación entre las máquinas:', error.message);
  });
}

// --- CONFIGURACIÓN DE COMUNICACIÓN ---

// 1. **IP de la otra máquina (Servidor):** Debe ser accesible (por ejemplo, en la misma red local).
const ipServidor = 'http://192.168.1.50:8080/datos'; 

// 2. **Mensaje que quieres enviar:**
const miMensaje = '¡Hola! La Máquina A te envía un saludo.';

// 3. **Ejecutar la comunicación**
comunicarseEntreMaquinas(ipServidor, miMensaje);