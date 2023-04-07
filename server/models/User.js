const  mongoose  = require("mongoose");
const {model} = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    verify: {
        type: Boolean,
        default: false
    }

})

module.exports = model('users', userSchema)