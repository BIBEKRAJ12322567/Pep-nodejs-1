import express from "express"
const app = express();
app.listen(8080);

const userRouter = express.Router();


userRouter.get("/",(req,res)=>{
    res.send("hello world of user router")
})
userRouter.post("/",(req,res)=>{
    res.send("This is post request of users router")
})
export default userRoutes;