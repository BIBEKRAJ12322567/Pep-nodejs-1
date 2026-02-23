//Router
import express from "express"
const app=express()
app.listen(8080,()=>console.log("server started"))
const Router = express.Router()

Router.get("/",(req,res)=>{
    res.send("Hello World")
})
Router.post("/",(req,res)=>{
    res.send("This is post request")
})
app.use("/api/users",Router)