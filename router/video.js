const express = require('express')
const router = express.Router()
const videoController = require('../controller/videoController')
router.get('/list', videoController.list).delete('/',videoController.delete)

module.exports = router