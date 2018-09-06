const mongoose = require('mongoose')
const Schema = mongoose.Schema

let UsersSchema = new Schema({
    username : {type : String, require : true },
    password : {type : String, required : true}
})

module.exports = mongoose.model('Users', UsersSchema)