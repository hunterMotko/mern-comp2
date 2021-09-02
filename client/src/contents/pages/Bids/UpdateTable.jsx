import React, {useState, useEffect} from 'react'

import validate from '../../validation/validateUpdateForm'
import ThankYou from '../../thankyous/BidsThankYou'


const UpdateTable=({user})=>{
  // bid data
  const {_id, name, address, email, number, serviceReq} = user
  // put db data into form values for update control
  const [values, setValues] = useState({
    name: `${name}`,
    address: `${address}`,
    email: `${email}`,
    number: `${number}`,
    serviceReq: `${serviceReq}`
  })
  // form errors
  const [errors, setErrors] = useState({})
  // submit staring
  const [isSubmiting, setIsSubmiting] = useState(false)
  // submit done
  const [done, setDone] = useState(false)
  // once updated get back db data
  const [userID, setUserID ] = useState('')

  // controlled component
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
  }

  // check errors
  useEffect(()=>{
    if(Object.keys(errors).length===0&&isSubmiting){
      submit()
    }
  },[errors])

  // submit to db
  function submit(){
    fetch(`/api/bids/update/${_id}`, {
      method: 'PUT',
      body: JSON.stringify({values}),
      headers: {'Content-Type':'application/json'}
    }).then(res=>{
      if(res.status<200||res.status>299){
        return console.log('process problem')
      }
      res.json().then(data=>{
        setUserID(data.data)
        setDone(true)
      })
    })
  }

  // delete bid from db
  const del=()=>{
    fetch(`/api/bids/delete/${_id}`,{
      method: 'DELETE'
    }).then(res=>{
        res.json()
        window.location.href = '/bids'
    })
  }
  
  // when submittion is done thank user
  if(done){
    return(
    <div className="ui raised center aligned padded segment">
      <div className="ui one column center aligned stacked padded grid">
        <ThankYou values={userID}/>
      </div>
    </div>
    )
  }

  return(
<>
<div className="ui raised center aligned segment">
  <h1>Would you like to make any final changes?</h1>
</div>
<form onSubmit={handleSubmit} className="ui form">
  <table className="ui inverted table">
    <thead>
      <tr>
        <th className="left aligned">User</th>
        <th>Info</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="left aligned">Name: </td>
        <td>
          <input
            className={`${errors.name && 'inputError'}`}
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </td>
      </tr>
      <tr>
        <td className="left aligned">Address: </td>
        <td>
          <input
          className={`${errors.address && 'inputError'}`}
          type="text"
          name="address"
          value={values.address}
          onChange={handleChange}
          />
          {errors.address && <p className="error">{errors.address}</p>}
        </td>
      </tr>
      <tr>
        <td className="left aligned">Email: </td>
        <td>
          <input
          className={`${errors.email && 'inputError'}`}
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </td>
      </tr>
      <tr>
        <td className="left aligned">Phone Number: </td>
        <td>
          <input
          className={`${errors.number&&'inputError'}`}
          type="tel"
          name="number"
          value={values.number}
          onChange={handleChange}
          />
          {errors.number && <p className="error">{errors.number}</p>}
        </td>
      </tr>
      
      <tr>
        <td className="left aligned">Job Description: </td>
        <td>
          <textarea
          className={`${errors.serviceReq&&'inputError'}`}
          name="serviceReq"
          value={values.serviceReq}
          minLength='10'
          maxLength='200'
          cols="30" rows="5"
          onChange={handleChange}
          ></textarea>
          {errors.serviceReq&&<p className="error">{errors.serviceReq}</p>}
        </td>
      </tr>
    </tbody>
  </table>
  <button type="submit" className="ui orange button">Update</button>
  <button type="button" className="ui orange button" onClick={del}>Delete</button>
  <button type="button" className="ui orange disabled button">Register</button>
</form>
</>
  )
}

export default UpdateTable