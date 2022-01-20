require("dotenv").config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const path = require('path')

const routes = require('./routes');

const app = express();


//Middleware
app.use(bodyParser.json());



//Routes & Controllers

// All of our routes will start with "/api", we're going to route them through index.js
app.use("/api", routes);

//Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build','index.html'))
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("server started on port 5000");
});