import express from 'express';
const app=express();
app.listen(8080);
// app.get("/:name",(req,res)=>{
//     res.send("Hello "+ req.params.name);                 http://localhost:8080/shubh
// })

// app.get("name/:name",(req,res)=>{
//     res.send("Hello "+ req.params.name);                 http://localhost:8080/name/shubh
// })


// app.get("/",(req,res)=>{
//     res.send("Hello "+ req.query.name);                  http://localhost:8080/?name=shubh
// })

app.get("/",(req,res)=>{
    res.send("Hello "+ req.query.name + req.query.age);      //http://localhost:8080/?name=shubh&age=21
})