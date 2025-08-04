const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cors({
  origin: 'http://localhost:3000', // your frontend URL
  credentials: true,               // allow cookies
}));
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.get('/', (req, res) => {
    res.send('API is running 🚀');
});

app.use('/signup', require('./src/routes/user/signup.js'));
app.use('/login', require('./src/routes/user/login.js'));
app.use('/add', require('./src/routes/add/vote.js'));
app.use('/vote', require('./src/routes/add/add_vote.js'))
app.use('/votes/past', require('./src/routes/votes/past.js'))
app.use('/votes/ongoing', require('./src/routes/votes/ongoing.js'))
app.use('/votes/result', require('./src/routes/votes/result.js'))
app.use('/admin', require('./src/routes/deshboard/admin.js'))
app.use('/stats', require('./src/routes/deshboard/stats.js'))

module.exports = app