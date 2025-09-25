// Usando Node.js con Express
const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json()); // Middleware para parsear el JSON de entrada

// 1. Configurar el endpoint para recibir el mensaje POST
app.post('/datos', (req, res) => {
  const mensajeRecibido = req.body.payload; // Accede a la clave 'payload'
  
  console.log(`Mensaje recibido: ${mensajeRecibido}`);
  
  // 2. Responder al cliente para confirmar la recepción
  res.json({ 
    status: 'recibido', 
    fecha: new Date() 
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});