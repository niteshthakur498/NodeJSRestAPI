const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



const server = express();
mongoose.connect('mongodb://node-api:'+process.env.MONGO_ATLAS_PW+'@cluster0-shard-00-00-vmpam.mongodb.net:27017,cluster0-shard-00-01-vmpam.mongodb.net:27017,cluster0-shard-00-02-vmpam.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',
{
    useNewUrlParser: true
});


const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
const userRoutes = require('./api/routes/users');

const port = process.env.port || 3000;

mongoose.Promise = global.Promise;

server.use('/uploads', express.static('uploads'));
server.use(morgan('dev'));
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());
server.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin','*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if(req.method ==='OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

server.use('/products',productRoutes);
server.use('/orders',orderRoutes);
server.use('/user',userRoutes);

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
