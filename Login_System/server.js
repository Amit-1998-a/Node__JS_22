var bodyParser = require('body-parser');
var express = require('express')
var app =express(); 
var session = require('express-session');
var {v4:uuidv4}= require('uuid');
var router = require('./router')


 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}))


app.set('view engine','ejs')

// load static assets

app.use(session({
    secret : uuidv4(),
    resave:false,
    saveUninitialized:true
}));

app.use('/route',router);

app.use('/assets',express.static('assets'))

// home route 

app.get('/',function(req,res){
    res.render('base',{title:"Login-System"})


})
   

app.listen(3000);
console.log('listening to port 3000')