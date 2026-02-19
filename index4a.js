//http://localhost:8080/4/5
//http://localhost:8080/x/4/y/5z/4

// import express from "express";

// const app = express();

// app.get("/:num1/:num2", (req, res) => {
//     const n1 = Number(req.params.num1);
//     const n2 = Number(req.params.num2);

//     const sum = n1 + n2;

//     res.send(` ${sum}`);
// });

// app.listen(8080, () => console.log("Server started"));


import express from 'express'
 const app = express();
 
 app.listen(8080,()=>{
     console.log("server started")
 })
 
 app.get("/id1/:id1/id2/:id2",(req,res)=>{
    const num1 = Number(req.params.id1);
    const num2 = Number(req.params.id2);
    const result = num1 + num2;
     console.log(req.url)
    res.send(result.toString());
 });

  app.get("/x/:id1/y/:id2/z/:id3",(req,res)=>{
    const num1 = Number(req.params.id1);
    const num2 = Number(req.params.id2);
    const result = num1 + num2;
     console.log(req.url)
    res.send(result.toString());
 });

   app.get("/a/b/c/d",(req,res)=>{
    c
     console.log(req.url)
    // res.send(result.toString());
    console.log("hello world")
    res.send("hello world")
 });

  app.get("/:a/:b/:c/:d",(req,res)=>{
    // console.log("hello world")
    res.send("hello world")
 });