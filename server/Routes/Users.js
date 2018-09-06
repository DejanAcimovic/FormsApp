const express = require('express')
const userRouter = express.Router()

const user_controller = require('../Controllers/Users')

userRouter.post('/register', user_controller.registration)
userRouter.post('/login', user_controller.login)

module.exports = userRouter