require('dotenv').config()
const express = require('express')
const connectToDb = require('./config/db')

const app = express();

connectToDb();

const userRoutes = require('./routes/userRoutes')
app.use('/',userRoutes)

module.exports = app

