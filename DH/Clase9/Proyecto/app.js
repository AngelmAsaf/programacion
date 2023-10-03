//Recordar que siempre se debe especificar la ruta donde tengo ese módulo
//                          Ruta relativa
let peliculas = require('./modulos/peliculas');
//console.log(misPeliculas[1].nombre);
let mostrar = require('./modulos/mostrarDetallesPeliculas')


//Importar un modulo nativo
let fs = require('fs')


mostrar(peliculas);

//https://nodejs.org/dist/latest-v6.x/docs/api/fs.html#fs_fs_readfile_file_options_callback

let rutaArchivo = 'mensaje.txt'
fs.readFile(rutaArchivo, 'utf-8', (err, data) => {
    if(err){
        console.log(`Error al leer el archivo ${rutaArchivo}: ${err.mensaje}`);
    }
    else {
        console.log(data);
    }
    }
)