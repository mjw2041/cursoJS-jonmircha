console.log('***************** EJERCICIOS BASICOS *************' );
console.log(`1) Programa una función que cuente el número de caracteres 
    de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10`);
/* 
    FORMA LARGA
*/
/*
    function contarCaracteres( cadena = "") {
    if (!cadena) {
        console.warn("No ingresaste ninguna cadena")
    } else {
        console.info(`La cadena " ${cadena} " tiene ${cadena.length} caracteres`)
    }
}
*/

/*
FORMA CORTA
*/
const contarCaracteres = (cadena = "") => 
    (!cadena) 
        ? console.warn("No ingresaste ninguna cadena")
        :   console.info(`La cadena " ${cadena} " tiene ${cadena.length} caracteres`)

        contarCaracteres("Hola Mundo")


console.log(`2) Programa una función que te devuelva el texto recortado según el número 
                de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola`);

const recortarTexto = (cadena = "", logitud = undefined) =>
    (!cadena) 
        ? console.warn("No ingresaste ninguna cadena")
        : (logitud === undefined)
            ? console.warn("No ingresaste longitud")
            : console.info( cadena.slice(0,logitud))    


recortarTexto()
recortarTexto("Hola Hola") /* Devuelve toda la cadena */
recortarTexto("Hola Mundo",4)        

console.log(` 3) Programa una función que dada una String te devuelva un Array 
              de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') 
              devolverá ['hola', 'que', 'tal'].`);              
const cadenaAArreglo = (cadena ="", separador=undefined) =>
    (!cadena)
        ? console.warn("No ingresaste ninguna cadena")
        : (separador === undefined) 
            ? console.warn("No ingresaste ningun separador")              
            : console.info(cadena.split(separador))

cadenaAArreglo()
cadenaAArreglo(`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Beatae possimus voluptate voluptatum dolores tenetur consequatur praesentium 
    animi est harum cum, laudantium labore veniam, odio eius soluta natus, 
    expedita necessitatibus magni.lorem`, " ")

cadenaAArreglo(`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Beatae possimus voluptate voluptatum dolores tenetur consequatur praesentium 
             animi est harum cum, laudantium labore veniam, odio eius soluta natus, 
             expedita necessitatibus magni.lorem`)

console.log(` 4) Programa una función que repita un texto X veces, pe. 
                 miFuncion('Hola Mundo', 3 devolverá Hola Mundo Hola Mundo Hola Mundo.`);              
  
const repetirTexto = (texto = "", veces = undefined) => {
    if (!texto) return console.warn("No ingresaste texto");
    
    if (veces === undefined) return console.warn("No ingresaste el nro de veces a repetir el texto")

    if (veces === 0 ) return console.error("El nro de veces debe ser distinto  a 0")

    if (Math.sign(veces) != 1 ) return console.error("El nro de veces debe ser positivo")

    for (let i=1; i <= veces; i++) console.info(`El texto ${texto}, ${i} veces`)        
}

repetirTexto("Hola Mundo", 3)
repetirTexto()
repetirTexto("Hola Mundo")
repetirTexto("Hola Mundo", 0)
repetirTexto("Hola Mundo", -1)

console.log(` 5) Programa una función que invierta las palabras de una cadena de texto, 
                pe. miFuncion("Hola Mundo") devolverá "odnuM aloH"`);              

const invertirCadena = (frase="") => {
    (!frase)
    ? console.warn('No ingresaste ninguna frase')
    : console.info(frase.split('').reverse().join(''))
} 

invertirCadena("")
invertirCadena("Hola Mundo")

console.log(` 6) Programa una función para contar el número de veces que se 
                    repite una palabra en un texto largo, 
                    pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.`);

const textoEnCadena = (cadena="", texto="") => {
    if (!cadena) return console.warn("No ingresaste la cadena")
    if (!texto) return console.warn("No ingresaste el texto a extraer")
    let i = 0
    let contador = 0
    while ( i !== -1) {
        i  = cadena.indexOf(texto, i)
        if (i !== -1) {
            contador ++;
            i ++;
        }    
    }
    return(`La palabra ${texto} se encuentra ${contador} veces`)
}

console.log(textoEnCadena("", "Hola"))
console.log(textoEnCadena("Hola Hola", ""))
console.log(textoEnCadena("Hola Hola", "Hola"))

console.log(` 7) Programa una función que valide si una palabra o frase dada, 
                        es un palíndromo (que se lee igual en un sentido que en otro), 
                        pe. mifuncion("Salas") devolverá true.`);

const palindromo = (palabra="") => {
    if (!palabra) return console.warn("No ingresaste la frase")
    
    let alreves = palabra.split("").reverse().join("") 
    return (palabra === alreves)
       ? console.info(`La palabra ${palabra} es palindroma`)
       : console.info(`La palabra ${palabra} NO es palindroma`)
}

palindromo("")
palindromo("menem")
palindromo("pasata")

console.log(` 8) Programa una función que elimine cierto patrón de 
                caracteres de un texto dado,  
                pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") 
                devolverá  "1, 2, 3, 4 y 5.`)

const eliminarCaracteres = (texto = "", patron = "") => {
    (!texto) 
       ? console.warn("No ingreso ningun texto")
       : (!patron)  
          ? console.warn("No ingreso ningun patron")
          : console.info(texto.replace(new RegExp(patron, 'ig'),""))
}
                    
eliminarCaracteres("","a")
eliminarCaracteres("Hola")
eliminarCaracteres("Hola","a")
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4, xyz5","xyz")

console.log `9) Programa una función que obtenga un numero aleatorio entre 501 y 600.`

const aleatorio = () => console.info(Math.round(Math.random()* 100) + 500)

console.log('numero aleatorio')
aleatorio()

console.log ( `10) Programa una función que reciba un número y 
      evalúe si es capicúa o no (que se lee igual en un sentido que en otro), 
      pe. miFuncion(2002) devolverá true.` )
const capicua = (numero = 0) => {
    if (!numero) return console.warn("No ha ingresado un numero");    
    if (typeof numero !== "number" ) return console.error(`El valor ${numero} no es un numero`)    
    numero = numero.toString()    
    let alreves = numero.split("").reverse().join("");    
    return ( numero === alreves) 
          ? console.log(`El numero ${numero} al reves ${alreves} es capicula`)
          : console.log(`El numero ${numero} al reves ${alreves} No es capicula`)

}

capicua(2000)
capicua(18.81)

console.log ( `11) Programa una función que calcule el factorial de un número 
     (El factorial de un entero positivo n, 
     se define como el producto de todos los números enteros positivos desde 1 hasta n), 
     pe. miFuncion(5) devolverá 120.`)

const factorial = (numero = undefined) => {
    
    if (numero === undefined) return console.warn("No ha ingresado un numero");    
    if (typeof numero !== "number" ) return console.error(`El valor ${numero} no es un numero`)    
    if ( numero === 0) return console.warn("El numero no puede ser cero")
    if ( Math.sign(numero) === -1) return console.warn("El numero no puede ser negativo")
    
    let factorial = 1
    for (let i=numero; i > 1; i--){
        factorial *= i
    }        

    return console.log(`El factorial del numero ${numero} es ${factorial}`)    
}     
factorial()
factorial("casa")
factorial(-1)
factorial(0)
factorial(5)

console.log ( `12) Programa una función que determine si un número es primo 
          (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) 
          devolverá true.`)

const numeroPrimo = ( numero = undefined) => {
    if (numero === undefined) return console.warn("No ha ingresado un numero");    
    if (typeof numero !== "number" ) return console.error(`El valor ${numero} no es un numero`)    
    if ( numero === 0) return console.warn("El numero no puede ser cero")
    if ( numero === 1) return console.warn("El numero no puede ser uno")
    if ( Math.sign(numero) === -1) return console.warn("El numero no puede ser negativo")
    
    let divisible = false;
    for ( let i= 2; i < numero; i++ ) {
        if ( numero %  i === 0 ) {
            divisible = true
            break
        }    
    }    
    return (divisible)
      ? console.log(`El numero ${numero} NO ES PRIMO`)
      : console.log(`El numero ${numero} ES PRIMO`)
}          

numeroPrimo()
numeroPrimo("320")
numeroPrimo(0)
numeroPrimo(1)
numeroPrimo(-1)
numeroPrimo(13)
numeroPrimo(200)

console.log ( `13) Programa una función que determine si un número es par o impar, 
            pe. miFuncion(29) devolverá Impar.`);          

const numeroPar = (numero = undefined) => {
    if (numero === undefined) return console.warn("No ha ingresado un numero");    
    if (typeof numero !== "number" ) return console.error(`El valor ${numero} no es un numero`)
    
    return (numero%2 === 0)     
       ? console.log(`El numero ${numero} es PAR`)
       : console.log(`El numero ${numero} es IMPAR`)
       
     
}           
numeroPar()
numeroPar("320")
numeroPar(0)
numeroPar(1)


console.log ( `14) Programa una función para convertir grados Celsius a Fahrenheit 
                y viceversa, pe. miFuncion(0,"C") devolverá 32°F.`);            

const convertirGrados =( grados = undefined, unidad = undefined) => {
        if (grados === undefined) return console.warn("No ha ingresado un grado");    
        if (typeof grados !== "number" ) return console.error(`El valor ${grados} no es un numero`)

        if (unidad === undefined) return console.warn("No ha ingresado la unidad");        
        if (typeof unidad !== "string" ) return console.error(`El valor ${unidad} no es una cadena de texto`)
    
        if ( unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn(`Valor de unidad no reconocido`)        
        
        if ( unidad === 'C') {
            return console.info(`${grados}Cº = ${Math.round((grados * (9/5)) + 32)}F`)
        } else if (unidad === 'F') {
            return console.info(`${grados}F = ${Math.round((( grados - 32) * (5/9)))}ºC`)
        } 
        
    }   

convertirGrados()
convertirGrados("2")
convertirGrados(2)
convertirGrados(2, "Hola")
convertirGrados(32, "C")
convertirGrados(90, "F")

console.log ( `15) Programa una función para convertir números de base binaria a 
     decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.` );

const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
    if (numero === undefined) return console.warn("No ha ingresado un numero a convertir");    
    if (typeof numero !== "number" ) return console.error(`El valor ${numero} no es un numero`)

    if (base === undefined) return console.warn("No ha ingresado una base");    
    if (typeof base !== "number" ) return console.error(`El valor ${base} no es un Numero`)        

    if (base === 2 ) {
        return console.info(`${numero} base ${base} =>   ${parseInt(numero,base)} base 10 `)
    } else if ( base === 10) {
        return console.info(`${numero} base ${base} =>  ${numero.toString(base) } base 2 `)    
    } else {
        return console.info(`El tipo de base a convertir no es vàlido`)
    }
}

convertirBinarioDecimal() 
convertirBinarioDecimal("Hola", "D") 
convertirBinarioDecimal("Hola") 
convertirBinarioDecimal(60, 1) 
convertirBinarioDecimal(60, "1") 
convertirBinarioDecimal(100, 2) 

convertirBinarioDecimal(1010, 2) 
convertirBinarioDecimal(10, 10) 
convertirBinarioDecimal(10, 7) 

console.log ( `16) Programa una función que devuelva el monto final después de aplicar 
    un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.` )

const aplicarDescuento = ( monto = undefined, descuento = 0 ) => {
   if (monto === undefined) return console.warn("No ha ingresado el monto");    
   if (typeof monto !== "number" ) return console.error(`El valor ${monto} NO es un numero`)
   if (typeof descuento !== "number" ) return console.error(`El valor ${descuento} NO es un numero`)

   if (monto === 0) return console.warn("No ha ingresado el monto");    
   if (Math.sign(monto) === -1) return console.warn("El monto ingresdo es NEGATIVO");    
   if (Math.sign(descuento) === -1) return console.warn("El descuento ingresdo es NEGATIVO");    

   return console.info(`${monto} - ${descuento}% = ${monto - ( monto * descuento/ 100) }` )
} 

aplicarDescuento()
aplicarDescuento("-a")
aplicarDescuento(100, "-a")
aplicarDescuento(100,20)

console.log ( `17) Programa una función que dada una fecha válida determine 
    cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).`)

const calcularAnios = (fecha = undefined) => {
    if (fecha === undefined) return console.warn("No ha ingresado la fecha"); 
    if (!(fecha instanceof Date) ) return console.error(`La fecha ${fecha} NO es una fecha vàlida`)
    
    let hoyMenosFecha = new Date().getTime() - fecha.getTime()
    const aniosEnMS = 1000 * 60 * 60 * 24 * 365 /* Calculo de la cantidad de milisegundo */
    let aniosHumanos = Math.floor(hoyMenosFecha/aniosEnMS)

    return(Math.sign(aniosHumanos) === -1 )      
       ?console.info(`Faltan ${Math.abs(aniosHumanos)} años para ${fecha.getFullYear() }`) 
       :(Math.sign(aniosHumanos) === 1 )
         ? console.info(`Han Pasado ${aniosHumanos} años desde ${fecha.getFullYear()}`) 
         : console.info(`Estamos en el año Actual ${fecha.getFullYear()}`)  

}    

calcularAnios(new Date())
calcularAnios(new Date(1972,1,7))
calcularAnios(new Date(2084,1,7))

console.log(`18) Programa una función que dada una cadena de texto cuente el 
      número de vocales y consonantes, pe. miFuncion("Hola Mundo") 
      devuelva Vocales: 4, Consonantes: 5.`)


const contarLetra = ( cadena = " ") => {
    let consonantes = 0
    let vocales = 0    

    if (cadena === undefined) return console.warn("No ha ingresado una cadena");    
    if (typeof cadena !== "string" ) return console.error(`El valor ${cadena} no es un String`)
        
    cadena =  cadena.toLowerCase()
    
    for (let letra of cadena ) {
        if (/[aeiouàèìòù]/.test(letra)) vocales++
        
        if (/[qwrtypsdfghjklñzxcvbnm]/.test(letra)) consonantes++        
    }

    return console.info ( {
        cadena,
        vocales, 
        consonantes
    })


}   

contarLetra()
contarLetra(3)
contarLetra("Hola Mundo")
contarLetra("@ Hola Mundo")

        
console.log(`/*19) Programa una función que valide que un texto sea un nombre válido, 
                pe. miFuncion("Jonathan MirCha") devolverá verdadero.`)

let validarNombre = (nombre = "" ) => {
    if (nombre === undefined) return console.warn("No ha ingresado una cadena");    
    if (typeof nombre !== "string" ) return console.error(`El valor ${nombre} no es un String`)

    let expReg = /^[A-Za-zÑñÀÈÌÒÙàèìòù\s]+$/g.test(nombre)    
    return (expReg)
      ? console.info(`${nombre} es un nombre vàlido`)
      : console.warn(`${nombre} NO es un nombre vàlido`)
}

validarNombre()
validarNombre(35)
validarNombre("Maxi W")
validarNombre("Maximiliano Weihmuller 35")

console.log(`20) Programa una función que valide que un texto sea un email válido 
      pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.`)


    let validarEmail = (email = "" ) => {
        if (email === undefined) return console.warn("No ha ingresado un email");    
        if (typeof email !== "string" ) return console.error(`El valor ${email} no es un String`)
    
        let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email)    
        return (expReg)
          ? console.info(`${email} es un email vàlido`)
          : console.warn(`${email} NO es un email vàlido`)
    }


validarEmail()
validarEmail(35)
validarEmail("Maxi")
validarEmail("mjw@email.com")


console.log(`fusion 19-20`)


    let validarPatron = (cadena = "", patron = "" ) => {
    if (cadena === undefined) return console.warn("No ha ingresado un cadena");    
    if (typeof cadena !== "string" ) return console.error(`El valor ${cadena} no es un String`)

    if (patron === undefined) return console.warn("No ha ingresado un patron");    
    if (!(patron instanceof RegExp )) return console.error(`El valor ${patron} no es una Expresion Regular`)
    

    let expReg = patron.test(cadena)    
    return (expReg)
        ? console.info(`${cadena} cumple con el patron ingresado`)
        : console.warn(`${cadena} NO cumple con el patron ingresado`)
    }


validarPatron()
validarPatron(35)
validarPatron("Hola")
validarPatron("Hola","35")
validarPatron("Maxi", new RegExp(/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i))
validarEmail("mjw@email.com",new RegExp(/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i))