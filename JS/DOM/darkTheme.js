const d = document,
      ls = localStorage;

export default function darkTheme(btn,classDark) {
           
     const $themeBtn = d.querySelector(btn)
           ,$selectors = d.querySelectorAll("[ data-dark]")
     let sun  =  "☀️",
         moon = "🌙"


     const lightMode = () => {
          console.log("Entro a lightMode")
          $selectors.forEach((el)=> {
              el.classList.remove(classDark)
              console.log("Entro Bucle moon") 
          })
          $themeBtn.textContent = moon
          ls.setItem("theme", "light")
     }

     const darkMode = () => {
          console.log("Entro a darkMode")
          $selectors.forEach((el)=> { 
                  el.classList.add(classDark)
                  console.log("Entro Bucle sun") 

            })
             $themeBtn.textContent = sun
             ls.setItem("theme", "dark")
     }

     d.addEventListener("click", (e)=> {
          if(e.target.matches(btn)){
            console.log($themeBtn.textContent);
          }
          /* d.querySelectorAll nos devuelve un arreglo de selectores */
           console.log(' *** $selectors ',$selectors) 
          if ($themeBtn.textContent === sun){
             lightMode();             
          } else {
             darkMode();
          }
     })

     /* Consulto al locaStorage */
     console.log("Antes DOMContentLoaded");  
     d.addEventListener("DOMContentLoaded", (e)=>{          
          console.log("ls.getItem(theme)" , ls.getItem("theme") )
          if (ls.getItem("theme")=== null )  {
               console.log("No lo encontro")
               ls.setItem("theme", "light")
          } else {
               console.log("Lo encontro", ls.getItem("theme"))
          }

          if (ls.getItem("theme")=== "light") {
               lightMode();
          }

          if (ls.getItem("theme")=== "dark") {
               darkMode();
          }

     })
       
     
} 