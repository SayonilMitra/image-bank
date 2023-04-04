const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: String,
    password: String
})

let userModel = mongoose.model('Users', userSchema)

module.exports = userModel