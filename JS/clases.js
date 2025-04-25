/**
        *   TEMA: CLASES
        */

console.log( '*********** CLASES ********************')

class Animal_3 {
 constructor( nombre, genero) {
   this.nombre = nombre
   this.genero = genero 
 }

 sonar() { 
    console.log("Hagos sonidos por que estoy vivo")
 }

 saludar() {
   console.log(`Hola mi nombre es ${this.nombre} y soy  un ${this.genero}` );          
 }
}

class Perro_3 extends Animal_3{
    constructor( nombre, genero, tamano) {
     super(nombre, genero)
     this.tamano = tamano
     this.raza = null
    }      
    
    saludar (){
       console.log(`Hola mi nombre es ${this.nombre} y soy  un ${this.genero} 
              de tamaño ${this.tamano}` );          
    }

    ladrar() {
     console.log('Guauuuu Guauuuuu !!!!' );            
    } 

    static metodo() {
     console.log('soy un metodo estatico' );            
    }
    
    setGenero( genero ){
     this.genero = genero
    }

    getGenero() {
     return this.genero
    }

    setNombre( nombre ){
     this.nombre = nombre
    }

    getNombre() {
     return this.nombre
    }

    setTamano( tamano ){
     this.tamano = tamano
    }  

    getTamano() {
     return this.tamano
    }
    
    get getRaza() {
     return this.raza
    }

    set setRaza( raza ){
     this.raza = raza
    }
}

const perro_2 = new Animal_3("Coco", "Perro")

console.log(perro_2)
perro_2.sonar() 
perro_2.saludar()

const perro_3 = new Perro_3("Lazzie", "Femenino", "Grande")
console.log(perro_3)

perro_3.saludar()      

/**
 *   TEMA: METODO ESTATICO
 *   Es aquel que se puede invocar sin necesidad de instanciar la clase
 */

console.log( '**** METODO ESTATICO, GETTERS Y SETTERS ***************')


/* Perro_3.ladrar(); Esto no se puede hacer por que no es un metodo estatico */
Perro_3.metodo();

// perro_3.setRaza("Fox Terrier")              
// No se puede usar asi porque esta definida como set
//const raza = perro_3.getRaza()       
// No se puede usar asi porque esta definida como set

// Otra forma de usarlo        
perro_3.setRaza = "Fox Terrier"       
console.log('Raza', perro_3.getRaza );