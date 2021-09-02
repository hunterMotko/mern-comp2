import React, {useState, useEffect} from 'react'

import validate from '../validation/validateAskForm'

// form for ask page
const AskForm = ({faqs, passID}) =>{
  // variable to assign exsisting values to form 
  let toEmail='', toQuestion=''

  // if there are existings questions be able to set the form 
  // with that data for update
  if(faqs){
    faqs.map(item=>{
      if(passID.id===item._id){
        toEmail = item.email
        toQuestion = item.question
      }
      return null
    })
  }

  // form values
  const [values, setValues] = useState({email:`${toEmail}`, question:`${toQuestion}`})
  // count on text area
  const [count, setCount] = useState(0)
  // check form errors
  const [errors, setErrors] = useState({})
  // starting submit
  const [isSubmiting, setIsSubmiting] = useState(false)
  // submit completed
  const [done, setDone] = useState(false)

  // controlled components
  const handleChange = e =>{
    const {name, value} = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  // set states
  const handleSubmit = (e) =>{
    e.preventDefault()
    setErrors(validate(values))
    setIsSubmiting(true)
    setCount(values.question.length)
  }

  // check errors and check if submition or update
  useEffect(()=>{
    if(Object.keys(errors).length===0&&isSubmiting){
      if(passID.id === ''){
        submit()
      }else{
        update()
      }
    }
  },[errors])
  
  // submit to database
  function submit(){
    console.log('Submit!')
    fetch(`/api/ask`, {
      method: 'POST',
      body: JSON.stringify({values}),
      headers: {'Content-Type':'application/json'}
    }).then(res=>{
      if(res.status<200||res.status>299){
        return console.log('process problem')
      }
      return setDone(true)
    })
  }

  // update to databse
  function update(){
    console.log('Update!')
    fetch(`/api/ask/update/${passID.id}`, {
      method: 'PUT',
      body: JSON.stringify({values}),
      headers: {'Content-Type':'application/json'}
    }).then(res=>{
      if(res.status<200||res.status>299){
        return console.log('process problem')
      }
      return setDone(true)
    })
  }

  // if submition rerender
  if(done){
    return window.location.href = '/ask'
  }

  return(
  <>
    <div className="ui raised center aligned segment">
      <h1>Ask An Aroborist</h1>
    </div>
    <div className="ui raised center aligned segment">
      <div className="ui form segment">
        <form onSubmit={handleSubmit}>
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
          <label>Job Description: (200 Characters or less)-count:{count}</label>
          <textarea
            className={`${errors.question&&'inputError'}`}
            name="question"
            value={values.question}
            onChange={handleChange}
            minLength='5'
            maxLength='200'
            placeholder='Ask a Question'
            cols="30" rows="10"
          ></textarea>
          {errors.question&&<p className="error">{errors.question}</p>}
          </div>
          <button className="ui orange button">Submit</button>
        </form>
      </div>
    </div>
  </>
  )
}

export default AskForm