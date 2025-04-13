export const valorMaximo = 50 

export  function getTipoDatos(mensaje) {
    if  ( mensaje === null) {
        return 'vacia'
    }  else if (typeof mensaje === 'object' && mensaje !== null) {         
            return 'objeto'
    } else {
        return typeof mensaje
    }    
}