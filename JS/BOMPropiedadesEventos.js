console.log("Hola desde el BOMPropiedadesEventos.js")

window.addEventListener("resize", (e)=>{
    console.clear();
    
    console.log("**** Evento Resize ****")    
    console.log("outerWidth ", outerWidth) /* Alto de la pantalla */
    console.log("outerHeight ", outerHeight) /* Ancho de la patalla */

    console.log("innerWidth ", innerWidth) /* Alto de la ventana */
    console.log("innerHeight ", innerHeight) /* Ancho de la ventana */

    console.log("scrollX ", scrollX) /* Cuanto se aleja de la X */
    console.log("scrollY ", scrollY) /* Cuanto se aleja de la Y */
 })

 window.addEventListener("scroll", (e)=>{
    console.clear();    
    console.log("**** Evento Scroll ****")        
    console.log("scrollX ", scrollX) /* Cuanto se aleja de la X */
    console.log("scrollY ", scrollY) /* Cuanto se aleja de la Y */
 })

 window.addEventListener("load", (e)=>{  
    /* Se ejecutar cuando termina de cargar la ventana */    
    console.log("**** Evento Load ****")        
    console.log("scrollX ", scrollX) /* Cuanto se aleja de la X */
    console.log("scrollY ", scrollY) /* Cuanto se aleja de la Y */
 })

 window.addEventListener("DOMContentLoaded", (e)=>{  
    /* Se antes que load, es mas rapido*/
    console.clear();   
    console.log("**** Evento DOMContentloaded ****")        
    console.log("scrollX ", scrollX) /* Cuanto se aleja de la X */
    console.log("scrollY ", scrollY) /* Cuanto se aleja de la Y */
 })


