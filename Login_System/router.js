var express = require('express');
var router = express.Router();

var credential ={
    email:"admin@gmail.com",
    password:"admin123"
}


//login user
router.post('/login',(req,res)=>{
    if(req.body.email==credential.email && req.body.password== credential.password){
        req.session.user = req.body.email
        res.redirect('route/dashboard')
      // res.end('Login Sucess')
    }else{
        res.end('Invalid Username')
    }
})

// router for dashboard

router.get('/dashboard',(req,res)=>{
    if(req.session.user){
        res.render('dashboard',{user:req.session.user})
    }else{
        res.send("Unauthorize User")
    }
})



module.exports=router;