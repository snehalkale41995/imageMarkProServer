// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;

var morgan       = require('morgan');
var bodyParser   = require('body-parser');

var userRoutes   = require('./routes/user');

// set up our express application
app.use(morgan('dev')); // log every request to the console

app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

// routes ======================================================================
app.use('/user', userRoutes);

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
