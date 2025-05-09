/* 
   TEMA: NUMBER ( NUMERO )
   new Number ---> constructor
   to_fixed ---> Redondear
   parseInt  --- Parte entera, tambien se usa para convertir a numerico
      parseInt(numero, base) ---> convierte cualquier numero base a Decimal
             parseInt(100, 2) --> 4
             parseInt(100, 8) --> 4                          
   parseFloat --- Parte Flotante tambien se usa para convertir a numerico
   typeof(nro_3) ---> de que tipo es una variable 
   isNsN   ---> devuelve true si es un nro
   numero.toString()      ----> Convierte un numero a String 
       numero.toString(base) ---> Convierte el número a la base
          numero = 10
          numero.toString(2) ---> 110

   %  ---> devuelve el resto de la division       

   Numero Aleatorios
   1-. Math.random(): Para números decimales aleatorios entre 0 (inclusive) y 1 (exclusivo).
   2-. Math.floor(): Para obtener enteros aleatorios dentro de un rango.
   3-. Math.ceil(): Para obtener enteros aleatorios dentro de un rango, 
       redondeando hacia arriba.
   3-, Math.sign: Devuelve el signo del numero
            -1 --> Negativo
             1 --> Positivo    
   4-. crypto.getRandomValues(): Para generar números aleatorios de manera segura 
       (apropiado para criptografía).
   5-. Date.now(): Para obtener un valor basado en la marca de tiempo actual, 
       útil para generar valores pseudo-aleatorios.
*/

let  nro = 15;
let  nro_2 = new Number(20)
let  nro_3 = 7.199
let  nro_4 = "5.60"

console.log("Numeros ",nro,nro_2, nro_3)
/*console.log("Rendondear". nro_3, nro_3.toFixed(1), nro_3.toFixed(3). nro_3.toFixed(5) )*/
console.log(nro_3.toFixed(1), nro_3.toFixed(2)) 
console.log(parseInt(nro_3))     
console.log(parseFloat(nro_3))

console.log(typeof(nro_3))
console.log(typeof(ul))

console.log(nro_3+nro_4)
console.log(nro_3+parseInt(nro_4))

console.log(nro_3 + parseFloat(nro_4))


console.log(nro_3 + Number.parseFloat(nro_4))

/*
      Ejemplo operador modulo (%)  
*/
const dividend = 10;
const divisor = 3;
const remainder = dividend % divisor;

console.log(remainder);  // 1
