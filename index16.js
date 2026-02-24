// import express from "express";
// import bcrypt from "bcrypt";
// const app = express();
// app.use(express.json());
// app.listen(8080);
// const users = [];
// app.post("/signup", async (req, res) => {
//   const body = req.body;
//   const hashPassword = await bcrypt.hash(body.password, 10);
//   body.password = hashPassword;
//   users.push(body);
//   res.json(users);
// });
// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   const found = users.find((user) => user.email === email);
//   if (found) {
//     const chkPassword = await bcrypt.compare(password, found.password);
//     if (chkPassword) {
//       res.status(200).json({ message: "success" });
//     } else {
//       res.status(401).json({ message: "Invalid Password" });
//     }
//   } else {
//     res.status(401).json({ message: "User not found" });
//   }
// });
// app.get("/users", (req, res) => {
//   res.json(users);
// });

// app.get("/",(req,res)=>{
//     res.send("Hello World")
// });



//--------Output will only show to valid users-----------

// import express from "express";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// const secretKey = "mysecretkey";

// const app = express();
// app.listen(8080, () => {
//   console.log("server is starting");
// });
// const middleware = (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   if (!authHeader)
//     return res.status(401).json({ message: "Authorization header missing" });
//   const token = authHeader.split(" ")[1];
//   try {
//     jwt.verify(token, secretKey);
//     console.log("middleware executed");
//     next();
//   } catch (err) {
//     res.status(401).json({ message: "Invalid token" });
//   }
// };
// app.use(express.json());
// const users = [];
// app.post("/signup", (req, res) => {
//   const body = req.body;
//   const hasPassword = bcrypt.hashSync(body.password, 10);
//   body.password = hasPassword;
//   users.push(body);
//   res.json(users);
// });
// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   const user = users.find((u) => u.email === email);

//   const ckPassword = await bcrypt.compare(password, user.password);

//   if (ckPassword)
//     res.json({
//       message: "login successful",
//       token: jwt.sign(user, secretKey, { expiresIn: "1h" }),
//     });
//   else res.status(401).json({ message: "invalid credentials" });
// });
// app.get("/", middleware, (req, res) => {
//   res.json({ message: "welcome to home page" });
// });
// app.get("/users", (req, res) => {
//   res.json(users);
// });



//---------Only admin can see the users

import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const secretKey = "mysecretkey";

const app = express();
app.listen(8080, () => {
  console.log("server is starting");
});

const middleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).json({ message: "Authorization header missing" });
  const token = authHeader.split(" ")[1];
  try {
    const user = jwt.verify(token, secretKey);
    console.log("middleware executed");
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

const authorize = (...roles) => {
  return (req, res, next) => {
    if (roles.includes(req.user.role)) {
      next();
    } else {
      res.status(403).json({ message: "Access denied" });
    }
  };
};

app.use(express.json());
const users = [];
app.post("/signup", (req, res) => {
  const body = req.body;
  const hasPassword = bcrypt.hashSync(body.password, 10);
  body.password = hasPassword;
  users.push(body);
  res.json(users);
});
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email);

  const ckPassword = await bcrypt.compare(password, user.password);

  if (ckPassword)
    res.json({
      message: "login successful",
      token: jwt.sign(user, secretKey, { expiresIn: "1h" }),
    });
  else res.status(401).json({ message: "invalid credentials" });
});
app.get("/", middleware, (req, res) => {
  res.json({ message: "welcome to home page" });
});
app.get("/users", middleware, authorize("admin", "manager"), (req, res) => {
  res.json(users);
});