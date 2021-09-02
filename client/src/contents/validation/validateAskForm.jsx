// validate ask page form
export default function validateBid(values){
  let errors={}
  if(!values.email){
    errors.email = 'Email Address is Required!'
  }else if(!/\S+@\S+\.\S+/.test(values.email)){
    errors.email='Email Address is invalid'
  }
 
  if(!values.question){
    errors.question = 'Question is Required!'
  }else if(values.question.length>200||values.question.length<5){
    errors.question='Just give a brief description'
  }
  
  return errors
}