const opciones = {
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

}

const argv = require('yargs')
                .command('listar','imprime en consola la tabla de multiplicar',opciones)
                .command('crear','comando que permite crear tablas',opciones)
                .help()
                .argv;

                
module.exports = {
    argv
}