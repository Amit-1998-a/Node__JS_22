var express = require ('express');

var app = express()

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets')); 

// app.get('/', function(req, res){
//     res.sendFile(__dirname + '/index.html')
// });
// app.get('/contact', function(req, res){
//     res.sendFile(__dirname + '/contact.html')
// });
app.get('/', function(req, res){
    res.render('index');
});
app.get('/contact', function(req, res){
    res.render('contact',{qs : req.query});
});

 app.get('/profile/:name', function(req,res){
     var data= {age :29 , job: 'ninja', hobbies:['eating','fight']}
        res.render('profile',{person: req.params.name, data: data});
 });
    
app.listen(3000);

// / app.get('/profile/:name', function(req,res){
//     //     res.send('you requested to see a profile  with the name of ' + req.params.name);
//     // });
    