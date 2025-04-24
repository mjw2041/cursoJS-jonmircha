console.log(this)

console.log(window)
console.log(this===window)

this.nombre = "Contexto Global"

function imprimir (){   /*  (1) */
    console.log(this.nombre)
}

imprimir();

const obj = {
    nombre: "Contexto Objeto",
    imprimir: function(){
       console.log(this.nombre)
    }
}

obj.imprimir()


const obj2 = {
    nombre: "Contexto Objeto 2",
    imprimir: imprimir /* Le estoy asignando la funcion imprimir de arriba (1) */           
}   

obj2.imprimir()


/*
   la arrws function  utilizan los campos del scope: Globales , cuidado al usarla
*/
const obj3 = {
    nombre: "Contexto Objeto 3",
    apellido: "Weihmuller",
    imprimir: () => {
       console.log("nombre ", this.nombre)
       console.log("apellido " ,this.apellido)
    }
}

obj3.imprimir()

function Persona (nombre) {
    this.nombre = nombre
    //return function() { 
    //     console.log(this.nombre)  /* No creo contexto utiliza la variable del contexto global */
    return () =>  console.log(this.nombre)  /* Para solucionar lo anterior se utiliza arrow function */    
}


let maxi = new Persona("Maxi")
maxi(); 