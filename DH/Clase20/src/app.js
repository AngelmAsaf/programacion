const express = require('express');
const path = require('path');
const app = express();
//console.log('Estamos por aquí');
//console.log(app);

//Donde estan mis recursos estáticos
app.use(express.static(path.resolve(__dirname,'../public')));

//Creando nuestras rutas
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'/views/home.html'));
})

//Levantar el servidor
app.listen(3001, function(){
    console.log('Servidor corriendo en el puerto 3001');
})