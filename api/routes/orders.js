const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message :"Handling GET requests from /orders"
    });
});

router.post('/',(req, res, next) =>{
    res.status(201).json({
        message :"Handling Post requests from /orders"
    });
});

router.get('/:orderId',(req, res, next) =>{
    res.status(201).json({
        message :"Asked for Id",
        orderId: req.params.orderId
    });
});
router.delete('/:orderId',(req, res, next) =>{
    res.status(201).json({
        message :"Deleted  Id",
        orderId: req.params.orderId
    });
});
module.exports = router;
