import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/axe1-sm.png'

// navbar for all pages
const NavBar = () =>
  <div id="navbar" className="ui small fixed inverted menu">
    <div id="logo" className="ui item"><img src={logo} className='ui mini image' alt="Logo"/></div>
    <div className="ui center aligned container">
      <Link to='/' className="ui item">Home</Link>
      <Link to="/services" className="ui item">Services</Link>
      <Link to="/bids" className="ui item">Bids</Link>
      <Link to="/apply" className="ui item">Apply</Link>
      <Link to="/ask" className="ui item">FAQ</Link>
    </div>
  </div>

export default NavBar