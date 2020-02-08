const argv = require('yargs')
                .command('listar','imprime en consola la tabla de multiplicar',{
                    base:{
                        //demand = obligatorio
                        demand:true,
                        // base = b
                        alias: 'b'
                    },
                    limite:{
                        alias:'l',
                        //default = valor por defecto
                        default:10
                    }
                })
                .command('crear','comando que permite crear tablas',{
                    base:{
                        //demand = obligatorio
                        demand:true,
                        // base = b
                        alias: 'b'
                    },
                    limite:{
                        alias:'l',
                        //default = valor por defecto
                        default:10
                    }
                })
                .help()
                .argv;


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

//console.log('limite', argv.limite);
//console.log(argv2);

/*let parametro = argv[2];
let dividir = parametro.split('=');
let base = dividir[1];
console.log(base);*/


