const Application = require('../models/application')


createApplicant = (req, res) =>{
  // get values from form
  const {values} = req.body
  // make new app
  const applicant = new Application(values)
  // check app was made
  if (!applicant) {
    return res.status(400).json({ success: false, error: err })
  }
  // save to db then send info back to client side
  applicant.save().then(() => {
    return res.status(201).json({
      success: true,
      id: applicant._id,
      message: 'applicant created!',
    })
  }).catch(error => {
    return res.status(400).json({
        error,
        message: 'applicant not created!',
    })
  })
}

module.exports = {
  createApplicant
}