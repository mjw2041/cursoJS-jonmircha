 (function() {  
    console.log(" Mi primer funcion anonima funciones anonimas")
  })();
  

  (function(a,b) {
    const resultado = a + b;
    console.log(" Mi Segunda funcion anonima")
  })(5,6);

  (function(d,w,c) {    
    console.log(d)
    console.log(w)
    console.log(c)
  })(document,window,console);