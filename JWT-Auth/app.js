require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()
const connectToDb = require('./config/db')
connectToDb()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: [process.env.CLIENT_URL],
    credentials: true
}))

const authRouter = require('./router/authRoute')

app.use('/api/auth/', authRouter)
app.use('/', (req, res) => {
    res.status(200).json({
        data: 'JWTauth server'
    })
})

module.exports = app;
