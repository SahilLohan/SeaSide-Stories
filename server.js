const express =  require('express');
const app = express();


app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));


app.get("/",function(req,res){
    res.render('home.ejs');
})

app.get("/contact",function(req,res){
    res.render('contact.ejs');
})

app.get("/about",function(req,res){
    res.render('about.ejs');
})

app.get("/compose",function(req,res){
    res.render('compose.ejs');
})


app.listen(3000,function(){
    console.log("server started at port 3000\n");
})