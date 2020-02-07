const fs = require('fs');


let base = 3;
let data = '';

for(let i=1; i <=12; i++){
    //data va guardando todos los resultados
    data += (`${base} * ${i} = ${base * i}\n`);
} 



fs.writeFile(`tablas/tabla-${base}.txt`, data , (err) => {
    if (err) throw err;
    console.log(`el archivo tabla ${base} ha sido creado`);
  });
