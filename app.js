// solo ocupo de la confi el argv
//en ves de argv.argv.base 


const argv = require('./config/yargs').argv;


const {crearArchivo, ListarTablas} = require('./multiplicar/multiplicar');


let argv2 = process.argv;

let comando = argv._[0];

switch (comando) {
    case 'listar':
        ListarTablas(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');
}


/*let parametro = argv[2];
let dividir = parametro.split('=');
let base = dividir[1];
console.log(base);*/


