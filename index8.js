
import express from 'express'
const app=express()
app.listen(8080);

   const users=[
    {id:1,name:"John",email:"john@gmail.com",role:"student"},
    {id:2,name:"Cathy",email:"cathy@gmail.com",role:"student"},
    {id:3,name:"Admin",email:"admin@gmail.com",role:"admin"},
   ]
app.get("/",(req,res)=>{
    res.send(users);
})
app.post("/",(req,res)=>{
    const user = req.body;
    users.push(user);
    res.json(user);
})

app.get("/:id",(req,res)=>{
    const id = Number(req.params.id);
    const user = users.find(u => u.id === id);

    if(!user){
        return res.status(404).json({message:"User not found"});
    }
    res.json(user);
});
