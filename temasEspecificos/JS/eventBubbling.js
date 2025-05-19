console.log("Hola desde Event Bubbing")
/* 
     URL: https://www.youtube.com/watch?v=WtTLkE1SQFg&t=378s --- 😎 Leyendo HTML con SELECTORES desde Javascript 😄 DOM
     URL: https://www.youtube.com/watch?v=03eid8Lc8V8&t=102s --- CÓMO manejar EVENTOS en Javascript 🤔 Event Listeners 😄 DOM
     URL: https://www.youtube.com/watch?v=xlci1S08Cww&list=LL
*/
console.log(document)
console.log(document.getElementById("cabecera")) // Selector por Id
console.log(document.getElementsByClassName("border-grey")) // Selector por clase  -- Devuelve un HTTPCOLECTION
console.log(document.getElementsByTagName("nav")) // Selector por TAG  -- Devuelve un HTTPCOLECTION
console.log(document.getElementsByName("nombreCabecera")) // Selector por Nombre  -- Devuelve un NodeList
/* Por valores CSS */
console.log("Por valores CSS") 
console.log(document.querySelectorAll("li")) // Selector por TAG  -- Devuelve un Node List
console.log(document.querySelectorAll(".border-grey")) // Selector por Clase  -- Devuelve un Node List
console.log(document.querySelectorAll("#cabecera")) // Selector por ID  -- Devuelve un Node List
/*console.log(document.querySelectorAll(["name =nombreCabecera"])) // Selector por name  -- Devuelve un Node List*/
console.log(document.querySelectorAll('[name="nombreCabecera"]')); // Selector por atributo name