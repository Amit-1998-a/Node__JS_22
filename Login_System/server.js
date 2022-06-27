var express = require('express')
var app =express(); 
 


app.set('view engine','ejs')

// home route 

app.get('/',function(req,res){
    res.render('base',{title:"Login-System"})


})
   

app.listen(3000);
console.log('listening to port 3000')