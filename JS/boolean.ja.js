/*
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