/**
 *   Temporizadores
 *   set time out --->  ejecuta una call  despues de una cantidad de milisegundos 
 *      clearTimeout(temporizador) ---> finaliza el temporizador
 * 
 *   set interval ----> se ejecuta idenfinidamente por cada cierto intervalo de tiempo 
 */

console.log("inicio")
var temporizador = setTimeout(()=>{
    console.log("Ejecutando un setTimeOut, esto se ejecuta una sola vez")
},10000);
console.log("Fin")
clearTimeout(temporizador)

let  intervalo = setInterval(()=>{
   console.log(new Date().toLocaleTimeString())
},1000)


clearInterval(intervalo)
