const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message :"Handling GET requests from /products"
    });
});

router.post('/',(req, res, next) =>{
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(201).json({
        message :"Handling Post requests from /products",
        createdProduct:product

    });
});

router.get('/:productId',(req, res, next) =>{
    const id = req.params.productId;
    if(id === 'special'){
        res.status(200).json({
            message:" You asked for Special Product"
        });
    }else{
        res.status(200).json({
            message:" You requested an ID"
        });
    }
});

router.patch('/:prodctId',(req,res,next)=>{
    res.status(200).json({
        message :"Updated Product"
    });
});

router.delete('/:prodctId',(req,res,next)=>{
    res.status(200).json({
        message :"Deleted Product"
    });
});
module.exports = router;
