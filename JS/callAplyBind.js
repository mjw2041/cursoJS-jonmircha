/*
     call, apply y bind en JavaScript. 
     Los tres sirven para manipular el contexto de ejecución de una función, es decir,
     para establecer el valor de this dentro de esa función.

     Aply, 
     Es casi igual que call(), pero los argumentos se pasan como array.

     bind()
     Devuelve una nueva función con this ya vinculado, pero no la ejecuta inmediatamente.

      Usa call o apply si quieres ejecutar la función inmediatamente con un contexto específico.
      Usa bind si quieres crear una función nueva con el contexto ya definido, para usarla más adelante.

-*/
console.log(this)
this.lugar =  "Contexto Global"

function saludar(saludo, aQuien) {
      console.log(`${saludo} ${aQuien} desde ${this.lugar}`)      
}

const obj = {
      lugar: "Contexto Objeto"
}

saludar("Hola", "Maxi")
saludar.call(null,"Hola", "Maxi") /* null contexto global */
saludar.call(this,"Hola", "Maxi") /* null contexto global */
saludar.call(obj,"Hola", "Maxi")
saludar.apply(obj,["Hola", "Maxi"])

const persona = {
      nombre:"Jon",
      saludar: function() {
            console.log(`Hola ${this.nombre}`)
      }
}

persona.saludar()

const otraPersona = {
      saludar: persona.saludar.bind(persona)
}

otraPersona.saludar.bind(persona)