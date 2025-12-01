export default function hamburgerMenu(panelBTN, panel, menuLink) {
      const d = document;
      d.addEventListener("click", e=> {
        
         if(e.target.matches(panelBTN) || e.target.matches( `${panelBTN} *` ))  {            
              /* e.target.matches(panelBTN Esta sentencia vefifica si el objeto 
                 clicleado tiene una clase CSS igual a panelBTN
                 o  e.target.matches( `${panelBTN} *` ) vefifica tambien en las clase hijas */
            d.querySelector(panel).classList.toggle("is-active")    /* toogle saca o pone una clase */           
            d.querySelector(panelBTN).classList.toggle("is-active") /* toogle saca o pone una clase */                      
         }             
   
      
         if(e.target.matches(menuLink))  {            
                  d.querySelector(panel).classList.remove("is-active") 
                  d.querySelector(panelBTN).classList.remove("is-active") 
         }                   
      }) 
}      