// solo ocupo de la confi el argv
//en ves de argv.argv.base 

const argv = require('./config/yargs').argv;
const colors = require('colors');



const {crearArchivo, ListarTablas} = require('./multiplicar/multiplicar');


let argv2 = process.argv;

let comando = argv._[0];

switch (comando) {
    case 'listar':
        ListarTablas(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado ${archivo}`.inverse))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');
}





