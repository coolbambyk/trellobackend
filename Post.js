const mongoose = require('mongoose')

const Post = new mongoose.Schema({
    name: {type: String, required: true},
    edited: {type: String, required: true}
})

module.exports = mongoose.model('cards', Post)