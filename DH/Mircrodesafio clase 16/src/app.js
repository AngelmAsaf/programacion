const express = require('express');
const path = require('path');
const app = express();


app.listen(3030, () => console.log('servidor corriendo.'))

app.use(express.static('public'));
//app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/index.html'))
})
//DIFERENCIA EN EL RESOLVE VA UN . ANTES DEL VIEW
app.get('/babbage', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/babbage.html'))
})
// AQUI EN EL JOIN NO VA EL .
app.get('/berners-lee', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/berners-lee.html'))
})

app.get('/clarke', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/clarke.html'))
})

app.get('/hamilton', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/hamilton.html'))
})

app.get('/lovelace', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/lovelace.html'))
})

app.get('/hopper', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/hopper.html'))
})

app.get('/turing', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/turing.html'))
})
app.get('/salem', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/salem.html'))
})


