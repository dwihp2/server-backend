import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './router';

var bodyParser = require ('body-parser');

//connect to MongoDB
mongoose.connect('mongodb://localhost/movies');

//initialize http server
const app =  express();

// Logger that outputs all requests into the console
app.use(morgan('combined'));

//Use v1 as prefix for all API endpoints
app.use('/v1', router);

const server = app.listen(3000, ()=>{
    const {address, port} = server.address();
    console.log(`Listening at http://${address}:${port}`);
});