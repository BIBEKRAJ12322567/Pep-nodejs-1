import express from 'express';
const app=express();
app.listen(8080);
app.get("/",( req, res )=>{
    const user={
        name:"john",
        email:"john@gmail.com",
        role:"student"
    }; 
    // res.send(user);  // it will send the object as string(json format) to the client
    res.json(user);    // it will send the object as json format to the client mandatory.
})