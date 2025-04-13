// Obtener la fecha y hora actuales con Moment.js
const fechaActual = moment();

// Mostrar la fecha actual en formato ISO
document.getElementById("fecha-actual").textContent = fechaActual.format();

// Mostrar la fecha en un formato personalizado (por ejemplo, DD-MM-YYYY)
document.getElementById("fecha-formateada").textContent = fechaActual.format("DD-MM-YYYY");

// Mostrar la fecha dentro de 7 días
const fechaEn7Dias = moment().add(7, 'days').format('DD-MM-YYYY');
console.log("Fecha dentro de 7 días:", fechaEn7Dias);

// Mostrar la diferencia en días entre dos fechas
const fechaDiferencia = moment("2024-01-01");
const diferenciaDias = fechaActual.diff(fechaDiferencia, 'days');
console.log("Diferencia en días:", diferenciaDias);
