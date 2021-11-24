const mongoose = require('mongoose')

const List = new mongoose.Schema({
    name: {type: String, required: true},
    id: {type: Number, required: true},
    _id: {type: Number, required: true}
})

module.exports = mongoose.model('lists', List)