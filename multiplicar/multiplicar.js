const fs = require('fs');

let ListarTablas = (base, limite = 10) => {

    for(let i=1; i <=limite; i++){
        
        console.log(`${base} * ${i} = ${base * i}`);
    } 

}

let crearArchivo = (base, limite = 10) => {

    return new Promise ((resolve, reject) => {

        if(!Number(base)){
            reject(`el valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for(let i=1; i <=limite; i++){
            //data va guardando todos los resultados
            data += (`${base} * ${i} = ${base * i}\n`);
        } 



        fs.writeFile(`tablas/tabla-${base} al ${limite}.txt`, data , (err) => {
            if (err) 
                reject( err)
            else
                resolve(`tabla ${base} al ${limite}.txt`);
            
        });


    });
}

module.exports = {
    crearArchivo,
    ListarTablas
}

