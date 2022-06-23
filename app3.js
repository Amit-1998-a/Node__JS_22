var fs = require('fs');

var readMe=fs.readFileSync('readMe.txt','utf-8');
fs.writeFileSync('writeMe.txt',readMe);

var fs = require('fs');

// fs.readFile('readMe.txt','utf-8',function(err,data){
//  console.log(data);
// });

// console.log('test');


// var fs = require('fs');

// fs.readFile('readMe.txt','utf-8', function(err, data){
// fs.writeFile('writeMe.txt',data)

// });




