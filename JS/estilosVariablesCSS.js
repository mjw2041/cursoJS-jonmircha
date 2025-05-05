console.log("Hola Mundo desde el archivo EstilosVariablesCSS.html");

const $linkDOM = document.querySelector(".link-dom"); // Selecciona el elemento <link-dom> del HTML
console.log($linkDOM.style); // Muestra el objeto CSSStyleDeclaration del elemento <link-dom> en la consola
console.log($linkDOM.getAttribute("style")); // Muestra el atributo "style" del elemento <link-dom> en la consola
/**
 *  la diferencia radica en  el segundo caso solo muestra las propidades que tiene valor 
 */
console.log($linkDOM.style.backgroundColor); //

console.log(window.getComputedStyle($linkDOM)); //
console.log(window.getComputedStyle($linkDOM).getPropertyValue("color")); //


setTimeout(() => {
    $linkDOM.style.setProperty("text-decoration", "none")
    $linkDOM.style.setProperty("display", "block")
    $linkDOM.style.width = "50%"
    $linkDOM.style.textAlign = "center"
    $linkDOM.style.marginLeft = "auto"
    $linkDOM.style.marginRight = "auto"
    $linkDOM.style.padding = "1rem"
    $linkDOM.style.borderRadius= "0.5rem"
    
    console.log(" ***************** "); // Muestra el objeto CSSStyleDeclaration del elemento <link-dom> en la consola
    console.log($linkDOM.style); // Muestra el objeto CSSStyleDeclaration del elemento <link-dom> en la consola
    console.log(" ***************** "); // Muestra el objeto CSSStyleDeclaration del elemento <link-dom> en la consola
    console.log($linkDOM.getAttribute("style")); // Muestra el atributo "style" del elemento <link-dom> en la consola

}, 3000);

// Variables CSS    -- Custom Property

const $html = document.documentElement,
      $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color")

console.log(varDarkColor, varYellowColor)    

$body.style.backgroundColor = varDarkColor
$body.style.color = varYellowColor

/* Cambiar lor valores */
$html.style.setProperty("--dark-color", "pink")
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")
console.log(varDarkColor)    

$body.style.setProperty("background-color",varDarkColor)