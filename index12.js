// //Router
// import express from "express"
// const app=express()
// app.listen(8080,()=>console.log("server started"))
// const Router = express.Router()

// Router.get("/",(req,res)=>{
//     res.send("Hello World")
// })
// Router.post("/",(req,res)=>{
//     res.send("This is post request")
// })

// app.use("/api/users",Router)


// Router.........................

// let users=[];
// let products=[];

// app.post('/users')
// app.get('/users')
// app.delete('/users/:id')

// app.post('/products')
// app.get('/products')
// app.delete('/products/:id')



import express from "express"
const app = express();
app.listen(8080);

const userRouter = express.Router();
const productRouter = express.Router();

userRouter.get("/",(req,res)=>{
    res.send("hello world of user router")
})
userRouter.post("/",(req,res)=>{
    res.send("This is post request of users router")
})

productRouter.get("/",(req,res)=>{
    res.send("hello world of product router")
})
productRouter.post("/",(req,res)=>{
    res.send("This is post request of product router")
})


app.use("/api/users",userRouter)
app.use("/api/products",productRouter)