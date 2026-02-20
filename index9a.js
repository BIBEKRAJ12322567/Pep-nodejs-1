// import express from "express";
// const app = express();
// app.listen(8080);

// const auth = (req, res, next) => {
//   const password = req.params.pass;

//   if (password === "1234") {
//     next(); 
//   } else {
//     res.send("Access Denied");
//   }
// };


// app.get("/:pass", auth, (req, res) => {
//   res.send("Welcome");
// });




import express from "express";
const app = express();

const auth = (req, res, next) => {
  if (req.url === "/1234") {
    next();
  } else {
    res.send("Stopped");
  }
};

app.get("/1234", auth, (req, res) => {
  res.send("Welcome");
});

app.listen(8080);