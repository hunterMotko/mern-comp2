import React,{useState} from 'react'
import './Services.css'

// dynamic content
const info = [
  {title: 'Tree Trimming', description: 'Tree trimming is a great way to promte the health and longevity of a trees life. Its is also a great way to make sure that the tree grows in the direction that you want it. This prevents it growing over your house, pool, driveway power lines, ect.'},
  {title: 'Tree Removal', description: 'At Hunter\'s we strive to remove your trees and qucikly and efficiantly as possible. We do this by methods such as roping and lowering to ensure minimul yard damage and saftey. When removing trees our certified arborists will walk you through the reasons why to remove a tree or not, as well as the best was to remove your tree.'},
  {title: 'Tree Spray', description: 'With a main part of our mission being saftey we provide non-chemical sprays. This helps safe the trees from hameful insects and fungus while making sure we are not affecting any other living organism in the process.'},
  {title:'Tree Transplant', description: 'At Hunter\'s we are now providing a tree transplant service to ensure that if there is any reason that a tree needs to be moved to another location, we have the best methods of transplantation.'},
  {title: 'Stump Grinding', description: 'Stump Removal is a great way to clean up your yard and get rid of those stumps that have been pesky eye sores for years. Also when you remove stumps you now open up your yard for extra opportunities.'},
  {title: 'Special', description: 'Specialty Requests come in all shapes and size make to ask for any alternate request. A few examples are: Logs at specific length and width, Burls, Saucers for wood craft, Wood Chips'},
]

// handle content breakdown and click
const Tab = ({active,i,onClick,title,description}) =>
  <div className="ui column">
    <div className="ui styled accordion">
      <div className={'title'} onClick={()=>onClick(i)}>
        <button className="ui orange button">
          <i className={`arrow circle ${(active)?'down':'right'} icon`}></i>{' '}
          {title}
        </button>
      </div>
      <div className={(active)?'active content': 'content'}
      onClick={onClick}>
        <p>{description}</p>
      </div>
    </div>
  </div>

// builds serivces page
const Services = () =>{
  const [active, setActive] =useState(null)
  const onClick=(index)=>{
    (active===index)?setActive(null):setActive(index)
  }
  return(
    <div className='ui text container'>
      <div className="ui raised center aligned segment">
        <h1>Services That We Offer</h1>
      </div>
      <div id="pad" className="ui raised segment">
        <div className="ui center aligned segment">
          <h3>Click for description!</h3>
        </div>
        <div className="ui one column stackable aligned centered grid">
          {info.map((info, i)=>
            <Tab
            key={i} 
            title={info.title} 
            description={info.description}
            active={active===i}
            i={i}
            onClick={onClick}/>
          )}
        </div>
      </div>
    </div>
  )
}

export default Services