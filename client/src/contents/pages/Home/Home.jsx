import React, {useState} from 'react'
import logo from '../../../images/axe1.svg.png'
import './Home.css'

// display
const Jumbotron =()=>
<div className="ui inverted vertical masthead center aligned segment">
  <div className="ui text container">
    <h1 className="ui orange header">Hunter's Tree Service</h1>
    <h2>What kind of service would you like?</h2>
    <a href="/services" className="ui huge orange button">Sevices we offer <i className="right arrow icon"></i>
    </a>
  </div>
</div>

// about our company
const Mission=()=>
<div className="ui container">
    <div className="ui two column stackable center aligned grid segment">
      <div className="column">
        <div className="ui image">
          <img src={logo} alt="Logo"></img>
        </div>
      </div>
      <div className="column">
          <h1 className="label">Our Mission</h1>
          <h3 className="description">At Hunter's Tree Serice we drive impactful results of our service through consistent innovation.</h3>
      </div>
    </div>
  </div>

// dynamic content
const tabData =[
  {title:'Certified',content:'All of our formen at HTS are Certified Arborists. We strive to make as many employees certified to enable all safe practices for every tree, shrub, vine and plant that we come in contact with healthier than when we found it.'},
  {title:'Regulations',content:'We abide be all Occupational Saftey Hazard Association (OSHA) and National Institute for Occupational Safety and Health (NIOSH) standards and regulations to ensure the saftey of all of are employees and the public.'},
  {title:'Practices',content:'We practice the must up to date technologies and methods of all our industry advances to make sure we are time efficient, safe, cost efficient, and have the best interesrests of everyone that we do business with.'}
]
// handle tab clicks
const Tab=({i,title,active,onClick})=>
    <div className={`item ${(active)?'active':''}`} onClick={()=>onClick(i)}>
    <button className="ui compact inverted orange button">{title}</button>
  </div>
 // tab content
const Content=({content, active})=>
  <div className={`ui bottom attached tab segment ${(active)?'active':''}`} data-tab="first/a">
    <p>{content}</p>
  </div>

// make tabs 
const Tabs=({active, onClick})=>
  <div className="ui container">
    <div className="tab move">
      <div className="ui tab center aligned segment active" data-tab="first">
        <div className={`ui three item top attached tabular menu`}>
          {tabData.map((t,i)=>
          <Tab key={i}
            i={i}
            title={t.title}
            active={active===i}
            onClick={onClick}/>
          )}
        </div>
          {tabData.map((c,i)=>
            <Content key={i}
              content={c.content}
              active={active===i}
              onClick={onClick}/>
          )}
      </div>
    </div>
  </div>

// more business info and site nav
const Career=()=>
<div className="ui vertical stripe quote segment">
  <div className="ui equal width stackable internally celled grid">
    <div className="center aligned row">
      <div className="black column">
        <h1>Looking for a career?</h1>
        <p>End you search here and choose one of the many options in the tree industry</p>
        <a href='/apply' className="ui orange button">Apply Here <i className="right arrow icon"></i></a>
      </div>
      <div className="black column">
        <h1>Do You Need Work Done?</h1>
        <a href='/Bids' className="ui orange button">Start Bid Process Here <i className="right arrow icon"></i></a>
      </div>
    </div>
  </div>
</div>

// build home page
const Home = () =>{
  const [active, setActive] =useState(null)
  const onClick=(index)=>{
    (active===index)?setActive(null):setActive(index)
  }
  return(
    <>
      <Jumbotron/>
      <Mission/>
      <Tabs
        active={active}
        onClick={onClick}/>
      <Career/>
    </>
  )
}
  
export default Home