
/** Codigo Sincrono bloqueante 
 *   JS usa un modelo asincrono y no bloqueante
 *   con un loop de eventos implementado en un solo 
 *   hilo (simple thead) para operaciones de entrada
 *   y salida (input/output)
*/
(()=>{
    

    function dos(){
        console.log("Dos")        
    }

    function uno (){
        console.log("Uno")
        dos()
        console.log("Tres")
    }

    console.log("Codigo Asincrono")
    console.log("Inicio")

    uno();
    console.log("Fin")
    console.log(" ***********************   ")

})();

/** Codigo ASincrono No bloqueante */
(()=>{
    

    function dos(){
        setTimeout( function() {
            console.log("Dos")},1000)   
    }

    function uno (){
        setTimeout( function() { 
            console.log("Uno")},0)
        dos()
        console.log("Tres")
    }

    console.log("Codigo Asincrono")
    console.log("Inicio")

    uno();
    console.log("Fin")

})();
