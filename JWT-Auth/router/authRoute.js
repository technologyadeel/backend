const express = require('express');
const { signup } = require('../controller/authController');

const authRouter = express.Router()

authRouter.post('/signup', signup);
// authRouter.get();

module.exports = authRouter;