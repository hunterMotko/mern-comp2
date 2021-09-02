import React, {useState, useEffect} from 'react'

import validate from '../validation/validateApplyForm'
import ThankYou from '../thankyous/ApplyThankYou'

// a way to create dynamic data for select
const jobData =[
  '(Select A JobType)', 'Ground Man', 'Climber', 'Equipment Operator', 'CDL Driver', 'Certified Arborist','Foreman', 'Other'
]

// form for apply page
const ApplyForm=()=>{
  // form values
  const [values, setValues] = useState({name:'',email:'',age:'',number:'',jobType:''})
  // check for errors
  const [errors, setErrors] = useState({})
  // check when to use submit function
  const [isSubmiting, setIsSubmiting] = useState(false)
  // once submit is done
  const [done, setDone]= useState(false)

  // controlled component
  const handleChange = e =>{
    const {name, value} = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  // check errors and start submit process
  const handleSubmit = (e) =>{
    e.preventDefault()
    setErrors(validate(values))
    setIsSubmiting(true)
  }

  // component DidUpdate and no more errors 
  useEffect(()=>{
    if(Object.keys(errors).length===0&&isSubmiting){
      submit()
    }
  },[errors])

  // submit to database
  function submit(){
    fetch(`/api/apply`, {
      method: 'POST',
      body: JSON.stringify({values}),
      headers: {'Content-Type':'application/json'}
    }).then(res=>{
      if(res.status<200||res.status>299){
        return console.log('process problem')
      }
      setDone(true)
    })
  }

  // once submited switch from form
  if(done){
    return(
    <div className="ui raised center aligned padded segment">
      <div className="ui one column center aligned stacked padded grid">
        <ThankYou values={values}/>
      </div>
    </div>
    )
  }

  
  return(
  <>
    <div className="ui raised center aligned segment">
      <h1>Apply Here</h1>
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
                type="text"
                name="name"
                placeholder='(First Name Last Name)'
                value={values.name}
                onChange={handleChange}
                />
            </div>
              {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="field">
            <label>Email:</label>
            <div className="ui left icon input">
              <i className="mail icon"></i>
              <input
                className={`${errors.email && 'inputError'}`}
                type="email"
                name="email"
                placeholder="(example@something.com)"
                value={values.email}
                onChange={handleChange}
                />
            </div>
                {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="field">
            <label>Age:</label>
            <div className="ui left icon input">
              <i className="unhide icon"></i>
              <input
                className={`${errors.age&&'inputError'}`}
                type="text"
                name="age"
                placeholder='(Must Be Over 18 To Apply)'
                value={values.age}
                onChange={handleChange}
                />
            </div>
              {errors.age && <p className="error">{errors.age}</p>}
          </div>

          <div className="field">
            <label>Phone Number:</label>
            <div className="ui left icon input">
              <i className="call icon"></i>
              <input
                className={`${errors.number&&'inputError'}`}
                type="tel"
                name="number"
                placeholder='(Your Phone Number EX:123412341)'
                value={values.number}
                onChange={handleChange}
                />
            </div>
              {errors.number && <p className="error">{errors.number}</p>}
          </div>

          <div className="field">
            <label>Job Type:</label>
            <select 
              className={`${errors.jobType &&'inputError'}`} name="jobType"
              value={values.jobType}
              onChange={handleChange}>
                {jobData.map((name, i)=>{
                  return <option key={i} value={name}>{name}</option>
                })}
            </select>
            {errors.jobType && <p className="error">{errors.jobType}</p>}
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

export default ApplyForm