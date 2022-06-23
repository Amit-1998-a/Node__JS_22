var fs = require('fs');


// fs.mkdir('stuffff' ,function(){
//     fs.readFile('readMe.txt','utf-8',function(err,data){
//       fs.writeFile('./stuff/writeMe.txt',data)
//     });
// });


fs.unlink('./stuffff/writeMe.txt',function(){
    fs.rmdir('stuffff')
});