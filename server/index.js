require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const homeRouters = require('./Routers/homeRouters')
const PORT = process.env.PORT || 3001
const DB_DATA = process.env.DB_DATA

app.use(express.json())
app.use(cors())

app.use('/api', homeRouters)

app.listen(PORT, async (error) => {
  try {
    await mongoose.connect(DB_DATA)

    console.log("Всё збс")
  } catch (error) {
    console.log(error)
  }
})
