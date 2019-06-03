const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/app', {useNewUrlParser:true})
// .then(()=>{
//     console.log('Connected to Mongo');
// })

//RoutesFile
const approutes = require('./routes_CRUD/app-routes');

const app = express();

app.get("/show_react",function(req,res){
    console.log("show_react called");
    res.send("hii react");
    });

//Bodyparser Middleware
app.use(bodyParser.json());

//Routes Middleware
app.use('/app', approutes)

//port
const port = 5000 || process.env.PORT;

app.listen(port, ()=>{
    console.log(`Listen to the port of ${port}`);
})