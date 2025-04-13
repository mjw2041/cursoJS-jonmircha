  /**
 *   NOTAS
 *   En caso de usar el type=module en la carga del js, 
 *   Antes se debe cargar el servidor de HTTP
 *    a> Ir con el termina el subdirectorio del proyecto 
 *    b> ejecutar npx http-server
 *    Al termianr cerrarlos desde la terminal con ctrl+ C
 *    En caso de no ternelo instalado 
 *         sudo npm install -g http-server
 */

/**
         *  ORDENAMIENTO CODIGO
         *  1- IMPORTACION VARIABLES
         *  2- DECLARACION VARIABLES
         *  3- DECLARACION FUNCIONES
         *  4- EJECUCION CODIGO  
         */
        
var hola = "Hola Mundo";
console.log(hola);        
console.log(window)                
console.log(window.hola)
console.log(window.hello)

console.log(" ++++++++++++ var ++++++++++++++++++");
var musica = "Rock"
console.log("Valor de la variable antes bloquee " + musica);
{
    var musica = "Pop"
    console.log("Valor de la variable dentro bloquee " + musica);
}
console.log("Valor de la variable fuera bloquee " + musica);


console.log(" ++++++++++++ let ++++++++++++++++++");
let musica2 = "Rock ***"
console.log("Valor de la variable antes bloquee " + musica2);
{
    let musica2 = "Pop ***"
    console.log("Valor de la variable dentro bloquee " + musica2);
}       
console.log("Valor de la variable fuera bloquee " + musica2);

const PI = 3.14
console.log(PI)

let objeto = {
    nombre: "Maxi",
    edad: 52  
}

let colores = ["blanco", "azul", "negro"]

let objeto_const = {
    nombre: "Maxi",
    edad: 52  
}

let colores_const = ["blanco", "azul", "negro"]
console.log(objeto)
console.log(colores)

console.log(objeto_const)
console.log(colores_const)

objeto_const.email = 'mjw@correo.com.ar'
colores_const.push("rojo")
console.log(objeto_const)
console.log(colores_const)

/**
 * 
 *    TEMA: TIPO DE DATOS PRIMITIVOS
 *         
 * /

/**
 *   TEMA: STRING
 *   
 */
/* Cadena de Texto Sting
   new String  Constructor

   !cadena --> determina si la cadena esta vacia
   
   Funciones Escenciales 
   1-.  length: Longitud de la cadena.
   2-.  toLowerCase() / toUpperCase(): Convierte a minúsculas o mayúsculas.
   3-.  charAt() / charCodeAt(): Obtiene un carácter o su código Unicode en una posición específica.
   4-.  indexOf() / lastIndexOf(): Encuentra la posición de una subcadena.
        devuelve -1 si no lo encuentra
   5-.  includes() / startsWith() / endsWith(): Verifica si una subcadena está en la cadena o si la cadena empieza/termina con una subcadena.
   6-.  slice() / substring() / substr(): Extrae partes de la cadena.
   7-.  trim(): Elimina espacios al principio y al final.
   8-.  replace(): Reemplaza una subcadena por otra.
   9-.  split(): Divide la cadena en un arreglo de subcadenas.
   10-. concat(): Une cadenas.
   11-. repeat(): Repite la cadena un número dado de veces.
   12-. padStart() / padEnd(): Agrega caracteres al principio o al final para llenar la longitud.
   13-. normalize(): Normaliza la cadena para manejar caracteres especiales.
   14-. join(''): Vuelve a unir un array de caracteres en un solo string.
   15-. replaceAll(searchValue, newValue): Reemplaza todas las ocurrencias de una subcadena en la cadena original con un nuevo valor.
   16-. El Remplazo del IN ( ORACLE)
       (!['c', 'f'].includes(<nombre de la variable>.toLowerCase()))
            
*/ 
let nombre = "Maxi"
let apellido = 'Weihmûller'
let saludo = new String("Hola Mundo")  // Constructor 
let lorem = 'lorem esta lorem esta esta lorem'

console.log(nombre, apellido, saludo)
console.log(nombre.length, apellido.length, saludo.length, 
            nombre.toLocaleUpperCase(),
            apellido.toLocaleLowerCase(), 
            lorem.includes("lorem"),
            lorem.split(" ")
)

// Concatenacion (6)
let nombre_2 = "Maximiliano"
let apellido_2 = "Weihmuller"

let saludo_2 = "Hola mi nombre es " + nombre_2 + " " + apellido_2 + "."
console.log(saludo_2)

// Interpolacion o Template
let saludo_3 = `Hola min nombre es ${nombre_2} ${apellido_2}.`
console.log(saludo_3)

let ul = '<ul> <li> Primavera </li> <li>Verano</li> <li> Otoño </li> <li> Invierno </li> </ul>'

console.log(ul)

let ul_2 = `
  <ul> 
     <li> Primavera </li> 
     <li>Verano</li> 
     <li> Otoño </li> 
     <li> Invierno </li>
  </ul>`

console.log(ul_2)            

ul_3 = '<ul> '
ul_3 += '<li> Primavera </li> '    
ul_3 += '<li>Verano</li>'    
ul_3 += '<li> Otoño </li>'    
ul_3 += '<li> Invierno </li>'    
ul_3 += '</ul>`'    
console.log(ul_3)


/** 
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



/**
 *   TEMA: Datos de tipo Booleanos
 */     
     
 let verdadero = true
 let falso = false
 let v = Boolean(true)
 let f = Boolean(false)


 console.log(verdadero, falso, v,f)
 console.log(typeof(verdadero), typeof(falso))

 console.log(Boolean(0))
 console.log(Boolean(1))
 console.log(Boolean(-15))
 console.log(Boolean(""))
 console.log(Boolean("X"))
 console.log(Boolean( new Date) )


 /*
     undefined, null, NaN
     undefined -->  es cuando no se le asigna valor
     null --> es cuando se asigna el valor null
     Nan  --> es cuando hago una operacion matematica con valores no compatibles
    
 */
   
 let indefinida;
 console.log(indefinida)

 let nulo = null;
 console.log(nulo)

 let noEsUnNumero = hola * 0.50
 console.log(noEsUnNumero)

 /**
 * 
 *    TEMA: TIPO DE DATOS COMPLEJOS
 *         
 */

 /*
  *   TEMA: FUNCIONES 
  */
  
  // FUNCION DECLARADA
  // funcion que no devuelve valor
  function estoEsUnaFuncion () {
    console.log("Uno")
    console.log("Dos")
    console.log("Tres")            
  }

  // Invocacion de una funcion 
  estoEsUnaFuncion();

  // funcion que devuelve valor
  function escribir () {
    console.log("Uno")
    console.log("Dos")
    console.log("Tres")            
    return "Termino correctamente"
  }

  let valorRetorno = escribir();
  console.log(valorRetorno)

  // funcion que recibe parametro
 function suma (nro_1 = 10, nro_2 = 10) {
    let resultado = nro_1 + nro_2
    return resultado
  }

  let resultado = suma(1,2);
  console.log(resultado)

  resultado = suma();
  console.log(resultado)

  // FUNCION EXPESADA o FUNCION ANONIMA
  // Generalmente se usa una constantate

  let funcionExpresada = function(){
    console.log("Funcion Expresada")
    return "ok"
  }
  
  let vfuncionExpresada = funcionExpresada();
  console.log(vfuncionExpresada)

  funcionExpresada();

   /**
    * 
    *  TEMA: OBJETOS
    *  Se definen como objeto
    *  Se utiliza el [] para definir sus atributos
    *  Se puede utilzar el constructor Object
    *  Un objeto puede contener todo tipo de datos simple, o complejos, por ejemplo un 
    *  arreglo o un objeto, o tambien una funcion
    *  objeto["nombreAtributo"] ---> acedder en forma directa
    *  objeto.nombreAtributo --->   acedder en forma directa
    *  Dentro de un objeto a las 
    *           variable se las llama propiedades
    *           funciones se los llaman metodos
    *  La palabra reservada this hace referencia al objeto en si mismo
    * 
    *  Object.keys ---> permite listar todos los atributos del objeto
    *  Object.values ---> permite listar todos los valores de los atributos del objeto
    *  objeto_3.hasOwnProperty("nombre") --> devuelve true si el objeto tiene una 
    *                                        propiedad que se llama nombre 
    *  objeto instaceof <tipo_de_objeto>  devueve true si el objeto es del tipo  tipo_de_objeto
    */

   const objeto_1 = { 

   }
   console.log(objeto_1)

   const objeto_2 = new Object() 
   console.log(objeto_2)
   
     const objeto_3 = {
         nombre: "Maximiliano",
         apellido:  "Weihûller",
         edad: 52,
         pasatiempo : [ "correr", "nadar", "programar"],
         soltero: true,
         contacto : {
         email:"mwj@hotmail.com",
         celular: "341-5151313",
         twiter: "@mjw"        
        },
        saludar: function(){
           console.log("Hola mundo")
        },
        decirMiNombre: function(){
           console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}
             tengo ${this.edad} años y me puede serguir en ${this.contacto.twiter}` )           
        }
      } 
      console.log(objeto_3) 
      console.log(objeto_3["nombre"])
      console.log(objeto_3.apellido)   
      console.log(objeto_3.contacto)
      console.log(objeto_3.contacto.email)
      console.log(objeto_3.pasatiempo[0])
      objeto_3.saludar()
      objeto_3.decirMiNombre()

      console.log(Object.keys(objeto_3))
   
      let atributosObjeto_3 = Object.keys(objeto_3)
          atributosObjeto_3.forEach(function(item){
          console.log("Atributo y metodo", item)
      })

      let valoresObjeto_3 = Object.values(objeto_3)
          valoresObjeto_3.forEach(function(item){
          console.log("Valores", item)
      })

      console.log(objeto_3.hasOwnProperty("nombre") )

      /** 
      *  Operadores 
      */

      /* Aritmeticos 
         modulo % resto de una division 
      */

      let nro_5 = 5+5-10*3
      console.log(nro_5)

      let modulo = 10 % 3
      console.log(modulo)

      /*
      Relaciones ( >, <. ==, ===, !=, !==, >=, <=)

       =   -->  asignacion
       ==  -->  comparacion de valores
       === -->  comparacion de valores y tipo de variable
      */

      console.log(8>9)
      console.log(8<9)

      console.log(8>=9)
      console.log(8<=9) 
      console.log("*** 8== ****") 

      console.log(8==8) 
      console.log("8"==8) 
      console.log("9"==8) 

      console.log("*** === ****") 

      console.log(8===8) 
      console.log("8"===8) 

      /* Incremento y Decremento */

      let i = 1
      console.log(i)
      i += 3
      console.log(i)
      i /= 3
      console.log(i)

      /* operador unario */
      let b = 1
      b ++
      console.log(b)
      b --
      console.log(b)
      ++b 
      console.log(b)

      /* Operadores Logicos 
            !!""··$$%%¿¿''¡¡¿¿\\\\ºº!  ---> Not
            && ---> And
            !! ---> Or     
      */

      console.log(!true, true)

      console.log((9===9) || (9===10))

      console.log((9===9) && (9===10))

     /**
      * 
      * TEMA: ESTRUCTURA DE CONTROL
      * 
      */
      
      /* if - else */
      let edad = 17
      if ( edad > 17) {
        console.log('Eres mayor de edad')
      } else {
        console.log('Eres menor de edad')
      }

      /* if - else anidados*/
      let hora = 5

      if (hora >= 0 && hora <= 5 ) {
        console.log('Dejame dormir')
      } else if (hora >= 6 && hora <= 12 ) {
        console.log('Buenos Dias')
      } else if ( hora >= 13 && hora <= 18) {
        console.log('Buenas Tardes')        
      } else {
        console.log("Buenas noches") 
      }
        
      /* switch  ( CASE em otros lenguajes)
      * Si quiero utilizar un rango en el switch, tengo que switch (true) en lugar de 
      * switch (<nombre de variable)       
      */       
      
      console.log( '*********** switch ***********************')  
      
      let hora_s = 14;

      switch (true) {
          case (hora_s >= 0 && hora_s <= 5):
              console.log('Dejame dormir');
              break;
          case (hora_s >= 6 && hora_s <= 12):
              console.log('Buenos días');
              break;                        
          case (hora_s >= 13 && hora_s <= 18):
              console.log('Buenas tardes');
              break;
          default:
              console.log('Buenas noches');
      }
    
      let dia = 2;

      switch (dia) {
          case 0:
              console.log("domingo");
              break;
          case 1:
              console.log("lunes");
              break;
          case 2:
            console.log("martes");
              break;
          case 3:
            console.log("miercoles");
            break;
          case 4:
            console.log("jueves");
            break;
          case 5:
            console.log("viernes");
            break;
          case 6:
              console.log("sabado");
              break;
          default:
              console.log("Día no válido.");
              break;
      }  

      /*  
         TEMA: OPERADOR TERNARIO
         Operador Ternario, es un if else en una sola linea
        ( condicion ) ? verdadero : falsa
      */

      /**
       *   SIMPLE
       */

      console.log( '*********** OPERADOR TERNARIO ***********************')  

      let eresMayorEdad = (edad>18)? "Eres Mayor de Edad": "Eres Menor de Edad"     
      console.log(eresMayorEdad)
      /**
       *   COMPLEJO
       */ 
      let nota = 85;
      let resultado_1 = nota >= 90 ? "A"
                      : nota >= 80 ? "B"
                      : nota >= 70 ? "C"
                      : "F";
       console.log(resultado_1);  // "B"


      /** Ciclos repetitivos */

      console.log( '*********** WHILE ***********************')  

      /** While */

      let contador = 0
      while ( contador < 10) {
        console.log("contador ", contador)        
        contador ++         
      }

      console.log( '*********** DO WHILE ***********************')  

      /** Do While */

      do{ 
        console.log("contador ", contador)
        contador --
      } while ( contador >= 0 )


      console.log( '*********** FOR ***********************')  
      /** 
       * TEMA: FOR
       * For 
       *  Composion 
       *     for(inicializacion varible, condicion, )
       * */   

      
      const array = []

      for (let index = 0; index <= 10; index++) {
        array[index] = index *10        
      }

      console.log(array)

      for (let i = 0; i <= array.length -1; i++)
      {
        console.log("posicion: ", i, " valor: ", array[i])
      }

      /** For  in: Permite iterar un objeto ( EMC:6)
       *  Composion  for (variable objeto in objeto)       
       *  
       * */   

      console.log( '*********** FOR IN ********************')
      
      const pelicula = {
        nombre: "Star War",
        año: "1978",
        genero: "ciencia ficcion"
      }

      for (let elemento in pelicula) {      
        console.log(`elemento ${elemento} valor ${pelicula[elemento]}`)
      }

      /** For  off: Es igual al in pero permite iterar todo tipo de objeto.
       *  Composion  for (variable objeto of objeto)             
       * */   

      console.log( '*********** FOR OF ********************')

      for (let elemento of array) {
        console.log(`elemento array: ${elemento}`)
      }

      let cadena = "Hola mundo"
      
      for (let elemento of cadena) {
        console.log(`elemento array: ${elemento}`)          
      }

      /**
       *  TEMA: MANEJO DE ERORRES
       *  try, catch,  finally 
       *  throw new Error( ---> usa para lanzar un error manualmente
       */

      console.log( '*********** MANEJO ERRORES TRY CATCH ********************')

      try {
        console.log('Se agrega el codigo a evaluar' );
        noexiste
        console.log('Segundo mensaje despues del error' );
        
        
      } catch (error) {
        console.log('error' , error);
        
        console.log('Captura cualquier error lanzado en el try' );

        
      } finally {
        console.log('Se ejecutara siempre al final de un bloque try-catch' );        
      }
      
      try {
        let numero = 'a'
        if (isNaN(numero)){
          throw new Error('Debe ingresarse un nro')
        }
        let resultado = numero / 2
        console.log('Resultado', resultado );
        
      } catch (error) {
          console.log('Error', error );
                          
      } finally {
           console.log('Finalizo el Proceso:' );
      }
       /*      
       *  Break - Continue        
       *  Se puede utilizar solo en estructura de control simple
       *  For - While - Do While y switch
       *  break ---> Sale del buble
       *  continue ---> omite las sentencia del bucle pero sigue dentro del bucle
       */

      console.log( '*********** Break ********************')

      let numeros = [1,2,3,4,5,6,7,8,9]

      for ( let i = 0; i < numeros.length; i++) {
        if (numeros[i] ===5) {
          break
        }      
        console.log('numero', numeros[i] );                
      }
      
      console.log( '*********** Continue ********************')
      for ( let i = 0; i < numeros.length; i++) {
        if (numeros[i] ===5) {
          continue
        }      
        console.log('numero', numeros[i] );                
      }

      /**
       * 
       *   TEMA: DESTRUCTURACION
       *   Cuando asigno las variable se debe usar los elemento de cierre ( [] {} )
       *   En los objetos las variable y constantes se debe llamar igual que la propiedad 
       * 
       */

       console.log( '*********** DESTRUCTURACION ********************')

       let numeros_1 = [1,2,3]

       // Sin Desctructuracion //
       let uno  = numeros_1[0],
           dos  = numeros_1[1],
           tres = numeros_1[2]
          
       console.log('uno', uno, 'dos', dos, 'tres', tres );

       /**
        *  Con Desctructuracion               
       */

       const [one, two, three] = numeros_1

       console.log('one', one, 'two', two, 'three', three ); 

       let persona = {
        nombre_1: "Maxi",
        apellido_1: "Weihmuller",
        edad_1: 52
       }

       const {nombre_1, apellido_1, edad_1} = persona
       console.log('nombre', nombre_1, 'apellido ' , apellido_1, 'edad ', edad_1 );

       /**
       * 
       *   TEMA: OBJETOS LITERALES          
       *   En los objetos las variable y constantes se debe llamar igual que la propiedad 
       *   al momento de crer el objeto, las propiedades van a tener el mismo valor
       *   que las vadiable de mismo nombre, si la varrible cambian las propiedades no. 
       *   Las funciones se puedes escribir solo con el nombre acompañada por () y el 
       *   codigo entre {}
       * 
       */

       console.log( '*********** OBJETOS LITERALES ********************')

       let nombre_3 = 'Kaila',
           edad_3 = 3

       const gato = {
        nombre_3: nombre_3,
        edad_3: edad_3,
        maullar: function() {
          console.log('miauu, miauu' );          
        }
       }    

       console.log('gato', gato );
       gato.maullar();

       const cat ={
          nombre_3,
          edad_3,          
          raza: "Callejero",
          /* esta propiedad no tiene variable, le tengo que asignar un valor */
          maullar() {
            console.log('miauu, miauu' );          
          }
       }
       console.log('cat_2', cat );

       edad_3 = 5
       console.log('cat', cat );

       /**
        *   TEMA: PARAMETRO REST
        */
       console.log( '*********** PARAMETRO REST ********************')

       function sumar(a,b,...c) {
         let resultado = a+ b

         c.forEach(function(n) {
             resultado += n
         })
         return resultado                 
       }

       console.log('suma', sumar(1,2,3,4,5) );
       console.log('suma', sumar(1,2) );
       console.log('suma ( me falta un paramentro obligatorio) ', sumar(1) );
       console.log('suma', sumar(1,2,3) );

       /**
        *   TEMA: OPERADOR SPREAD
        */

       console.log( '*********** OPERADOR SPREAD ********************')
       
       const array_1 = [1,2,3,4,5]
       const array_2= [6,7,8,9,0]
       console.log(array_1,array_2);
       
       const array_3 = [array_1, array_2]
       console.log(array_3);

       const array_4 = [...array_1, ...array_2]
       console.log(array_4);

       /**
        *   TEMA: FUNCION FLECHA
        *   tiene el return explicito
        */

       console.log( '*********** FUUNCION FLECHA ********************')
       
       /*
          Una sola linea 
       */
       /* 
          Sin parametro
       */
       
          const saludar = () => console.log('Hola Mundo');
       saludar()

       /* 
          Con un solo paramtro
       */

       const saludar_2 = nombre => 'Hola '+ nombre;
       console.log(saludar_2('Maxi'))
         
       /* 
          Con varios paramtros
       */

       const saludar_3 = (nombre, apellido) => 'Hola '+ nombre + ' ' + apellido;
       console.log(saludar_3('Maxi', 'Weihmuller'))
       /* 
          Varias linea 
       */

       /* 
          Con un solo parametro
       */   


        const porMeno1 = a => {
            const resultado = a * -1
            console.log('Restar ', resultado  );
           
        }
        /* 
          Con varios paramtros
       */   
       
       const restar = (a,b) => {
           const resultado = a-b
           console.log('Restar ', resultado  );
          
       }

       restar(10,5);

       /**
        *   TEMA: PROTOTIPOS
        */

       console.log( '*********** P.O.O ********************')
       
       console.log( '*********** PROTOTIPOS ********************')

       console.log( '*********** FUNCION CONSTRUCTORA ********************')
       /**
        *   FUNCION CONSTRUCTORA CON METODO ASIGNADOS AL PROTOTIPO 
        *      ( DENTRO DE LA FUNCION )
        */
       function Animal(nombre, genero) {            
           // Atributos
           this.nombre = nombre
           this.genero = genero
           
           // Metodos
           this.sonar = function() {
               console.log(this.nombre, 'Hago sonar porque estoy vivo' );                
           }        

           this.saludar = function() {
               console.log(`Hola mi nombre es ${this.nombre}`);                
           }
       }

       const snoppy = new Animal("Snoppy", "Masculino"),
          lolaBunny = new Animal("Lola Bunny", "Hembra")

      console.log('snoppy ', snoppy );
      console.log('lolaBunny ', lolaBunny );

      snoppy.sonar()
      snoppy.saludar()


      /**
        *   FUNCION CONSTRUCTORA CON METODO AGREGADOS AL PROTOTIPO
        *       ( FUERA DE LA FUNCION )
      */
      function Animal_2(nombre, genero) {            
        // Atributos
        this.nombre = nombre
        this.genero = genero
        
        // Metodos
      }
      Animal_2.prototype.sonar = function() {
          console.log(this.nombre, 'Hago sonar porque estoy vivo' );                
      }        

      Animal_2.prototype.saludar = function() {
          console.log(`Hola mi nombre es ${this.nombre}`);                
      }
      
      const snoppy_2 = new Animal("Snoppy", "Masculino"),
            lolaBunny_2 = new Animal("Lola Bunny", "Hembra")
 
      console.log('snoppy', snoppy_2 );
      console.log('lolaBunny', lolaBunny_2 );

      snoppy_2.sonar()
      snoppy_2.saludar()

      /**
        *  TEMA: FUNCION PROTOTIPICA
        *       
      */
      console.log( '*********** FUNCION PROTOTIPICA ********************')
      
      function Perro ( nombre, genero, tamano ){
        this.super = Animal_2
        this.super(nombre, genero)
        this.tamano = tamano
      }

      /* Creacion de los constructores */
      
      Perro.prototype = new Animal_2
      Perro.prototype.constructor = Perro
      
      /*
         Sobre escritura de metodo 
      */
      Perro.prototype.saludar = function() {
        console.log(`Mi nombre es  ${this.nombre}, y tamaño es ${this.tamano}`)
      }

      Perro.prototype.ladrar = function() {
        console.log(`Guauu, Guauu`)
      }

      const coco = new Perro("Coco", 'Fox Terrier', 'Chico')
      console.log(coco)
      coco.saludar()
      coco.ladrar()

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

       /**
        *   TEMA: CONSOLA
        *   en el console se puede concatenar mensaje o varibles con "," o "+"
        *   comodines ---> %s (string), %d (numerico), %f flotantes, %i enteros,
        *   %o objetos, %c estilo ccs
        *   console.clear() ---> limpiar la consola
        *   console.dir ---> muestra todos los atributos 
        *   console.group --->  sirve para agrupar los console
        *   console.group collapse --> no funciona en chome
        *   console.table ---> muestra la informacion con una tabla
        *   console.time ---> Sirve para cronometra un pedazo de codigo
        *       console.time --- Empieza
        *   console.count ---> indica cuantas veces se ejecuto ciero pedazo de codigo
        *   console.assert(codicion,variable 1, variable 2, texto Salida)            
        *      ----> Permite hacer un testing
        */  

       console.log( '*********** CONSOLA ********************')
       console.log(console)

       console.error("error ---> Esto es un mensaje de error")
       console.warn ("warn   ---> Esto es un mensaje warning")
       console.info ("info   ---> Esto es un mensaje informativo")
       console.log  ("log     ---> Esto es un mensaje de registro ")

       console.log(`Mi nombre es %s %s y tengo %d`, nombre, apellido, edad)

       console.log("%cEste texto es rojo", "color: red;");
       // Salida: El Texto en color Rojo

       const obj = { nombre: "Juan", edad: 30 };
       console.log("El objeto es %o", obj);
       // Salida: El objeto es { nombre: "Juan", edad: 30 }

       console.clear()

       console.log(window)
       /// Objeto Ventana

       console.log('console.log document ', document)
       /// Objeto documento que representa el html en js

       console.dir(document)

       console.group ("Marcas Veihculos")
       console.group ("Autos")
       console.log("Renault")
       console.log("Ford")
       console.log("Merceces")
       console.log("FIN AUTOS")
       console.groupEnd()
       console.group ("Motos")
       console.log("Bugatti")
       console.log("Yamaha")
       console.log("Honda")       
       console.log("FIN MOTOS")
       console.groupEnd()              
       console.groupEnd()
       console.log("FIN GRUPOS")

       console.table(Object.entries(console).sort())

       console.log(numeros) 

       const vocales = ["a", "e", "i", "o", "u"]
       const numero_2 = [1,2,3,4,5]

       console.table(numero_2)
       console.table(vocales)

       console.table(perro_3) 

       console.time('Inicio')
       const array_5 = Array(1000000)

       for (i = 0; i< 100000; i++){
        array_5[i] = i
       }

       console.timeEnd( 'Inicio');
        
       for (i = 0; i< 100; i++){
        console.count("Se ejecuto el console.log")
        console.log(i)
       }
       
       let XX = 141,  
           YY = 140,
           prueba = "XX debe ser mayor que YY"
       
       console.assert(XX>YY,XX, YY, prueba)            

       /**
        *   TEMA: OBJETO: DATE 
        *   Contiene todas las funciones fecha
        *   Numero de dia ( getDay)
        *     0: Domingo
        *     1: lunes
        *     .....
        *     6: Sabado
        *   
        *   Numero de Mes ( getMonth ))  
        *     0: Enero
        *     1: Febrero
        *     .......
        *     11: December
        *   A todo las funciones de hora se el puede anteceder UTC, esto devuelve
        *  la hora del medidiano de Grewinch ( Londres )
        *  timestamp --> cantidad de segundos ocurrido desde 01/01/1970
       */

       console.log( '*********** DATE ********************')       
       console.log(Date)
       console.log(Date())

       let fecha = new Date()
       console.log('Fecha', fecha ); 
       console.log('Dia', fecha.getDate()); /* Numero de Dia */
       console.log('Nro Dia', fecha.getDay()); /* Numero de Dia */
       console.log('Mes', fecha.getMonth());
       console.log('Año', fecha.getFullYear()); 
       console.log('Hora', fecha.getHours()); 
       console.log('Minutos', fecha.getMinutes()); 
       console.log('Segundos', fecha.getSeconds()); 
       console.log('MiliSegundo', fecha.getMilliseconds()); 
       console.log('Fecha en MiliSegundo', fecha.getTime()); 
       console.log('Fecha en JSON: ', fecha.toJSON()); 
       console.log('Fecha en Caracter: ', fecha.toString()); 
       console.log('Fecha en Caracter(Solo Fecha): ', fecha.toDateString()); 
       console.log('Fecha en Caracter(Forma Reducida): ', fecha.toLocaleString()); 
       console.log('Fecha en Caracter(Solo Fecha): ', fecha.toLocaleDateString()); 
       console.log('Fecha en Caracter(Solo Hora): ', fecha.toLocaleTimeString()); 
       console.log('Fecha en timestamp: ', Date.now()); 
       
       /*
       let cumpleMaxi = new Date (1972,1,7)
       console.log(cumpleMaxi)
       */
       /**
        *   TEMA: LIBRERIA MOMENT 
       */ 
       console.log( '*********** LIBRERIA MOMENT ********************')       
       // Si usas Node.js, debes importar Moment
       // const moment = require('moment');

       // Crear un objeto de fecha con el momento actual
       let ahora = moment();
       console.log('Fecha y hora actual:', ahora.format('YYYY-MM-DD HH:mm:ss'));

       // Crear un objeto de fecha a partir de una fecha específica
       let fechaEspecifica = moment('2024-12-25', 'YYYY-MM-DD');
       console.log('Fecha específica:', fechaEspecifica.format('DD/MM/YYYY'));

       // Añadir 5 días a la fecha actual
       let nuevaFecha = ahora.add(5, 'days');
       console.log('Fecha después de añadir 5 días:', nuevaFecha.format('YYYY-MM-DD'));

       // Restar 3 meses de la fecha actual
       let fechaRestada = ahora.subtract(3, 'months');
       console.log('Fecha después de restar 3 meses:', fechaRestada.format('YYYY-MM-DD'));

       // Formatear una fecha de manera legible
       let fechaLegible = ahora.format('dddd, MMMM Do YYYY, h:mm:ss a');
       console.log('Fecha legible:', fechaLegible);

       // Comparar dos fechas
       let fecha1 = moment('2024-12-25');
       let fecha2 = moment('2024-12-30');

       if (fecha1.isBefore(fecha2)) {
           console.log('La fecha1 es antes de la fecha2');
       } else {
           console.log('La fecha1 no es antes de la fecha2');
       }

       // Obtener la diferencia entre dos fechas en días
       let diferencia = fecha2.diff(fecha1, 'days');
       console.log(`La diferencia entre las fechas es de ${diferencia} días.`);

       /**
        *   TEMA: OBJETO: MATH
        *   Contiene todas las funciones matematicas
       */

       console.log( '*********** OBJETO: MATH ********************')       

       console.log(Math)
       console.log('Nro PI', Math.PI );
       console.log('Valor ABS', Math.abs(-5) );
       console.log('Redondeo al proximo inmediato', Math.ceil(3.3) );
       console.log('Redondeo al anterior inmediato', Math.floor(7.8) );
       console.log('Redondeo', Math.floor(7.8) );
       console.log('Raiz Cuadrada', Math.sqrt(2) );
       console.log('Elevar', Math.pow(2,5) );
       console.log('Signo del numero', Math.sign(-2) ); // ( -1 Negativo 1 Positivo 0 Cero)
       console.log('Numero Aleatorio ( 0, 1 )', Math.random() );
       console.log('Numero Aleatorio ( 0, 1000 )', Math.round(Math.random() *1000 ))

       /**
        *    TEMA: OBJETO: OPERADOR CORTOCIRCUITO
        *    Cortocircuito OR
        *    Si el valor de la izquierda se puede validar a true
        *    se asigna valor de la izqierda caso contrario el valor de la darecha
        * 
        *    Cortocircuito AND
        *    Si el valor de la izquierda se puede validar a true
        *    se asigna valor de la derecha caso contrario el valor de la izquierda
        */

       console.log( '*********** OPERADOR CORTOCIRCUITO ********************')       

       function saludar_1(nombre_5) {
           let nombre_4 = nombre_5 || "Desconocido"
           console.log('nombre', nombre_4 );                   
       }

       saludar_1("Maxi")
       saludar_1()

       function saludar_4(nombre_6) {
        let nombre_7 = nombre_6 && "Deconocido"
        console.log('nombre', nombre_7 );                   
    }

    saludar_4("Maxi")
    saludar_4()

    /**
        *   TEMA: ALERT CONFIRM PROMPT
        *   ALERT: aparece una ventana de alerta ( 1 boton )
        *       NO DEVUELVE NADA
        *   CONFIRM: aparece una ventana de confirmacion ( 2 botones )
        *       DEVUELVE TRUE   ---> BOTON ACEPTAR
        *                FALSE  ---> BOTON FALSE
        *   AVISO : aparece una ventana para escribir algo
        *       DEVUELVE ---> EL MENSAJE INGRESADO ( BOTON ACEPTAR)     
        *                     NULL ( BOTON CANCELAR)
        */

    console.log( '*********** ALERT CONFIRM PROMPT ********************')       
    console.log('window', window );
    
    //alert("Hola esto es una alerta")
    //confirm("Hola esto es una Confirmacion")
    //prompt("Hola esto es un prompt y le permite al usuario e ingresa un valor")
  
/*  Se comentar para no molestar en la ejecucion 
    let alerta = alert("Hola esto es una alerta")
    let confirmacion = confirm("Hola esto es una Confirmacion")
    let aviso = prompt("Hola esto es un prompt y le permite al usuario e ingresa un valor")

    console.log("alert", alerta)
    console.log("confirmacion", confirmacion)
    console.log("aviso", aviso)
 */   
    /**
     *  TEMA: EXPRESIONES REGULARES
     *  1 Forma 
     *  = new RegExp("<expresion>",<bandera>)      
     *   
     *  2 Forma
     *  = /<expresion>/<bandera> 
     * 
     * <bandera> g ---> seguir buscando 
     *           i ---> ignorar mayuscula y minuscula
     *  
     *  Evaluarla
     *  expReg.test(<cadena_1>, 'bandera')
     *     devuelve true o false
     *     
     *  expReg.exec(<cadena_1>, 'bandera')
     *     devuelve un array con la ocurrencias encontradas
     *   
     *      
     *  
     *  Ejemplos ( mas comunes )  
     *  1. Coincidir con un correo electrónico válido
     *  ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
     * 
     *  2. Coincidir con un número entero  
     *    ^-?\d+$
     * 
     *  3. Coincidir con un número decimal (flotante)
     *    ^-?\d+\.\d+$
     * 
     *  4. Coincidir con una fecha en formato YYYY-MM-DD
     *    ^\d{4}-\d{2}-\d{2}$
     * 
     *  5. Coincidir con una URL válida
     *    ^https?:\/\/(?:www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$
     * 
     *  6. Coincidir con un número de teléfono (formato internacional)
     *    ^\+?[1-9]\d{1,14}$
     * 
     *  7. Coincidir con una dirección IP (IPv4)
     *    ^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$
     * 
     *  8. Coincidir con un número binario (0s y 1s)
     *    ^[01]+$
     * 
     *  9. Coincidir con un código postal (solo números, longitud 5)
     *    ^\d{5}$
     * 
     * 10. Coincidir con una cadena que contiene solo letras y espacios
     *   ^[A-Za-z\s]+$
     * 
     * 11. Coincidir con una palabra con al menos 3 caracteres
     *   ^\w{3,}$
     * 
     * 12. Coincidir con un número positivo (sin signo negativo)
     *    ^\d+$
     * 
     * 13. Coincidir con un nombre de usuario (entre 3 y 16 caracteres)
     *   ^[a-zA-Z0-9_]{3,16}$
     * 
     * 14. Coincidir con una cadena que no contenga números
     *   ^[^0-9]+$ 
     * 
     * 15. Coincidir con una secuencia de 3 letras seguidas de 4 números
     *   ^[A-Za-z]{3}\d{4}$
     * 
     * 16. Coincidir con una contraseña (al menos 8 caracteres, al menos una letra y un número)
     *   ^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$
     * 
     * 17.  Coincidir con una palabra que empiece con una vocal
     *   ^[aeiouAEIOU]\w*$
     * 
     * 18. Coincidir con cualquier cadena que contiene "abc"
     *   .*abc.*
     * 
     * 19. Coincidir con un número con un máximo de 2 decimales
     *   ^\d+(\.\d{1,2})?$
     *  
     * 20. Coincidir con un número de teléfono con formato (xxx) xxx-xxxx
     *   ^\(\d{3}\) \d{3}-\d{4}$
     */

    console.log( '*********** EXPRESION REGULAR ********************')       
    
    let cadena_1 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Beatae possimus voluptate voluptatum dolores tenetur consequatur praesentium 
             animi est harum cum, laudantium labore veniam, odio eius soluta natus, 
             expedita necessitatibus magni.lorem`
    let expReg = new RegExp("lorem","i") /* 1era Forma */
    let expReg_1 = /lorem/ig             /* 2da Forma */ 
    let expReg_2 = /\d/                 /* Que contenga numero */ 
    let expReg_3 = /[0-5]/              /* Que contenga numero de 0 al 5*/ 
    let expReg_4 = /lorem{1,3}/ig      /*  Que contenga Lorem entre 1 y 3 veces*/ 

   console.log(expReg.test(cadena_1)) /* 1era Forma de Testeo */
   console.log(expReg.exec(cadena_1)) /* 2da Forma de Testeo */

   console.log(expReg_1.test(cadena_1)) 
   console.log(expReg_1.exec(cadena_1)) 

   console.log(expReg_2.exec(cadena_1))
   console.log(expReg_3.exec(cadena_1))
   console.log(expReg_4.exec(cadena_1))