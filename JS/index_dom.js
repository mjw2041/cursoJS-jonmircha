import hamburgerMenu from "./DOM/menu_hamburguesa.js";
import { digitalClock, alarm } from "./DOM/reloj.js";
import { shortCuts, moveBall } from "./DOM/teclado.js";
import { countDown } from   "./DOM/cuenta_regresiva.js" 
import {srollTopButton} from "./DOM/boton_sroll.js"
import darkTheme from "./DOM/darkTheme.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => { 
    hamburgerMenu(".panel-btn", ".panel", ".menu a") 
    digitalClock("#reloj", "#activarReloj", "#desactivarReloj")
    alarm("../assets/alarma.mp3", "#activarAlarma", "#desactivarAlarma")
    countDown("countDown", "May 23, 2021", "Feliz Cumpleaños Amigo y Docente Digital 🤓");
    srollTopButton(".scroll-top-btn");
    
});

/* Evento cuando Soltamos la tecla */
d.addEventListener("keydown", e =>{
       shortCuts(e)     
       moveBall(e, ".ball", ".stage")
})

darkTheme(".dark-theme-btn", "dark-mode")  
/* Lo tengo poner aca porque la funcion ya tiene un "DOMContentLoaded" */

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

