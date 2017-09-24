var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');



router.get('/', function(req, res){
    burger.selectAll(function(data){
        res.render('index', {burgers: data});
    });
    
});

router.post('/', function(req, res){
    burger.insertOne("burger_name",req.body.burgerName, function(){
        res.redirect('/');
    });
    
});

router.put('/:id', function(req, res){
    var condition = " id = "+ req.params.id;
    burger.updateOne("devoured", true, condition, function(data){
        res.redirect('/');
    });
    
});


module.exports = router;