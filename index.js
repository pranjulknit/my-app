import express from "express";
import { user } from './db.js';
const app = express();
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("docker node my-app");
});

app.post("/signin",async (req,res)=>{
    const {email,password} = req.body;

    
    try{
        const checkinguser = await user.findOne({
            email
        })
        console.log(checkinguser);
        if(checkinguser){
            return res.status(400).json({
                messages:"user already"
            })
        }

        const newuser = new user({
            email,password
        })
        
        await newuser.save();
        res.status(201).json({
            message:"user created"
        })
    }catch(e){
        console.log("errro in signin")
    }

    
})

app.listen(4089,()=>{
    console.log("app is listening at port 4089")
});

