const mongoose = require('mongoose')

const List = new mongoose.Schema({
    name: {type: String, required: true},
    order: {type: Number, required: true}
})

module.exports = mongoose.model('lists', List)