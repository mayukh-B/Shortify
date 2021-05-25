const express = require('express');
const ejs=require('ejs');
const mongoose=require('mongoose');
const ShortUrl =require('./models/shortUrl');
mongoose.connect('mongodb://localhost/urlShrinker',{
    useNewUrlParser:true,
    useUnifiedTopology: true
})

const app = express();


app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}))

app.get("/",function(req,res){
    res.render("index")
})

app.post("/shortUrls", async(req,res)=>{
 await   ShortUrl.create({
        full:req.body.fullUrl})
        res.redirect('/');
})




app.listen(5000,function(){
    console.log("server has started at port : 5000");
});


