// required packages
const connection = require('./models');
const express = require('express');
const applicaton = express();
const path = require('path');
const expressHandlebars = require('express-handlebars');
const bodyparser = require('body-parser');
const userController = require('./controllers/user');
const { json } = require('body-parser');

//parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request
applicaton.use(bodyparser.urlencoded({
    extended: true
}));

//without routing for testing
applicaton.get("/", (req,res) => {
    res.send("<h1>Node is working</h1>");
});
//route for getting data from mongodb
applicaton.use('/user', userController);
//using for json files
applicaton.use(json());

// port used for listen nodejs
const port = process.env.port || 3000;
applicaton.listen(port, () => {
    console.log('server connected');
});