const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Ask = new Schema({
  email: String,
  question: String
})

module.exports = mongoose.model('asks', Ask)