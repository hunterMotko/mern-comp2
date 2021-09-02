const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Application = new Schema({
  name: String,
  email: String,
  age: String,
  number: String,
  jobType: String
})

module.exports = mongoose.model('applications', Application)