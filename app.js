const express = require('express');
const ejs= require('ejs');
const jsonfile = require('jsonfile');
const bdd = require('./controller.js');
const app = express();
app.use(express.urlencoded({extended:true}));

app.set('views',__dirname + '/mesvues');//repertoire contenant les templates
//declaration du moteur de template utilisé
app.set('view engine','ejs');//https://ejs.co

//déclaration d'une route et d'une fonction de callback
app.get('/',function(req,res){
    res.render('index');
})

app.get('/route1',function(req,res){
    res.render('datas1',{resultat : "bravo!"})
})

app.get('/route2/:param1/:param2',function(req,res){
    // console.log(req.params);
    res.render('datas2',{p1:req.params.param1, p2:req.params.param2});
})

app.get('/route3', function(req,res){
    let donnees = jsonfile.readFileSync('modeles/datas.json');
    console.log('donnees');
    res.render('datas3',donnees);
})

app.get('/route5',function(req,res){
    bdd.getAll("articles", function(articles) {
        console.log(articles);
        res.render("index");
    })
})


app.get('/route6', function(req,res){
    res.render("crearticle");
})

app.post('/addarticle', function(req,res){
    console.log(req.body);
})

app.listen(8082);