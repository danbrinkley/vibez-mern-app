require("dotenv").config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')


const routes = require('./routes');

const app = express();


//Middleware
app.use(bodyParser.json());



//Routes & Controllers

// All of our routes will start with "/api", we're going to route them through index.js
app.use("/api", routes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("server started on port 5000");
});