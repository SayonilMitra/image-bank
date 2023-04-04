const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/idream')

const imageRouter = require('./routers/imageRouter')
app.use(imageRouter)

app.listen(8000, () => {
    console.log('Back end running')
})