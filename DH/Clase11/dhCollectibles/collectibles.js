const fs = require('fs');
const path = require('path');

function importar(marca){
    if(marca === 'Hot Toys'){
        return JSON.parse(fs.readFileSync(path.resolve(__dirname,'./datos/figuras1.json')));
    }else if(marca === 'Bandai'){
        return JSON.parse(fs.readFileSync(path.resolve(__dirname,'./datos/figuras2.json')));
    }else if(marca === 'Star Wars'){
        return JSON.parse(fs.readFileSync(path.resolve(__dirname,'./datos/figuras3.json')));
    }else if(marca === ''){
        return 'Debes enviar almenos una marca'
    }
}

module.exports = importar;
/*
Aquí con switch:
function importar(marca){
    switch (marca){
        case "Hot Toys":
            return JSON.parse(fs.readFileSync(path.resolve(__dirname,"./datos/figuras1.json")))
        case "Bandai":
            return JSON.parse(fs.readFileSync(path.resolve(__dirname,"./datos/figuras2.json")))
        case "Star Wars":
            return JSON.parse(fs.readFileSync(path.resolve(__dirname,"./datos/figuras3.json")))
        default:
            console.log("No ha ingresado una marca válida, reintente")
    }
}*/