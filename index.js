const express =require("express");
const app=express();
const path=require("path");
port = 5000;
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/' , (req , res)=>{
    res.render('index');
})
app.get('/user' , (req , res) =>{
    res.send("post request recevies");
})
app.get('/articles/new', (req , res)=>{
    res.render('article');
})
app.listen(port , ()=>{
    console.log(`server is running at ${port}`);
})