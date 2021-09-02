const express = require('express')
const appCon = require('../controllers/applyCon')
const bidCon = require('../controllers/bidCon')
const askCon = require('../controllers/askCon')
const router = express.Router()

// handle routes 
// bids page
router.post('/bids', bidCon.createUser)
router.get('/bids/change/:id', bidCon.findUser)
router.put('/bids/update/:id', bidCon.updateUser)
router.delete('/bids/delete/:id', bidCon.deleteUser)
// apply page
router.post('/apply', appCon.createApplicant)
// faq page
router.get('/ask', askCon.findAllQuestions)
router.post('/ask', askCon.createQuestion)
router.get('/ask/:id', askCon.findQuestion)
router.put('/ask/update/:id', askCon.updateQuestion)
router.delete('/ask/delete/:id', askCon.deleteQuestion)

module.exports = router