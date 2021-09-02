import React from 'react'

// pagination for user support
const Steps=({one, two})=>{
  return(
    <div className="ui three steps">
      <div className={`${(one)?'active':''} step`}>
        <div className="content">
          <div className="title">Contact Info</div>
          <div className="description">Enter your contact information.</div>
        </div>
      </div>
      <div className={`${two?'active':''} step`}>
        <div className="content">
          <div className="title">Update/Delete</div>
          <div className="description">Need to make changes?</div>
        </div>
      </div>
      <div className="disabled step">
        <div className="content">
          <div className="title">Track Your Progress</div>
          <div className="description">Coming Soon</div>
        </div>
      </div>
    </div>
  )
}

export default Steps