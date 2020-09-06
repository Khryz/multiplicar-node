const argv = require('./config/yargs').argv; //No se carga todo el doc, sino solo el metodo que queremos
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); //.pleca para meterte en dircetorios
const colors = require('colors');


//Aqui empiezan comandos independientes "listar", "Crear","Borrar" en comandos creados por nosotros en consola 

/*Para crear un argumento como los antes mencionados, debemos de crear arriba en la parte del require de argv 
otro: 

.command('palabraClave','descripcion',{base:{demand:true,alias:'b'},limite:{default:10,alias:'l'}})

Una vez CredentialsContainer, vamos a mandar los parametros dependiendo lo que sea necesario si es una
funcion normal de flecha o si es una promesa*/


let comando = argv._[0]; //muestra en comandos lo que escrinimos, ya que se almacenan en arreglos/objetos 

switch (comando) {
    case 'crear':
        //console.log(argv.base, argv.limite);
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`.green))
            .catch(err => console.log(err));
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}
/*
//console.log(argv.base);
//console.log(argv.limite);

let argvXD = process.argv;
let parametro = argvXD[2];
let base = parametro.split('=')[1];
//console.log(base);


//console.log(multiplicar);*/