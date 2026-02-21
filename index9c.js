import express from "express"
const app=express()
app.use(express.json());

const auth=(req,res,next)=>{
    const token=req.headers.authorrization;
    
}