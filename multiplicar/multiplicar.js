//Requireds
const fs = require('fs');
const colors = require('colors');

colors.setTheme({ verbose: 'cyan' });

let listarTabla = (base, limite) => {
    let concat = '';
    for (let inicio = 1; inicio <= limite; inicio++) {
        concat = `${base} * ${inicio} = ${base*inicio} \n`;
        console.log(concat);
    }

}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if ((!Number(base)) || (!Number(limite))) {
            reject(`${base} o ${limite} no es un numero`);
            return;
        }

        let imprimir = '';

        for (let a = 1; a <= limite; a++) {
            imprimir += `${base} * ${a} = ${base*a} \n`;
        }

        const data = new Uint8Array(Buffer.from('Hello Node.js'));
        //Ubicacion - contenido - errores
        fs.writeFile(`tablas/tabla-${base}.txt`, imprimir, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`.red);
        });
    });
}


module.exports = {
    crearArchivo,
    listarTabla
}