//Clase 10
//Métodos de arrays - Archivos JSON
//.map() - .filter() - .reduce() - .find() -.forEach() - .for of - .for in 
//.map()
let pasajesSubte = [70,50,80,110,120,70];
//A cada uno de los pasajes le voy aaumentar un 10%
//let pasajesAumentados = pasajesSubte.map(function(pasaje){
//    return ((pasaje * 10)/100) + pasaje;
//});
/*
let pasajesAumentados = pasajesSubte.map((pasaje)=> {
    return ((pasaje * 10)/100) + pasaje;
});*/


let pasajesAumentados = pasajesSubte.map(pasaje=> ((pasaje * 10)/100) + pasaje);

console.log(pasajesSubte);
console.log(pasajesAumentados);


//.filter()
/*
let pasajesCaros = pasajesSubte.filter(function(pasaje){
    return pasaje >= 80;
});*/

let pasajesCaros = pasajesSubte.filter(pasaje =>  pasaje >= 80);



console.log(pasajesSubte);
console.log(pasajesCaros);

/*
let pasajesTotal = pasajesSubte.reduce(function(total,pasaje){
    return total + pasaje;
});
*/

let pasajesTotal = pasajesSubte.reduce((total,pasaje)=> total + pasaje);


/* poniendo de arranque 500
let pasajesTotal = pasajesSubte.reduce(function(total,pasaje){
    return total + pasaje;
},500);
*/
console.log(pasajesTotal);


//.find()
let pasajeEncontrado = pasajesSubte.find(function(pasaje){
    return pasaje === 50;
});

console.log(pasajeEncontrado);

//.forEach()
pasajesSubte.forEach(function(pasaje,indice){
    console.log(`El pasaje de la posicion ${indice} contiene el valor de: $${pasaje}`);
})

//Demostración en vivo y directo y cualquier cosa puede pasar
document.write(`<h1 style= "color:red">Listado de los pasajes del Subte</h1>`);
document.write('<ul style="color:blue">');
pasajesSubte.forEach(function(pasaje,indice){
    //console.log(`${indice} ${pasaje}`);
    //Enviado por Emir
    document.write(`<li>El pasaje de la posición ${indice} contiene el valor de: $${pasaje}</li>`);
})
document.write('</ul>')

