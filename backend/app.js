const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();
const cookieParser = require("cookie-parser");

app.use(
  cors({
    origin: "http://localhost:3001", // your frontend URL
    credentials: true, // allow cookies
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

<<<<<<< HEAD
app.use("/signup", require("./src/routes/user/signup.js"));
app.use("/login", require("./src/routes/user/login.js"));
app.use("/quiz", require("./src/routes/quiz/quiz.js"));
=======
app.use('/signup', require('./src/routes/user/signup.js'));
app.use('/login', require('./src/routes/user/login.js'));
app.use('/quiz', require('./src/routes/quiz/quiz.js'))
app.use('/form', require('./src/routes/summrieze/form.js'))
>>>>>>> d8a5e483d23fab1656ac9c3120a04da48f3ccd25

module.exports = app;
