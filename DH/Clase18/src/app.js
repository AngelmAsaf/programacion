const express = require('express')
const path = require ('path');
const app = express()
//console.log("estamos por aqui")
//console.log (app);

//Creando nuestras rutas
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'/views/index.html'));
})


//Levantar el servidor
app.listen(3001, function(){
    console.log("srvidor corriendo en el puerto 3001")

})