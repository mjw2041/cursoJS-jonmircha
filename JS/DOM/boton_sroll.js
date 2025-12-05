const d = document,
      w = window;

export function srollTopButton(btn) {
    const $scrollBtn = d.querySelector(btn);
    console.log('Posicion del Scroll' , w.pageYOffset, ' ' , d.documentElement.scrollTop);

    w.addEventListener("click", (e)=> {
        console.log('Posicion del Scroll' , w.pageYOffset, ' ' , d.documentElement.scrollTop);
        if(e.target.matches(btn)){
            w.scrollTo({
                behavior: "smooth",
                top:0,
                left: 0
            })
        } 
    })

    w.addEventListener("scroll", (e)=> {        
        console.log('Posicion del Scroll' , w.pageYOffset, ' ' , d.documentElement.scrollTop);
           /* Son dos metodos para determinar a cual es la posicion Y de HTML */
        let scrollTop =  w.pageYOffset || d.documentElement.scrollTop;
           /* La variable toma un valor o el otro, si los dos tienen valor toma el primero
              Nota: el 0 es considerado nulo por lo tanto no lo considera.
           */ 

        if ( scrollTop > 600 ) {
            console.log('Visible');
            $scrollBtn.classList.remove("hidden")
        } else {
            console.log('Oculto');
            $scrollBtn.classList.add("hidden")    
        }
    })
}