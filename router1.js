var express = require('express');
var router = express.Router();

router1.use(function timeLog(res,res,next){
    console.log('Requested URI path : ',res.url);
    next();
})

router1.get('/',function (req,res){
    res.send('Racine de l api router1');
})

router1.get('/about',function (req,res){
    res.send('a propos');
})

module.exports = router1;