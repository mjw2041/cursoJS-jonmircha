const d = document
export function alarm(sound, btnPlay, btnStop){
    let alarmTempo;
    const $alarm = d.createElement("audio")
    $alarm.scr = sound; 
     
    d.addEventListener("click", e=> {
      if (e.target.matches(btnPlay)){
            alarmTempo = setTimeout(() => {
               $alarm.play();     
               console.log("Entro")
            }, 2000);
            console.log("Alarma prendida")
            e.target.disabled = true
      }  

      if (e.target.matches(btnStop)){
           clearTimeout(alarmTempo);   
           $alarm.pause();
           $alarm.currentTime = 0;                    
           /* En el sonido no ewxiste el stop, se debe pausar y luego volver a empezar */
           d.querySelector(btnPlay).disabled = false
      }  
    })  

}
    

export function digitalClock(clock, btnPlay,btnStop) {
      let clockTempo      
      d.addEventListener("click", e=> {
      if (e.target.matches(btnPlay)){
            clockTempo = setInterval(() => {
                         let clockHour = new Date().toLocaleString()
                         d.querySelector(clock).innerHTML = `<h3 class="digital-clock"> ${clockHour} </h3>`
            }, 1000);
            e.target.disabled = true
      }

      if (e.target.matches(btnStop)){
            clearInterval(clockTempo);
            /*d.querySelector(clock).innerHTML = null */ 
            /* En la practica aparece esta linea a mi no me gusta por eso la comento */
            d.querySelector(btnPlay).disabled = false
      }
      
   })   
}