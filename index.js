const express = require('express');

const app = express();

app.get("/",(req,res)=>{
    res.send("docker node my-app");
});

app.listen(4089,()=>{
    console.log("app is listening at port 4089")
});

