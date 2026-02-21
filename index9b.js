import express from 'express';
const app = express();
app.listen(8080);
app.use(express.json());

const auth = (req, res, next) => {
    const token = req.body.token;

    if (token === "1234") {
        next();
    } else {
        res.send("unauthorized access");
    }
};

app.post("/login", auth, (req, res) => {
    res.send({
        message: "token verified",
        token: req.body.token
    });
});

