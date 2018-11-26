var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');
var store = require('store');


app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./app/public/'));

consign()
    .include('./app/routes/')
    .into(app);



module.exports = app;