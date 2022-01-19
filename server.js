const express = require('express');
const mongoose = require('mongoose');
const bodyParser = requir('body-parser')

const app = express();


//Middleware
app.use(bodyParser.json());

