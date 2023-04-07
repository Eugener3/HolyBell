const express = require('express');
const router = express.Router()

const authControllers = require('../Controllers/authControllers')

router.post('/login', authControllers.login)
router.post('/register', authControllers.register)

module.exports = router