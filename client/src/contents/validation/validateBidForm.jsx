// validation for main bids page form
export default function validateBid(values){
  let errors={}
  if(!values.name){
    errors.name = 'Name is required'
  }
  if(!values.address){
    errors.address = "Your Address is Requried!"
  }else if(!/(\d+) (\w+) (\w+)/.test(values.address)){
    errors.address = "Please enter an Address"
  }
  if(!values.email){
    errors.email = 'Email Address is Required!'
  }else if(!/\S+@\S+\.\S+/.test(values.email)){
    errors.email='Email Address is invalid'
  }
  if(!values.number){
    errors.number = 'Phone Number is Required!'
  }else if(values.number.length<10){
    errors.number='Phone Number is invalid'
  }
  if(!values.serviceReq){
    errors.serviceReq = 'Phone serviceReq is Required!'
  }else if(values.serviceReq.length>200||values.serviceReq.length<10){
    errors.serviceReq='Just give a brief description'
  }
  
  return errors
}