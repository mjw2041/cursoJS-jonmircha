

const objUsuario = {}
console.log(objUsuario)


const usuarios = ["jon", "Irma", "Miguel", "Kala", "kEnAi"]
usuarios.forEach((usuario,index) =>  {objUsuario[`id_${index}`]=usuario})
console.log(objUsuario)

const aleatorio = Math.round(Math.random(Math.random()*100))
const objUsuario_1 = {
    propiedad: "Valor",  /*  propiedad comun */
    [`nro ${aleatorio}`]: "Valor aleatorio"
}
console.log(objUsuario_1)


