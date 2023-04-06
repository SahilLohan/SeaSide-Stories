const express =  require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

var blogsArray = [];
var titlesArray = [];
app.get("/",function(req,res){
    res.render('home.ejs',{
        items:blogsArray,
        titles:titlesArray
    });
})
app.get("/about",function(req,res){
    res.render('about.ejs');
})
app.get("/compose",function(req,res){
    res.render('compose.ejs');
})
app.get("/posts/:postName",function(req,res){
    console.log(req.params.postName);
    if(titlesArray.length<=0)
    res.sendStatus(404);
    else for(var i=0;i<titlesArray.length;i++)
    {
        if(titlesArray[i]==req.params.postName)
        {
            res.render("post.ejs")//,{
            //     Title:titlesArray[i],
            //     Content:blogsArray[i]
            // })
        }
        else if(i==titlesArray.length-1)
        {
            res.sendStatus(404);
        }
    }
    
})


app.post("/",function(req,res){
    console.log(req.body.Title);
    titlesArray.push(req.body.Title);
    console.log(req.body.Content);
    blogsArray.push(req.body.Content);
    res.redirect("/");
})
app.listen(3000,function(){
    console.log("server started at port 3000\n");
})