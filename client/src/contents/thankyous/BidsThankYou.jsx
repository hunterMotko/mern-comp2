import React from 'react'

// thank user and send back content
 const ThankYou=({values})=>
  <div className="ui card">
    <div className="content">
      <div className="header">
        <h2>Thank You {values.name} for you service!</h2>
      </div>
      <div className="description">
        <p>We will contact you at {values.address} or {values.email} within the next work week.</p>
      </div>
    </div>
    <div className="ui two bottom attached buttons">
      <a href="/" className="ui orange button">
        Home
      </a>
      <a href="/ask" className="ui orange button">
        FAQ
      </a>
    </div>
  </div>

export default ThankYou