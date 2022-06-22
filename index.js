console.log("hello");

 setTimeout(function(){
     console.log("3 sec passed");


},3000)
var time = 0 ;


var timer= setInterval(function(){
    time +=2;
    console.log(time +" sec have passed");
    if (time>5){
        clearInterval(timer)

    }
},2000)