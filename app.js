
const {crearArchivo} = require('./multiplicar/multiplicar');

let base = 'hola'



crearArchivo(base)
    .then(archivo => console.log(`archivo creado ${archivo}`))
    .catch(e => console.log(e));

