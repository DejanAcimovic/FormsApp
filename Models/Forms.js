const mongoose = require('mongoose')
const Schema = mongoose.Schema

let FromsSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    creator_id: String,
    questions: [{
        question: {type: String, required: true},
        payload: {
            min:{type: Number, required: false},
            max:{type: Number, required: false},
            type:{type: String, required: true},
            choices: [String]
        }
    }],
    answers:[Schema.Types.Mixed]
})

module.exports = mongoose.model('Forms', FromsSchema)