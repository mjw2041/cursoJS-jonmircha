console.log("Hola desde flujoDeEventos.js");

const $divEventos = document.querySelectorAll(".eventos-flujo div");
console.log($divEventos);


function flujoEventos(e) {
      console.log(`Hola te saluda desde ${this.className} el click lo origino ${e.target.className}`);      
}

$divEventos.forEach(div => {
      div.addEventListener("click", flujoEventos, true);
      // El tercer argumento es el uso de la burbuja o captura
      // false = burbuja      
      // true = captura            
      /* Otra forma de hacerlo es con el siguiente código */
      /*
      div.addEventListener("click", flujoEventos, {
            capture: false, // Fase de captura
            once: false // Solo se ejecuta una vez
      });

      La diferencia entre
        Burbuja va de evento de abajo hacia arriba ( 3,2,1)
        captura va de evento de arriba hacia abajo ( 1,2,3)
      */

});
