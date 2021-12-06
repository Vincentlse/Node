var express = require('express');
var app2 = express();

var router1 = require('./router1');
app2.use('/api/,router1');

var server = app.listen(8000, function(){
    console.log('le serveur ecoute sur le port 8000');
})