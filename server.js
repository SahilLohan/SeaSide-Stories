const express =  require('express');
const app = express();


app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));


app.get("/",function(req,res){
    res.render('home.ejs');
})

app.listen(3000,function(){
    console.log("server started at port 3000\n");
})