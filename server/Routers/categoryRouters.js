const express = require('express');
const router = express.Router()
const passport = require('passport')
const categoryControllers = require('../Controllers/categoryControllers')

router.get('/', passport.authenticate('jwt', {session: false}), categoryControllers.getAll)
router.get('/:id', categoryControllers.getById)
router.delete('/:id', categoryControllers.remove)
router.post('/', categoryControllers.create)
router.patch('/:id', categoryControllers.update)

module.exports = router