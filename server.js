require("dotenv").config();

const express = require('express');
const path = require('path')
const cors = require('cors')

const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 5000;

//Middleware

app.use(cors());
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(express.static("public"));
// JSON parsing middleware
app.use(express.json());
//custom logger to show the url and req.body if one exists
app.use((req, res, next) => {
    console.log(req.url);
    // is there an auth header
    console.log("AUTH HEADER: ", req.headers.authorization);
    if (req.body) {
        console.log("BODY BEING SENT: ", req.body);
    }
    next();
});

//Routes & Controllers

// All of our routes will start with "/api", we're going to route them through index.js
app.use("/api", routes);

//This is to catch anything that's trying to hit an api route that isn't made
app.all("/api/*", function (req, res, next) {
    res.send("THIS IS NOT AN API ROUTE");
});


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
      });
    }

app.listen(PORT, () => {
    console.log("server started on port 5000");
});