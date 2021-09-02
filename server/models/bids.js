const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Bid = new Schema({
    name: String,
    address: String,
    email: String,
    number: String,
    serviceReq: String
})

module.exports = mongoose.model('bids', Bid)