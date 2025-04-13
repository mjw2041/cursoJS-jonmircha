export const PI = Math.PI

export const usuario = 'Jon'
       const pass    = 'qweryt'

export default function saludar(nombre) {
   console.log(`Hola Modulo + ESC6`)
}       

export class Pelicula {
    constructor (nombre, tipo, estreno) {
          this.nombre = nombre,
          this.tipo = tipo,
          this.estreno = estreno
    }
    
    get getNombre() {
        return this.nombre
    }

}
