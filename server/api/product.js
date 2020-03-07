const express = require('express');
const router= express.Router();
const queries = require('../db/queries');


// reminder- all routes begin with /api/v1/products
router.get('/', (req,res)=>{
    queries
        .getAll()
        .then(products=>{
            res.json(products)
        });
});

module.exports = router;
