var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Book = require('./book.model');

var db ='mongodb://localhost/example';

mongoose.connect(db);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true
}));

app.get('/', function(req, res){
    res.send('happy to be here')
})

// ------------------------------------------------------------