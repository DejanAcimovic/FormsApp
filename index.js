const express = require('express')
var bodyParser = require('body-parser')
const util = require('util')


const app = express()

const PORT = 5000

app.use(bodyParser.json())

app.post('/createForm', (req, res) =>{
    console.log(console.log(util.inspect(req.body, {showHidden: false, depth: null})))
    res.end('Uspjesno upisano')
})

app.listen(PORT, ()=> console.log(`Server started at port ${PORT}`))
