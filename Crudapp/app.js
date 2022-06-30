
var express=require('express');
var app=express();
var bodyParser=require('body-parser')
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/Node');

var User=require('./user');
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}))

app.get('/',function(req,res){
    res.render('home');
})
app.get('/display', function(req, res) {
    User.find(function(err, users) {
      if (err) {
        console.log(err);
      } else {
        res.render('display', { users: users });
        console.log(users);
      }
  });
});


app.get('/add', function(req, res,urlencoded) {
    res.render('add-forms');
});

app.post('/add', function(req, res,urlencoded) {
    console.log(req.body);
    const mybodydata = {
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        user_mobile: req.body.user_mobile
    }
    var data = User(mybodydata);
    data.save(function(err) {
        if (err) {
            res.render('add-forms', { message: 'User registered not successfully!' });
        } else {
            res.render('add-forms', { message: 'User registered successfully!' });
        }
    })
});






app.listen(8080,function(){
    console.log('running on port 8080');
})
