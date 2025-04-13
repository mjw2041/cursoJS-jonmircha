function cuadradoCallback(numero, callback) {
    setTimeout(() => {
      callback(numero,numero * numero)  
    }, Math.random()*1000 );
}


console.log("Empezo")

cuadradoCallback(0, (value, result)=> {
        console.log("Inicia Callback")        
        console.log(`Callback: ${value} resultado ${result}`)
        cuadradoCallback(1, (value, result)=> {      
            console.log(`Callback: ${value} resultado ${result}`)
            cuadradoCallback(2, (value, result)=> {      
                console.log(`Callback: ${value} resultado ${result}`)
                cuadradoCallback(3, (value, result)=> {      
                    console.log(`Callback: ${value} resultado ${result}`)
            })
        })
    })
})
