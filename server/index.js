require('dotenv').config()
const express = require("express");
const massive = require("massive");
const app = express();
app.use(express.json());
const { SERVER_PORT, CONNECTION_STRING } = process.env;
const {login, registerUser, logout} = require('./controllers/authController')

massive(CONNECTION_STRING).then(db => {
    app.set("db", db);
    console.log("connected to db");
});

//auth endpoints
app.post('/auth/login', login);
app.post('/auth/register', registerUser);
app.get('/auth/logout', logout);


app.listen(SERVER_PORT, () =>
  console.log(`Servin' up some 🔥 🔥 🔥 on Port ${SERVER_PORT}`)
);