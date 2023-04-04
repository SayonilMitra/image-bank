const express = require('express')
const imageRouter = express.Router()
let imageModel = require('../models/imageModel')
const cors = require('cors')

imageRouter.use(express.json())
imageRouter.use(cors())

// =============== Add image to database ===============
imageRouter.post('/add', (req, res) => {
    let { imageLabel, imageUrl, userId } = req.body
    addImage()

    async function addImage() {
        let newImage = await new imageModel({
            imageLabel: imageLabel,
            imageUrl: imageUrl,
            userId: userId
        })
        await newImage.save()
        res.end()
    }
})

// =============== Get all images from database ===============
imageRouter.get('/images/:userId', (req, res) => {
    let userId = req.params.userId
    async function getImages() {
        let imagesList = await imageModel.find({ userId: userId })
        res.end(JSON.stringify(imagesList.reverse()))
    }
    getImages()
})

// =============== Delete image from database ===============
imageRouter.delete('/delete', (req, res) => {
    let { imageId } = req.body
    deleteImage()

    async function deleteImage() {
        await imageModel.findByIdAndDelete(imageId)
        res.end()
    }
})

module.exports = imageRouter