/** @format */

const Bid = require('../models/bids')

// starting bid process
const createUser = (req, res) => {
	console.log(req.body)
	// form dataq
	const { values } = req.body
	// new bid
	const user = new Bid(values)
	// check info
	if (!user) return res.status(400).json({ success: false, error: err })
	// save and send back data
	user
		.save()
		.then(() => {
			return res.status(201).json({
				success: true,
				id: user._id,
				message: 'user created!'
			})
		})
		.catch(error => {
			return res.status(400).json({
				error,
				message: 'user not created!'
			})
		})
}

// find by params
const findUser = async (req, res) => {
	let id = req.params.id
	await Bid.findOne({ _id: id }, (err, user) => {
		if (err) {
			return res.status(400).json({ success: false, error: err })
		}
		if (!user) {
			return res.status(404).json({ success: false, error: `user not found` })
		}
		return res.status(200).json({ success: true, data: user })
	}).catch(err => console.log(err))
}

// update bid info
const updateUser = async (req, res) => {
	//info from form
	const { values } = req.body
	// update and send data
	await Bid.findOneAndUpdate(
		{ _id: req.params.id },
		values,
		{ new: true },
		(err, user) => {
			if (err) return res.status(400).json({ success: false, error: err })
			if (!user)
				return res.status(404).json({ success: false, error: `user not found` })
			return res.status(200).json({ success: true, data: user })
		}
	).catch(err => console.log(err))
}

// delete bid
const deleteUser = async (req, res) => {
	await Bid.findOneAndDelete({ _id: req.params.id }, (err, user) => {
		if (err) return res.status(400).json({ success: false, error: err })
		if (!user)
			return res.status(404).json({ success: false, error: `user not found` })
		return res.status(200).json({ success: true, data: user })
	}).catch(err => console.log(err))
}

module.exports = {
	createUser,
	findUser,
	updateUser,
	deleteUser
}
