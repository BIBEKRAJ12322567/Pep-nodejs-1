
// import express from 'express'
// const app=express()
// app.listen(8080);

//    const users=[
//     {id:1,name:"John",email:"john@gmail.com",role:"student"},
//     {id:2,name:"Cathy",email:"cathy@gmail.com",role:"student"},
//     {id:3,name:"Admin",email:"admin@gmail.com",role:"admin"},
//    ]
// app.get("/",(req,res)=>{
//     res.send(users);
// })
// app.post("/",(req,res)=>{
//     const user = req.body;
//     users.push(user);
//     res.json(user);
// })

// app.get("/:id",(req,res)=>{
//     const id = Number(req.params.id);
//     const user = users.find(u => u.id === id);

//     if(!user){
//         return res.status(404).json({message:"User not found"});
//     }
//     res.json(user);
// });


import express, { request, response } from "express";
const app = express();
app.listen(8080, () => {
  console.log("Server Started....");
});

// const greet = (req,res,next) => {
//   console.log("Hello World");
//   next()
  
// };
// app.use(greet)

app.use(express.json())

let users = [
  { id: 1, name: "avi", email: "avi@mail.com", role: "Student" },

  { id: 2, name: "satyam", email: "satyam@mail.com", role: "admin" },

  { id: 3, name: "vivaan", email: "vivaan@mail.com", role: "Student" },
];

app.get("/", (request, response) => {
  response.json(users);
});

app.post("/", (request, response) => {
//   console.log(request.body);
  const user = request.body
  users.push(user)
  response.json(users);
});

app.delete("/:id",(request,response)=>{

})
app.get("/:id", (request, response) => {
  const user = users.find((user) => user.id === Number(request.params.id));
  if (user) {
    response.json(user);
  }
});