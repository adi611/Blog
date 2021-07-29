const express = require("express");
const app = express();

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

var items = ["Buy Food","Cook Food","Eat Food"];
app.get("/",(req,res)=>{
    var today = new Date();
    var week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    // var day = week[today.getDay()];
    var day = today.toLocaleDateString("en-IN");

    res.render("lists",{ day , items });
})
app.post("/",(req,res)=>{
    itemName = req.body.input;
    items.push(itemName);
    res.redirect("/");
})

app.listen(3000,()=>{
    console.log("Server running onport 3000");
})