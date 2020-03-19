const express = require('express');

const Product = require ('../models/Product');
const Store = require ('../models/Store');

const router = express.Router();

router.post('/products', async(req,res) =>{
    try{
        const product = await Product.create(req.body);

        return res.send({product});
    }
    catch(err) {
        return res.status(400).send({error:'Product registration failed'});
    }
})

router.post('/stores', async(req,res) =>{
    try{
        const store = await Store.create(req.body);

        return res.send({store});
    }
    catch(err) {
        return res.status(400).send({error:'Store registration failed'});
    }
})

module.exports=app => app.use('/data',router)