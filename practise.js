var http = require('http')

var server = http.createServer(function(res, req){
 console.log('request was made'+ req.url);
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end('hey ');
})

server.listen(3000,'127.0.0.1');
console.log('lisenting to port 3000')