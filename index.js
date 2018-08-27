const express = require('express')
const bodyParser = require('body-parser')
const util = require('util')

const form = require('./Routes/Forms')

const app = express()

const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

//setting DB connection
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/FormsDatabase')
let db = mongoose.connection
mongoose.Promise = global.Promise
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/form', form)

const PORT = 5000
app.listen(PORT, ()=> console.log(`Server started at port ${PORT}`))
