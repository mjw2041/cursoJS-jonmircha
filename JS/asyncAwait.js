
function cuadradoPromise(value) {    
    if (typeof value!= "number") 
            return Promise.reject(`Error el valor ${value} ingresado no es numerico`);
    return new Promise((resolve, reject) => {  // Aquí devolvemos un Promise
        setTimeout(() => {
            resolve({
                value: value,
                result: value * value  
            });
        }, 0);
    }); 
}

async function funcionAsincronicaDeclarada() {
    try{

        let obj = await cuadradoPromise(0)
        console.log(`Async function: ${obj.value}  ${obj.result}`)
        
        obj = await cuadradoPromise(1)
        console.log(`Async function: ${obj.value}  ${obj.result}`)

        obj = await cuadradoPromise(1)
        console.log(`Async function: ${obj.value}  ${obj.result}`)

        obj = await cuadradoPromise(2)
        console.log(`Async function: ${obj.value}  ${obj.result}`)

        obj = await cuadradoPromise(3)
        console.log(`Async function: ${obj.value}  ${obj.result}`)

        obj = await cuadradoPromise(4)
        console.log(`Async function: ${obj.value}  ${obj.result}`)
        
        obj = await cuadradoPromise('A')
        console.log(`Async function: ${obj.value}  ${obj.result}`)


    } catch (error) {
           console.error(error)
    }
}

const funcionAsincronicaExpresada = async () => {
    try{

        let obj = await cuadradoPromise(6)
        console.log(`Async function: ${obj.value}  ${obj.result}`)
        
        obj = await cuadradoPromise(7)
        console.log(`Async function: ${obj.value}  ${obj.result}`)

        obj = await cuadradoPromise(8)
        console.log(`Async function: ${obj.value}  ${obj.result}`)

        obj = await cuadradoPromise(9)
        console.log(`Async function: ${obj.value}  ${obj.result}`)

        obj = await cuadradoPromise(10)
        console.log(`Async function: ${obj.value}  ${obj.result}`)

        obj = await cuadradoPromise('A')
        console.log(`Async function: ${obj.value}  ${obj.result}`)
        


    } catch (error) {
           console.error(error)
    }

}

funcionAsincronicaDeclarada()

funcionAsincronicaExpresada()



