const importar = require('./collectibles');
//console.log(collectibles('Star Wars'));
let hotToys = importar('Hot Toys');
let bandai = importar('Bandai') 
let starWars = importar('Star Wars')

//console.log(bandai);
let unifiedCollectibles = [...hotToys,...bandai,...starWars];
console.log(unifiedCollectibles);