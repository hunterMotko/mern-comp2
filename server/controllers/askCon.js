const Ask = require('../models/ask')


createQuestion = (req, res)=>{
  // form data
  const {values} =req.body
  // new question
  const faq = new Ask(values)
  // check info
  if(!faq) return res.status(400).json({success:false, error:err})
  // save and send back data
  faq.save().then(()=>{
    return res.status(201).json({
      success: true, id: faq._id, message: 'faq created'
    })
  }).catch(err=>res.status(400).json({
    error: err, message: 'faq not created'
  }))
}

// get all qustions from db
findAllQuestions = async(req,res)=>{
   let faq = await Ask.find({})
   res.json(faq)
}

// handle updates
updateQuestion = async(req, res)=>{
  // form data
  const {values}=req.body
  // update and send data
  await Ask.findOneAndUpdate({_id:req.params.id},values,{new:true},(err,faq)=>{
    if(err)return res.status(400).json({success:false,error:err})
    if(!faq) return res.status(404).json({success:false,error:'faq not found'})
    return res.status(200).json({success:true,data:faq})
  }).catch(err=>console.log(err))
}

// find by id
findQuestion = async(req, res)=>{
  // get from url params
  let id = req.params.id
  // find and send back
  await Ask.findOne({_id:id}, (err,faq)=>{
    if(err)return res.status(400).json({success:false,error:err})
    if(!faq) return res.status(404).json({success:false,error:'faq not found'})
    return res.status(200).json({success:true,data:faq})
  }).catch(err=>console.log(err))
}

deleteQuestion=async(req,res)=>{
  await Ask.findOneAndDelete({_id:req.params.id},(err,faq)=>{
    if(err) return res.status(400).json({success:false,error:err})
    if(!faq) return res.status(404).json({success:false,error:'faq not found'})
    return res.status(200).json({success:true,data:faq})
  }).catch(err=>console.log(err))
}

module.exports={
  createQuestion,
  findAllQuestions,
  updateQuestion,
  findQuestion,
  deleteQuestion
}