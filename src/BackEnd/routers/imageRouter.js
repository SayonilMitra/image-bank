const express = require('express')
const imageRouter = express.Router()
let imageModel = require('../models/imageModel')

imageRouter.use(express.json())

imageRouter.post('/add', (req, res) => {
    let { imageLabel, imageUrl } = req.body
    addImage()

    async function addImage() {
        let newImage = await new imageModel({
            imageLabel: imageLabel,
            imageUrl: imageUrl
        })
        await newImage.save()
        res.end()
    }
})

imageRouter.delete('/delete', (req, res) => {
    let { imageId } = req.body
    deleteImage()

    async function deleteImage() {
        await imageModel.findByIdAndDelete(imageId)
        res.end()
    }
})

module.exports = imageRouter