const mongoose = require('mongoose')
const {model} = require("mongoose")
const Schema = mongoose.Schema

const productSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    imgURL: {
        type: String,
        required: true,
        default: "./Картинка"
    },
    category: {
        type: String,
        required: true,
        ref: 'categories'
    }
})

module.exports = model('products', productSchema)