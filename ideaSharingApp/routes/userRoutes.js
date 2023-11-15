const express = require('express')

const { createIdea, getIdea, editIdea, deleteIdea } = require('../controllers/userController')

const router = express.Router()

router.post('/createidea', createIdea);
router.get('/getidea', getIdea)
router.put('/editidea/:id', editIdea)
router.delete('/deleteidea/:id', deleteIdea)


module.exports = router;