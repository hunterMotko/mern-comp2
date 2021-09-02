import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'

import validate from '../validation/validateBidForm'

// main form for bid page
const BidForm=()=>{
  // form values
  const [values, setValues] =useState({name:'',address:'',email:'',number:'', serviceReq:''})
  // get ID back from database for nextpage
  const [userID, setUserID ] = useState('')
  // count textarea
  const [count, setCount] = useState(0)
  // form errors
  const [errors, setErrors] = useState({})
  // form processing
  const [isSubmiting, setIsSubmiting] = useState(false)
  // form submit is done
  const [done, setDone] = useState(false)

  //controlled component
  const handleChange = e =>{
    const {name, value} = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  // set states and start submittion
  const handleSubmit = (e) =>{
    e.preventDefault()
    setErrors(validate(values))
    setIsSubmiting(true)
    setCount(values.serviceReq.length)
  }

  // check errors
  useEffect(()=>{
    if(Object.keys(errors).length===0&&isSubmiting){
      submit()
    }
  },[errors])

  // submit to database
  function submit(){
    fetch(`/api/bids`, {
      method: 'POST',
      body: JSON.stringify({values}),
      headers: {'Content-Type':'application/json'}
    }).then(res=>{
      console.log(res)
      if(res.status<200||res.status>299){
        return console.log('process problem')
      }
      res.json().then(data=>{
        // get back info from db
        setUserID(data)
        setDone(true)
      })
    })
  }
  
  // once submited next page
  if(done){
    return <Redirect to={`/bids/change/${userID.id}`}/>
  }
   
  return (
<>
  <div className="ui raised center aligned segment">
    <h1>Start Your Bid Process Here</h1>
  </div>
  <div className="ui raised segment">
    <div className="ui form segment">
      <form onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label>Name:</label>
          <div className="ui left icon input">
            <i className="user icon"></i>
            <input 
              className={`${errors.name && 'inputError'}`}
              name="name"
              type="text"
              placeholder='(your name)'
              value={values.name}
              onChange={handleChange}
            />
          </div>
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="field">
          <label>Address:</label>
          <div className="ui left icon input">
            <i className="university icon"></i>
            <input
            className={`${errors.address && 'inputError'}`}
            type="text"
            name="address"
            placeholder='(your address)'
            value={values.address}
            onChange={handleChange}
            />
          </div>
          {errors.address && <p className="error">{errors.address}</p>}
        </div>
        <div className="field">
          <label>Email:</label>
          <div className="ui left icon input">
            <i className="mail icon"></i>
            <input
              className={`${errors.email && 'inputError'}`}
              type="email"
              name="email"
              placeholder="(your email)"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="field">
          <label>Phone Number:</label>
          <div className="ui left icon input">
            <i className="call icon"></i>
            <input
              className={`${errors.number&&'inputError'}`}
              type="tel"
              name="number"
              placeholder='(your number)'
              value={values.number}
              onChange={handleChange}
            />
          </div>
          {errors.number && <p className="error">{errors.number}</p>}
        </div>
        <div className="field">
          <label>Job Description: (200 Characters or less) - count: {count}</label>
          <textarea
            className={`${errors.serviceReq&&'inputError'}`}
            name="serviceReq"
            value={values.serviceReq}
            onChange={handleChange}
            minLength='10'
            maxLength='200'
            placeholder='Tell us what is the service you require...'
            cols="30" rows="10"
          ></textarea>
          
          {errors.serviceReq&&<p className="error">{errors.serviceReq}</p>}
        </div>
        <div className="ui one column padded centered grid">
          <button className="ui orange large button">Submit</button>
        </div>
      </form>
    </div>
  </div>
</>
  )
}

export default BidForm