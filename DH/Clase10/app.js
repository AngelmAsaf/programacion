//app.js
const fs = require('fs');

let miFamilia = fs.readFileSync('./familia.json','utf-8');

//Como convierto un archivo JSON  a un Objeto literal
console.log(miFamilia);
//Pasar de un archivo en formato JSON a un objeto literal
let arrayMiFamilia = JSON.parse(miFamilia);
console.log(arrayMiFamilia); 

console.log('Recorriendo el array de mi Familia');
for (const familia of arrayMiFamilia) {
    console.log(familia.nombre);
}