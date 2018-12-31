const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message :"Handling GET requests from /products"
    });
});

router.post('/',(req, res, next) =>{
    res.status(201).json({
        message :"Handling Post requests from /products"
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
