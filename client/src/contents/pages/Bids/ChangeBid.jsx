import React, {useState, useEffect} from 'react'

// pagination
import Steps from './Steps'
import UpdateTable from './UpdateTable'

// update or delete bids page
const ChangeBid=(props)=>{
  // get id from url
  const {match: {params: {id}}} = props
  // set users bid for later registation
  const [user, setUser] = useState({})
  // waiting for db
  const [loading, setLoading]=useState(true)
  
  // get info from db
  useEffect(()=>{
    fetch(`/api/bids/change/${id}`)
      .then(res=>res.json())
      .then(d=>{
        setUser(d.data)
        setLoading(false)
      })
  },[id])

  return(
    <div className='ui text container'>
      <div className="ui raised center aligned segment">
      {loading?<h3>Loading...</h3>:<UpdateTable key={user.id} user={user}/>}
      </div>
      <Steps two={true}/>
    </div>
  )
}

export default ChangeBid