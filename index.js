let express = require('express');


let app = express();



app.get('/user',(req,res)=>{
        res.send("hello this is a user page")

})










app.listen(3333,(req,res)=>{
    console.log("This page is running on port 3333");
    

})
