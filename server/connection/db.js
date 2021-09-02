/** @format */

const mongoose = require('mongoose')

// connect to db and make db
mongoose.connect('mongodb://127.0.0.1:27017/hunterstree', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

const db = mongoose.connection

// check for errors and console.log to server that db is running
db.on('error', err => {
	console.error('MongoDB error: ' + err.message)
	process.exit(1)
})
db.once('open', () => console.log('MongoDB connection established'))

module.exports = db
