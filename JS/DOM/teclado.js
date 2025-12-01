const d = document
let x = 0, 
    y = 0

export function moveBall(e, ball, stage ) {
   const $ball = d.querySelector(ball),
   $stage = d.querySelector(stage),
   limitBall =$ball.getBoundingClientRect(), /* Brindan Datos Precisos sobre la ubicacion del objeto */
   limitStage =$stage.getBoundingClientRect();
   switch (e.keyCode) {            
      case 37:
         console.log("izquierda");         
         if ( limitBall.left > limitStage.left) {
            x--;
            e.preventDefault(); /* Elimina las tecla por defectos */
         }         
         break; 
     case 38:
         console.log("Arriba");
         if ( limitBall.top > limitStage.top) {
            y--
            e.preventDefault();
         };                  
         break;     
     case 39:
         console.log("derecha");
         if ( limitBall.right < limitStage.right) {
            x++;
            e.preventDefault();
         };         
         break;     
     case 40:
         console.log("abajo");
         if ( limitBall.bottom < limitStage.bottom) {
            y++;
            e.preventDefault();
            }         
         break;         
     default: 
         console.log("Sin Asignar");
         break; 
   } 
   $ball.style.transform = `translate(${x*10}px, ${y*10}px)`;
   console.log(limitBall);
   console.log(limitStage);
}

export function shortCuts(e) {
      console.log(e);
      console.log('Tipo ', e.type);
      console.log('Codigo ', e.keyCode);
      console.log('Tecla ', e.key);
      console.log('Se presiono la tecla control ', e.ctrlKey);
      console.log('Se presiono la tecla control ', e.altKey);
      console.log('Se presiono la tecla shift ', e.shiftKey);

      if (e.key === 'a' && e.altKey) {
            alert ("Haz lanzado una alerta con el teclado")
      }

      if (e.key === 'c' && e.altKey) {
            confirm ("Haz lanzado una confirmacion con el teclado")
      }

      if (e.key === 'p' && e.altKey) {
            prompt ("Haz lanzado un prompt con el teclado")
      }
}