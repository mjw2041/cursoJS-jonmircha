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