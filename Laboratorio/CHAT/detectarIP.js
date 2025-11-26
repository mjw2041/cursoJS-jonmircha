const net = require('net');

function verificarIPTCP(ip, puerto) {
    return new Promise(resolve => {
        // Crea un nuevo socket para la conexión
        const socket = new net.Socket();
        
        // Define un tiempo de espera de 2 segundos
        socket.setTimeout(2000); 

        // Intento de conexión
        socket.connect(puerto, ip, () => {
            console.log(`✅ Éxito: La IP ${ip} está ACTIVA y escuchando en el puerto ${puerto}.`);
            socket.destroy(); // Cierra la conexión inmediatamente
            resolve(true);
        });

        // Manejo de errores (conexión rechazada o host no encontrado)
        socket.on('error', (err) => {
            console.log(`❌ Fallo: La IP ${ip} no respondió al puerto ${puerto}.`);
            socket.destroy();
            resolve(false);
        });

        // Manejo del tiempo de espera
        socket.on('timeout', () => {
            console.log(`⚠️ Tiempo de espera agotado: La IP ${ip} tardó demasiado en responder.`);
            socket.destroy();
            resolve(false);
        });
    });
}