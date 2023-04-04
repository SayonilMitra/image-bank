const mongoose = require('mongoose')

const imageSchema = mongoose.Schema({
    imageLabel: String,
    imageUrl: String,
    userId: String
})

let imageModel = mongoose.model('Images', imageSchema)

module.exports = imageModel