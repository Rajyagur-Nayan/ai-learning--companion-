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

app.use("/signup", require("./src/routes/user/signup.js"));
app.use("/login", require("./src/routes/user/login.js"));
app.use("/quiz", require("./src/routes/quiz/quiz.js"));
app.use("/form", require("./src/routes/summrieze/form.js"));
=======
app.use('/signup', require('./src/routes/user/signup.js'));
app.use('/login', require('./src/routes/user/login.js'));
app.use('/quiz', require('./src/routes/quiz/quiz.js'))
app.use('/form', require('./src/routes/summrieze/form.js'))
app.use('/profile', require('./src/routes/profile/profile.js'));

>>>>>>> 5c5c91d73c051a261b84c957e8464e01c760e57e

module.exports = app;
