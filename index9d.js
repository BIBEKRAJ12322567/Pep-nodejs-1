import express from "express"
const app=express()
app.use(express.json());
const jwt=Math.random()
const auth=(req,res,next)=>{
    const token=req.header.authorization;
    const val=token.split(" ")
    if(val[1]==jwt){
        next()
    }
    else{
        res.send("Denied")
    }
};

app.post ("/login",(req,res))