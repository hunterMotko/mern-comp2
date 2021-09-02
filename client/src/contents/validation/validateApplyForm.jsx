// handle form validation for apply page form
export default function validateApply(values){
  let errors={}
  if(!values.name){
    errors.name = 'Name is required'
  }
  if(!values.email){
    errors.email = 'Email Address is Required!'
  }else if(!/\S+@\S+\.\S+/.test(values.email)){
    errors.email='Email Address is invalid'
  }
  if(!values.age){
    errors.age = 'Email Address is Required!'
  }else if(values.age < 18){
    errors.age='You must be older than 18 to apply'
  }
  if(!values.number){
    errors.number = 'Phone Number is Required!'
  }else if(values.number.length<10){
    errors.number='Phone Number is invalid'
  }
  if(!values.jobType){
    errors.jobType = 'Job Type is Requried'
  }else if(values.jobType === ''){
    errors.jobType = 'Select A The Type of Job You Would Like'
  }
  return errors
}