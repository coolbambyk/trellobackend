const mongoose = require('mongoose')

const Post = new mongoose.Schema({
    name: {type: String, required: true},
    edited: {type: String, required: true},
    listId: {type: Number, required: true},
    id: {type: Number, required: true},
    _id: {type: String, required: true}
})

module.exports = mongoose.model('cards', Post)