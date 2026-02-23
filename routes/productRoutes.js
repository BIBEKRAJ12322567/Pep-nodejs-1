import express from "express"
const app = express();
app.listen(8080);


const productRouter = express.Router();



productRouter.get("/",(req,res)=>{
    res.send("hello world of product router")
})
productRouter.post("/",(req,res)=>{
    res.send("This is post request of product router")
})

export default productRoutes;