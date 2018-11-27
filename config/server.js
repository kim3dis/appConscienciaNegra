var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var expressValidator = require('express-validator');
//





app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(expressSession({
    secret: 'eusoquerodormirporra',
    resave: false,
    saveUninitialized: false
}));


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./app/public/'));
app.use(expressValidator());

consign()
    .include('./app/routes/')
    .into(app);




module.exports = app;