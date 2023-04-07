const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const passport = require('passport')


const authRouters = require('./Routers/authRouters')
const categoryRouters = require('./Routers/categoryRouters')
const productRouters = require('./Routers/productRouters')

app.use(passport.initialize())
require('./middlewares/passport')(passport)

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/api/auth', authRouters)
app.use('/api/category', categoryRouters)
app.use('/api/product', productRouters)


module.exports = app