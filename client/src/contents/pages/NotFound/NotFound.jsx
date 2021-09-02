import React from 'react'
import {Link} from 'react-router-dom'

const NotFound=()=> 
  <div className="ui text container">
    <div className="ui raised center aligned segment">
      <h1>Not Found</h1>
      <Link to='/' className="ui orange button">Home page</Link>
    </div>
  </div>

export default NotFound