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
                .help()
                .argv;


const {crearArchivo} = require('./multiplicar/multiplicar');




let argv2 = process.argv;

//console.log(argv.base);
console.log('limite', argv.limite);
//console.log(argv2);

/*let parametro = argv[2];
let dividir = parametro.split('=');
let base = dividir[1];
console.log(base);*/


/*
crearArchivo(base)
    .then(archivo => console.log(`archivo creado ${archivo}`))
    .catch(e => console.log(e));
*/
