// var express = require('express');

//  var app =express()

//  app.get('/', function(req, res){
//     res.send('this is home page')
//  });

//  app.listen(3000);

var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req ,res){
    console.log('reques was made'+ req.url);
    if (req.url === '/home' || req.url ==='/'){
        res.writeHead(200 ,{'Content-Type':'text/html'});
         fs.ReadStream(__dirname +'/index.html').pipe(res)
    }

    else {
        res.writeHead(200 , {'Content-Type':'text/html'});
        fs.ReadStream(__dirname +'/404.html').pipe(res)
    }
})
