import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// pages and navs 
import Home from '../contents/pages/Home/Home'
import Services from '../contents/pages/Services/Services'
import Bids from '../contents/pages/Bids/Bids'
import Apply from '../contents/pages/Apply/Apply'
import Ask from '../contents/pages/Ask/Ask'
import NavBar from '../contents/navbar/NavBar'
import Footer from '../contents/navbar/Footer'
import ChangeBid from '../contents/pages/Bids/ChangeBid';
import NotFound from '../contents/pages/NotFound/NotFound'

// routing for pages and content
const App=()=> 
  <Router>
    <>
      <NavBar/>
      <div className="contents">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services}/>
          <Route path="/bids" exact component={Bids}/>
          <Route path="/bids/change/:id" exact component={ChangeBid}/>
          <Route path="/apply" exact component={Apply}/>
          <Route path="/ask" exact component={Ask}/>
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer/>
    </>
  </Router>


export default App
