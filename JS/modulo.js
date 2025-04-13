/*
    export default ---> se exporta por defecto  ( solo se puede tener una por paquete)
    import saludar, {PI} from './constantes.js' ---> se debe colocar afuera de las llaves
    si quier importar por defecto variables primero la tengo que declarar y despues asignarla 
    como default

    as ---> alias

*/

import saludar, {PI, Pelicula} from './constantes.js'
import valorMaximo,{ aritmetica as ar} from './aritmetica.js'

console.log("Modulo")
console.log(PI)
console.log('sumar', ar.sumar(3,4))
console.log('restar', ar.restar(4,2))
console.log('valor maximo', valorMaximo)

const pelicula = new Pelicula("Iron Man", "Accion", 2014)

let nombrePelicula = pelicula.getNombre
console.log("Pelicula", pelicula)
console.log("Nombre", nombrePelicula)
saludar();




