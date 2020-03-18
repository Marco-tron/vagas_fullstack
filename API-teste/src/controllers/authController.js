const express = require('express');

const Product = require ('../models/Product');
const Store = require ('../models/Store');

const router = express.Router();

router.post('/products', async(req,res) =>{
    try{
        const product = await Product.create(req.body);

        return res.send({user});
    }
    catch(err) {
        return res.status(400).send({errpr:'Product registration failed'});
    }
})

router.post('/stores', async(req,res) =>{
    try{
        const store = await Store.create(req.body);

        return res.send({user});
    }
    catch(err) {
        return res.status(400).send({errpr:'Store registration failed'});
    }
})

module.exports=app => app.use('/data',router)