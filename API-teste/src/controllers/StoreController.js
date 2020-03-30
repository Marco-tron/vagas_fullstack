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
  
    let limit= Number(req.query.limit)||10;
    let offset= Number(req.query.offset)||0;
    let descending=Boolean(req.query.descending)||false;
    
    Store.find(function (err, stores) {
      if (err) return next(err);
      res.json(stores);
    })
    .skip(offset)
    .limit(limit)
    .sort('-name')
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