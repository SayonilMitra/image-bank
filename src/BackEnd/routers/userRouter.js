const express = require('express')
const userRouter = express.Router()
let userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')
const cors = require('cors')

userRouter.use(express.json())
userRouter.use(cors())

const privateKey = require('../privateKey')

// =============== login user ===============
userRouter.post('/login', (req, res) => {
    let { username, password } = req.body
    findUser()

    async function findUser() {
        let token = jwt.sign(password, privateKey)
        let existingUsers = await userModel.find({ username: username, password: token })
        if (existingUsers.length === 0) {
            res.end(JSON.stringify({
                message: 'user not found'
            }))
        } else {
            res.end(JSON.stringify({
                message: 'ok',
                userId: existingUsers[0]._id
            }))
        }
    }
})

// =============== Add user to database ===============
userRouter.post('/signup', (req, res) => {
    let { username, password } = req.body
    addUser()

    async function addUser() {
        let token = jwt.sign(password, privateKey)
        let existingUsers = await userModel.find({ username: username })
        if (existingUsers.length > 0) {
            res.end('username already exists')
        } else {
            let newUser = await userModel({
                username: username,
                password: token
            })
            await newUser.save()
            res.end('ok')
        }
    }

})


module.exports = userRouter