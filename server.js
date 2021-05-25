const express = require('express');
const ejs=require('ejs');

const mongoose=require('mongoose');


const app = express();


app.set('view engine','ejs');


app.get("/",function(req,res){
    res.render("index")
})






app.listen(5000,function(){
    console.log("server has started at port : 5000");
});


