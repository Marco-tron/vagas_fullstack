const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');
const Product = require ('../models/Product');


const router = express.Router();

router.post('/', async(req,res) =>{
    try{
        const product = await Product.create(req.body);

        return res.send({product});
    }
    catch(err) {
        return res.status(400).send({error:'Product registration failed'});
    }
})

router.get('/', function(req, res, next) {
    Product.limit(1).find(function (err, products) {
      
      if (err) return next(err);
      res.json(products);
    });
});

router.put('/:id', function(req, res, next) {
    Product.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
      
    });
});

router.delete('/:id', function(req, res, next) {
    Product.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
});


module.exports=app => app.use('/data/products',router)