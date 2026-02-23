import express from "express"
import jwt from "jsonwebtoken"
const app = express()
const SECRET ="lpu"
const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImVtYWlsIjoiam9obkBnbWFpbC5jb20iLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTc3MTgzNDI1NCwiZXhwIjoxNzcxODM3ODU0fQ.hyra_J01_Ff5zlVXvxH9gnylyOfYephnG6awllFWRQQ"
const user = jwt.verify(token,SECRET)
console.log(user)