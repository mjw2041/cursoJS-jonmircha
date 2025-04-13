import {getTipoDatos} from './funcionesGenerales.js'    

const cuentaLetras = frase => {        
    let salida = getTipoDatos(frase) === 'string'  
          ? frase.length 
          : 'El mensaje ingresado no es un String' 
     return salida                                              
}

const recortarFrase = (frase, cantCarateres) => {                
    if ( cantCarateres <= 0 ) {
        return 'Cantidad Caracteres invalido'  }        
    else if (getTipoDatos(frase) === 'string' ) {    
         return frase.slice(0,cantCarateres) }         
    else {
        return 'El mensaje ingresado no es un String'
    }
}    

const separarPalabra = frase => {
    let palabras = []
    if  ( getTipoDatos(frase) === 'string' ) {
        return palabras = frase.split(" ")
    } else {
        return []}
    }


const repiteFrase = ( frase, nveces ) => {    
    
    if ( nveces <= 0 ){
       return ('El nro debe ser positivo y mayor a 1')
    } else if  ( getTipoDatos(frase) === 'string' ) {         
        return frase.repeat(nveces)
    } else {
        return 'El mesaje ingresado no es string'
    }
}




console.log('***************** EJERCICIOS BASICOS MJW *************' );
console.log("Conectado al JS")

console.log(`1) Programa una función que cuente el número de caracteres 
    de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10`);
    
console.log('Cuenta Letra: ', cuentaLetras( 'Hola' ) );

console.log(`2) Programa una función que te devuelva el texto recortado según el número 
                de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola`);

console.log('Recortar Frase', recortarFrase( 'Hola',2 ) );

console.log(` 3) Programa una función que dada una String te devuelva un Array 
              de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') 
              devolverá ['hola', 'que', 'tal'].`);

console.log( 'Palabras ', separarPalabra("Hola que tal"))

console.log(` 4) Programa una función que repita un texto X veces, pe. 
                 miFuncion('Hola Mundo', 3 devolverá Hola Mundo Hola Mundo Hola Mundo.`);              

console.log( 'Palabras ', repiteFrase("Hola que tal -",5))

console.log(` 5) Programa una función que invierta las palabras de una cadena de texto, 
                pe. miFuncion("Hola Mundo") devolverá "odnuM aloH"`);              
const revertirFrase = ( frase ="" ) => {
    let salida = (!frase) 
                 ? ("La frase no fue ingresada")
                 : (frase.split('').reverse().join(''))
    return salida }
console.log( 'Revertir ', revertirFrase("Hola"))                

console.log(` 6) Programa una función para contar el número de veces que se 
                 repite una palabra en un texto largo, 
                 pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.`);

const encontrar = (frase, palabra) =>  {  
    let expReg = new RegExp(palabra,"g")  
    let result = frase.match(expReg).length;  // Encuentra todos los números
    console.log(result);  // ["123"]   
    return result 
} 

console.log(`Existen , ${encontrar("Hola, Hola, Hola", "Hola")}, repeticiones` )

console.log(` 7) Programa una función que valide si una palabra o frase dada, 
    es un palíndromo (que se lee igual en un sentido que en otro), 
    pe. mifuncion("Salas") devolverá true.`);

const palindromo = (palabra) => {
    let esPalindromo = ( palabra.toLowerCase() === revertirFrase(palabra.toLowerCase() ) )
         ? (`La palabra ${palabra} es un palindromo `)
         : (`La palabra ${palabra} no es un palindromo`)    

    return esPalindromo     
}

console.log(palindromo("Hola"))
console.log(palindromo("menem"))
console.log(palindromo("Menem"))

console.log(` 8) Programa una función que elimine cierto patrón de 
     caracteres de un texto dado, 
     pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") 
     devolverá  "1, 2, 3, 4 y 5.`)

const extraerPalabra = (frase, palabra) => {
    let fraseRecortada = frase.replaceAll(palabra, "")
    return fraseRecortada
}

console.log(extraerPalabra("xyz1, xyz2, xyz3, xyz4, xyz5", "xyz"))

console.log `9) Programa una función que obtenga un numero aleatorio entre 501 y 600.`
let aleatorio = (desde, hasta) => Math.round(Math.random() * (hasta - desde ) + desde)

console.log('Nro Aletorio ', aleatorio(501, 600))

console.log ( `10) Programa una función que reciba un número y 
      evalúe si es capicúa o no (que se lee igual en un sentido que en otro), 
      pe. miFuncion(2002) devolverá true.` )

let esCapicua = numero => {        
    
    let numeroString = numero.toString()
    let numeroInvertido = numeroString.split('').reverse().join('');            
    console.log(numeroString)
    
    if ( numeroString === numeroInvertido ) {
        return `El nro ${numero} es capicua`
    } else  {
        return `El nro ${numero} NO es capicua`
    }
}      
console.log(esCapicua(12.11))

console.log ( `11) Programa una función que calcule el factorial de un número 
     (El factorial de un entero positivo n, 
     se define como el producto de todos los números enteros positivos desde 1 hasta n), 
     pe. miFuncion(5) devolverá 120.`)

let factorial = (numero) => {
    let fact = 1
    for (let i=1; i <= numero; i++){
        fact = fact*i
    }
    return `El factorial de ${numero} es ${fact}`
}     
     
console.log(factorial(4))

console.log ( `12) Programa una función que determine si un número es primo 
          (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) 
          devolverá true.`)

const esPrimo = (numero = undefined ) => {
    if (numero === undefined) return console.warn("No ha ingresado un numero");    
    if (typeof numero !== "number" ) return console.error(`El valor ${numero} no es un numero`)    
    if ( numero === 0) return console.warn("El numero no puede ser cero")
    if ( Math.sign(numero) === -1) return console.warn("El numero no puede ser negativo")
    
    for (let i=( numero -1); i > 1; i--) {
        if ( numero  % i === 0 ) {
            console.log(i)
            return false
        }
    }
    return true 
}           
console.log('El nro es', esPrimo(6))

console.log ( `13) Programa una función que determine si un número es par o impar, 
    pe. miFuncion(29) devolverá Impar.`);

let esPar = (numero = undefined) => {

    if (numero === undefined) return console.warn("No ha ingresado un numero");        
    if (typeof numero !== "number" ) return console.error(`El valor ${numero} no es un numero`)    
    if ( numero === 0) return console.warn("El numero no puede ser cero")
    
    let respuesta = (numero % 2 === 0 ) 
       ? `El numero ${numero} es PAR`      
       :  `El numero ${numero} no es PAR`
       
    return console.log(respuesta)
}      

esPar()
esPar("")
esPar(0)
esPar(5)
esPar(-4)
esPar(8)

console.log ( `14) Programa una función para convertir grados Celsius a Fahrenheit 
    y viceversa, pe. miFuncion(0,"C") devolverá 32°F.`);

let convertir = ( grado = undefined, metodo = undefined) => {
    if (grado === undefined) return console.warn("No ha ingresado los grados");        
    if (metodo === undefined) return console.warn("No ha ingresado los metodo");            
    if (!['c', 'f'].includes(metodo.toLowerCase())) return console.warn("Debe ingresa C o F")
  /*  
    console.warn(metodo)
    if (!['c', 'f'].includes(metodo.toLowerCase())) {
           return console.warn("Debe ingresar C o F");
    }
                
*/
    let salida = ( metodo == "F") 
       ? `El grado Celcius ${grado} equivale a ${(grado * 9/5) + 32} Fahrenheit`
       : `El grado Fahrenheit ${grado} equivale a ${ (grado - 32 ) * 5/9 } Fahrenheit`
    return console.log(salida)

}   

convertir()
convertir(0 )
convertir(0,'H')
convertir(0, 'F')
convertir(32, 'C')

console.log ( `15) Programa una función para convertir números de base binaria a 
     decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.` )

const convertirBinario = ( numero = undefined , base = undefined ) => {
    if (numero === undefined) return console.warn("No ha ingresado el numero");
    if (numero < 0) return console.warn("En numero ingresado debe ser positivo");
    if (base === undefined) return console.warn("No ha ingresado la base");            
    /*if (!['d', 'b'].includes(base.toLowerCase())) return console.warn("Debe ingresa D o B")*/
    
    if (base === 2) {
        let numeroBinario = []    
        while ( numero >= 2 ){
            numeroBinario.push(numero%2)
            
            numero = parseInt(numero / 2);        
            console.log(numero)
        }
        numeroBinario.push(numero)
        let numeroBinarioN = parseInt(numeroBinario.reverse().join(''))
        return console.log(`El numero en base 10 ${numero} es ${numeroBinarioN} en base 2`)    
    } else if (base === 10) {
        let numeroDecimalS = String(numero).split('').map(Number);    
        let numeroDecimal = 0
        /* Lo doy vuelta para utilizar el form*/
        numeroDecimalS = numeroDecimalS.reverse()

        numeroDecimalS.forEach(function(valor, indice) {
          if ( valor === 1)  numeroDecimal = numeroDecimal + ( 2 ** ( indice))
        })         
        console.log('El numero es ', numeroDecimal)
    }      
}
convertirBinario(11,10)

/**
 *  Forma Sencilla

 * let numero = 10;
*  let binario = numero.toString(2);  // Convierte el número a binario
*  console.log(binario);  // "1010"
*/

console.log ( `16) Programa una función que devuelva el monto final después de aplicar 
    un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.` )

const descuento = ( monto = undefined, porcentaje = undefined) => console.log(`Si al monto ${monto} se le aplica ${porcentaje} da como resultado ${monto - ( monto * porcentaje / 100)}`)     


descuento(100, 10)

console.log ( `17) Programa una función que dada una fecha válida determine 
    cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).`)

const cantidadAnios = ( fecha = undefined ) => {
    if (fecha === undefined) return console.warn("No ha ingresado la fecha");
    if (fecha instanceof Date ){
       // Calcular la diferencia en años
       let hoy = new Date()
       let anos = hoy.getFullYear() - fecha.getFullYear();

        // Ajustar si el mes y día de la fecha final aún no han llegado al mismo mes/día de la fecha de inicio
        if (hoy.getMonth() < fecha.getMonth() || 
            (hoy.getMonth() === fecha.getMonth() && hoy.getDate() < fecha.getDate())) {
            anos--;
        } 
        return console.warn("Año", anos)        
    } else { 
        return console.warn("No ingreso una fecha")        
    };                
}
cantidadAnios(new Date('2000-02-01'))
/*
20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/

console.log(`18) Programa una función que dada una cadena de texto cuente el 
      número de vocales y consonantes, pe. miFuncion("Hola Mundo") 
      devuelva Vocales: 4, Consonantes: 5.`)
      
function contarVocales(cadena) {        
    let v_cadena = cadena.toLowerCase()
    let regex = /^[a-z\s]+$/;

    /*expReg = new RegExp(cadena, regex)*/
    
    let result = regex.test(v_cadena);          
    
    if ( !result ) return console.warn("Solo Ingrese A-Z");
    
    /* Convierte la cadena a minúsculas para evitar problemas con mayúsculas/*/
    let cadenaLimpia = cadena.toLowerCase().replaceAll(' ', '');    
    // Define un conjunto de vocales
    const vocales = ['a', 'e', 'i', 'o', 'u', 'à', 'è', 'ì', 'ò', ''];
    // Filtra los caracteres que sean vocales y cuenta
    const numeroVocales = cadenaLimpia.split('').filter(letra => vocales.includes(letra)).length;
    const nuneroConsonantes = cadenaLimpia.length-numeroVocales
    return console.log(`El texto ${cadena} tiene ${numeroVocales} vocales y tiene ${nuneroConsonantes} consonantes `);
}

contarVocales("Hola mundo")
        
console.log(`/*19) Programa una función que valide que un texto sea un nombre válido, 
                pe. miFuncion("Jonathan MirCha") devolverá verdadero.`)

function esUnNombre(mensaje) {
    let palabras = mensaje.split(" ")
    let regex = /^[A-Z]/
    for (let palabra of palabras) {
        if (!(regex.test(palabra))) {      
            console.log("Error " , palabra)
            return console.log(`La expresion ${mensaje} contiene la palabra ${palabra} 
                    que no es una nombre`)                                     
        }
    }
    return console.log(`La expresion ${mensaje} solo contiene nombres validos`)                             
}       

esUnNombre("Caca Perro")

console.log(`20) Programa una función que valide que un texto sea un email válido 
      pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.`)
function esMailValido( mensaje ) {
   let regex  = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i
   
   let respuesta = ( regex.test(mensaje)) ?`El mensaje ${mensaje} ES un mail valido`   
              :`El mensaje ${mensaje} NO ES un mail valido`         
  
    return console.log(respuesta)
}
esMailValido("pepe@pepe.pe")

/*
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/

console.log(`21) Programa una función que dado un array numérico devuelve otro array 
      con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].`)

const elevarArreglo = ( arreglo = undefined) => {
    return console.log(arreglo.map(elemento => elemento * elemento ))
}
elevarArreglo([1,2,3,4,5])

console.log(`22) Programa una función que dado un array devuelva el número mas alto y 
     el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].`)

const elmasGrandeymasChico = ( arreglo = undefined) => {
        return console.log(`Del array ${arreglo}, el nro mas chico es el ${Math.min(...arreglo)} 
                  y el mas grande es ${Math.max(...arreglo)}`)
    }

elmasGrandeymasChico([1,2,3,4,5])

console.log(`23)Programa una función que dado un array de números devuelva 
     un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, 
     pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}`)

const devuelveImparesPares = ( arreglo = undefined) => {        
        let impares = arreglo.filter(x => x%2 != 0)
        let pares = arreglo.filter(x => x%2 === 0)
        return console.log(`Del arreglo ${arreglo} los valores pares son ${pares} y los impares son ${impares}` )        
    }

devuelveImparesPares([0,1,2,3,4,5]) 

const ordanamiento = (arreglo = undefined) =>{
        
        let ascedente  = [...arreglo]
        ascedente.sort((a, b) => a - b); 
        let descendente =  [...arreglo]
        descendente.sort((a, b) => b - a); 
        return console.log(`Del arreglo ${arreglo} los valores ordenados ascendente ${ascedente} y descendentes ${descendente}` )        
}

ordanamiento([80,31,22,43,14,55])