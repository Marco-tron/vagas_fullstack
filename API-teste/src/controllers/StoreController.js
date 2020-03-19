const express = require('express');

const Store = require ('../models/Store');

const router = express.Router();


router.post('/', async(req,res) =>{
    try{
        const store = await Store.create(req.body);

        return res.send({store});
    }
    catch(err) {
        return res.status(400).send({error:'Store registration failed'});
    }
})

router.get('/', function(req, res, next) {
    Store.find(function (err, stores) {
      if (err) return next(err);
      res.json(stores);
    });
});

router.put('/:id', function(req, res, next) {
    Store.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
});

router.delete('/:id', function(req, res, next) {
    Store.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
});

module.exports=app => app.use('/data/stores',router)