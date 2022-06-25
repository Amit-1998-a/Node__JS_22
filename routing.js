var fs = require('fs');
var http = require('http');


var server = http.createServer(function(req,res){
    console.log('request was made'+ req.url);
    if (req.url ==='/home'|| req.url =='/'){
    res.writeHead(200, {'Contect-Type': 'text/html'})
    fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if(req.url==='/contact'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        fs.createReadStream(__dirname +'/contact.html').pipe(res);
    } else if(req.url=== '/api/ninjas'){
        var ninjas = [{name: 'amit',age :24},{ name: 'you', age:26}];
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(ninjas));
    }
    else{
        res.writeHead(200, {'Contect-Type': 'text/html'})
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});

server.listen(3000,'127.0.0.1');
console.log('hey, listening to port 3000')