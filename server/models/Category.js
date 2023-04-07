const mongoose = require('mongoose')
const {model} = require("mongoose")
const Schema = mongoose.Schema

const categorySchema = new Schema({
    name: {
        type: String, 
        required: true
    }
})

module.exports = model('categories', categorySchema)
