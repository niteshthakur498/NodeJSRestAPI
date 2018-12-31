const express = require('express');
const morgan = require('morgan');

const server = express();



const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

const port = process.env.port || 3000;

server.use(morgan('dev'));

server.use('/products',productRoutes);
server.use('/orders',orderRoutes);

server.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

server.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

server.listen(port,() =>{
    console.log('Listening to port : '+ port);
});
