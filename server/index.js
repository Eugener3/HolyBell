require("dotenv").config()
const mongoose = require("mongoose")
const app = require('./app')
const PORT = process.env.PORT || 3001
const DB_DATA = process.env.DB_DATA



app.listen(PORT, async (error) => {
  try {
    await mongoose.connect(DB_DATA)
    console.log("MongoDB connected")
  } catch (error) {
    console.log(error)
  }
  console.log(`Server has been started on ${PORT}`)
})
