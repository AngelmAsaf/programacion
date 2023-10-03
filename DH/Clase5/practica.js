//Funciones
//Funciones declaradas
//                  Parametros 
//Global
/*
let palabras = 'saludos a todos';

function mayusculas(palabras){
    //      Local
    //console.log(palabras);
    return palabras.toUpperCase();
}


console.log(palabras);
//                                  Argumento - Valores
let palabrasMayusculas = mayusculas('hola como vamos');
let palabrasMayusculas1 = mayusculas('espero que todo este bien');
console.log(palabrasMayusculas);
console.log(palabrasMayusculas1);
*/

//Funciones expresadas
/*
let mayusculas = function(palabras){
    return palabras.toUpperCase();
}

let palabrasMayusculas = mayusculas('hola como vamos');
let palabrasMayusculas1 = mayusculas('espero que todo este bien');
console.log(palabrasMayusculas);
console.log(palabrasMayusculas1);
*/

//Funciones Flechas - Arrow Function - Ecma Script -6 // ES-2016 ES-2020
//https://lenguajejs.com/javascript/introduccion/ecmascript/
//let mayusculas = (palabras)=>{
//    return palabras.toUpperCase();
//}

let mayusculas = (palabras)=> palabras.toUpperCase();

let palabrasMayusculas = mayusculas('hola como vamos');
let palabrasMayusculas1 = mayusculas('espero que todo este bien');
console.log(palabrasMayusculas);
console.log(palabrasMayusculas1);

