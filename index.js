const mongoose = require('mongoose');
require('dotenv').config();
const http = require('http');
const bodyParser = require('body-parser')
const express = require('express')

/* Routes Import */
const productRoutes = require('./src/routes/products');
const supplierRoutes = require('./src/routes/supplier');

const app = express();

/* Connect to MongoDB */
mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log(`DATABASE [Online] => Name: ${process.env.DB_NAME}`))
    .catch((error) => console.log(`ERROR: ${error.message}`));

/* Logging the request */

app.use((req, res, next) => {
    console.log(`METHOD: [${req.method}] => URL: [${req.url}] => IP: [${req.socket.remoteAddress}]`)
    res.on('finish', () => {
        console.log(`METHOD: [${req.method}] => URL: [${req.url}] => IP: [${req.socket.remoteAddress}] => STATUS: [${res.statusCode}]`)
    });

    next();
});

/* Parse the request */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* Routes */
app.use('/product', productRoutes);
app.use('/supplier', supplierRoutes);

/* Error handling */
app.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

/* Create the server */
const httpServer = http.createServer(app);
httpServer.listen(process.env.PORT, () => console.log(`API [Online] => Running on port: ${process.env.PORT}`));