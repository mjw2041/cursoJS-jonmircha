import hamburgerMenu from "./DOM/menu_hamburguesa.js";
import { digitalClock, alarm } from "./DOM/reloj.js";
import { shortCuts, moveBall } from "./DOM/teclado.js";
import { countDown } from   "./DOM/cuenta_regresiva.js" 

const d = document;

d.addEventListener("DOMContentLoaded", (e) => { 
    hamburgerMenu(".panel-btn", ".panel", ".menu a") 
    digitalClock("#reloj", "#activarReloj", "#desactivarReloj")
    alarm("../assets/alarma.mp3", "#activarAlarma", "#desactivarAlarma")
    countDown("countDown", "May 23, 2021", "Feliz Cumpleaños Amigo y Docente Digital 🤓");
});

/* Evento cuando Soltamos la tecla */
d.addEventListener("keydown", e =>{
       shortCuts(e)     
       moveBall(e, ".ball", ".stage")
})

/* Evento cuando Soltamos la tecla */
/*
d.addEventListener("keyup", e =>{
       shortCuts(e)     
})
*/

/* Evento mientras tenga presionada la tecla */
/*
d.addEventListener("keypress", e =>{
       shortCuts(e)     
})
*/       

