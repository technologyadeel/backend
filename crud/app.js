require('dotenv').config();
const express = require('express')
const cors = require("cors")

const connectToDb = require('./config/db')

const app = express();


// init connection to db 
connectToDb()

app.get('/', (req, res) => {
    res.send('Hello world')
})
// export default app; or
module.exports = app;