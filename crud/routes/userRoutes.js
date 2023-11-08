const express = require('express')

const {home, createUser} = require('../controllers/userController')

const router = express.Router()

router.get('/', home)
router.post('/createuser', createUser)

module.exports = router;