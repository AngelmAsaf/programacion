let { log } = require('console');
let fs = require('fs');


let bicicletasJSON = fs.readFileSync('bicicletas.json', 'utf8');
let bicicletas = JSON.parse(bicicletasJSON);

module.exports = { bicicletas };