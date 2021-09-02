import React from 'react'
import Steps from './Steps'
import BidForm from '../../forms/BidForm'

// bids page
const Bids = () =>
  <div className="ui text container">
    <BidForm/>
    <Steps one={true}/>
  </div>


export default Bids