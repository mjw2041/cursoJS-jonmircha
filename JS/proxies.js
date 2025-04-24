/**
 *   Proxy en JavaScript es como un intermediario o "interceptor" entre tu código 
 *   y un objeto. Te permite controlar, personalizar o modificar el comportamiento 
 *   de ese objeto cuando se le hacen operaciones como leer propiedades, asignarlas, 
 *   borrarlas, llamarlo, etc.
 *  Es como tener un "espía" o un "guardia" vigilando todo lo que pasa con un objeto.
 * 
 */


const persona = {
    nombre: "",
    apellido: "",
    edad: 0
}

const manejador = {
    set (obj, prop, valor){
        /* Si no quiero agregar una nueva propiedad */
        if (Object.keys(obj).indexOf(prop)===-1 ){
            return console.error(`La propuedad "${prop}" 
            no existe en el objeto persona"`)
        }
        /* Solo permito ingresar letras  y especio en blanco en la propiedad nombre y apellido */
        if  ( ( prop === "nombre" || prop === "apellido" ) &&  
            !(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/g.test(valor)) 
        ) {
            return console.error(`La propuedad "${prop}" 
                solo acepta letras y espacion en blanco"`)
        }
        
        obj[prop] = valor
    }  /* Si el set esta vacio no le puedo asignar valor*/

}


let jon =  new Proxy(persona, manejador)
console.log("Cuando lo creo")
console.log(jon)
jon.nombre ="jon carlos"
jon.apellido="Mircha"
jon.edad = 35
console.log("Cuando le agrego valores a las propiedades")
console.log(jon)

jon.twitter = '@mwj'
console.log(jon)
/* S le  agrego un atrubuto al objeto proxie  ( jon) se agrega  un atribito al  objeto padre (persona, lo mismo pasa con los 
/* valores */
console.log(persona)

jon.nombre ="jon19"
jon.apellido="Mircha"
jon.edad = 35
console.log(persona)

console.log("creo otro objeto con el mismo proxie")
let maxi = new Proxy(persona,manejador)
console.log(maxi)
maxi.nombre="Maximiliano"
console.log(maxi)
console.log(persona)
console.log(jon)
/* cuando cambio un valor en cualquier propiedda se cambia en todos los 
   objetos
*/   


