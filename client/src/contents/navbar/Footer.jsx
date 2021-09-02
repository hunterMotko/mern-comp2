import React from 'react'

import logo from '../../images/axe1-sm.png'

// footer for all pages
const Footer = () =>
<div className="ui inverted vertical footer segment">
  <div className="ui center aligned container">
    <div className="ui stackable inverted divided grid">
      <div className="five wide column">
        <h4 className="ui inverted header">Contect Us</h4>
        <div className="ui inverted list">
          <div className="item">Number: 989-662-2652</div>
          <div className="item">EMail: hmotko@gmail.com</div>
        </div>
      </div>
      <div className="five wide column">
        <h4 className="ui inverted header">Quick Links</h4>
        <div className="ui inverted link list">
          <a href="#root" className="item">OSHA</a>
          <a href="#root" className="item">UAW 113</a>
          <a href="#root" className="item">NTWA 123-45</a>
          <a href="#root" className="item">Safe Tree Practices</a>
        </div>
      </div>
      <div className="five wide column">
        <h4 className="ui inverted header">Follow Us</h4>
        <div className="ui inverted link list">
          <div className="item">
            <div className="ui facebook button">
              <i className="facebook icon"></i>
              Facebook
            </div>
          </div>
          <div className="item">
            <div className="ui twitter button">
              <i className="twitter icon"></i>
              Twitter
            </div>
          </div>
          <div className="item">
            <div className="ui google plus button">
              <i className="google plus icon"></i>
              Google Plus
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="ui inverted section divider"></div>
    <div className="ui horizontal inverted small divided">
      <img src={logo} className="ui centered mini image" alt="Logo"></img>
      <h3 style={{color:'orange'}}>© All Copy Rights Resevered for Hunter's Tree Service</h3>
    </div>
  </div>
</div>


export default Footer