
function cuadradoPromise(value) {    
    if (typeof value!= "number") 
            return Promise.reject(`Error el valor ${value} ingresado no es numerico`);
    return new Promise((resolve, reject) => {  // Aquí devolvemos un Promise
        setTimeout(() => {
            resolve({
                value: value,
                result: value * value  
            });
        }, 0);
    }); 
}
/*
  Simple
*/
cuadradoPromise(0)
   .then((obj) => {
       console.log("Inicio Promesa");
       console.log(`Promesa ${obj.value} al cuadrado es ${obj.result}`);
   })

   .catch((error) => {
       console.log("Error:", error);
   });


 cuadradoPromise(0)  
   .then((obj) => {
       console.log("Inicio Promesa");
       console.log(`Promesa ${obj.value} al cuadrado es ${obj.result}`);
       return cuadradoPromise(1)
    })
    .then((obj) => {       
        console.log(`Promesa ${obj.value} al cuadrado es ${obj.result}`);
        return cuadradoPromise(1)
     })
     .then((obj) => {       
        console.log(`Promesa ${obj.value} al cuadrado es ${obj.result}`);
        return cuadradoPromise(2)
     })
     .then((obj) => {       
        console.log(`Promesa ${obj.value} al cuadrado es ${obj.result}`);
        return cuadradoPromise(3)
     })
     .then((obj) => {       
        console.log(`Promesa ${obj.value} al cuadrado es ${obj.result}`);
        return cuadradoPromise(4)
     })
     .then((obj) => {       
        console.log(`Promesa ${obj.value} al cuadrado es ${obj.result}`);
        return cuadradoPromise(5)
     })
     .then((obj) => {       
        console.log(`Promesa ${obj.value} al cuadrado es ${obj.result}`);
        console.log(`Fin de la promesa`);
     })
   .catch((error) => {
       console.log("Error:", error);
   });

      
   
   cuadradoPromise('A')  
   .then((obj) => {
       console.log("Inicio Promesa");
       console.log(`Promesa ${obj.value} al cuadrado es ${obj.result}`);       
    })    
   .catch((error) => {
       console.error("Error:", error);
   });
   

   /**
    * 
    *  Otro ejemplo
    */
  
   function incremetar(value) {    
    resultado = value  +  1
    if (typeof value!= "number") 
        return Promise.reject(`Error el valor ${value} ingresado no es numerico`);
    return new Promise((resolve, reject) => {  // Aquí devolvemos un Promise
        setTimeout(() => {
            resolve({
                value: value,
                result: resultado
            });
        }, 0);
    }); 
}
 

incremetar(5)  
   .then((obj) => {
       console.log("Inicio Promesa (Incrementar)");
       console.log(`Inc Promesa ${obj.value} el siguientes es ${obj.result}`);       
    })    
   .catch((error) => {
       console.err("Error:", error);
   });

