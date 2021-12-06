const express = require('express');
const app=express();
const port = 8088;

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/', function(req,res){
    res.json({nom:"Tomi",age:5});
})

app.listen(port,()=>{
    console.log('le serveur fonctionne sur le port:'+port);
})