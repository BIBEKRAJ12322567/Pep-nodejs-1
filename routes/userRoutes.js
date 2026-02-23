// import express from "express"


// const userRouter = express.Router();


// userRouter.get("/",(req,res)=>{
//     res.send("hello world of user router")
// })
// userRouter.post("/",(req,res)=>{
//     res.send("This is post request of users router")
// })
// export default userRoutes;


import express from "express";
import { createUser, getUsers } from "../controllers/userController.js";
const userRouter = express.Router();
userRouter.get("/", getUsers);
userRouter.post("/", createUser);
export default userRouter;