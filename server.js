require("dotenv").config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')


const posts = require('./routes/api/posts');

const app = express();


//Middleware
app.use(bodyParser.json());


//Use Routes
app.use('/api/posts', posts);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("server started on port 5000");
});