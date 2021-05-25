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

app.get("/", async function(req,res){
  const shortUrls= await  ShortUrl.find()
    res.render("index",{shortUrls: shortUrls})
})

app.post("/shortUrls", async(req,res)=>{
 await   ShortUrl.create({
        full:req.body.fullUrl})
        res.redirect('/');
})


app.get('/:shortUrl',async(req,res)=>{
 const shortUrl = await  ShortUrl.findOne({short: 
    req.params.shortUrl })
    if(shortUrl == null)return res.sendStatus(404);


    shortUrl.clicks++;
    shortUrl.save()

    res.redirect(shortUrl.full)
}) 

app.listen(5000,function(){
    console.log("server has started at port : 5000");
});


