console.log("DOM manipulation script loaded");
console.log(window)
console.log(document)

let texto = "Hola soy tu amigo y docente digital jonathan Mircha"

const hablar = (texto) => { 
    const speech = new SpeechSynthesisUtterance(texto);
    speech.lang = "es-ES";
    window.speechSynthesis.speak(speech);
}

hablar()

