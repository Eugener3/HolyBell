const express = require("express")
const router = express()
const homeControllers = require('../Controllers/homeControllers')


router.get('/posts', homeControllers.posts)
module.exports = router
