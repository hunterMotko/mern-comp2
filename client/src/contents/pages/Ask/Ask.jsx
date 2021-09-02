import React, {useState, useEffect} from 'react'
import AskForm from '../../forms/AskForm'
import './Ask.css'

// question structure
// props destructured
const Quesitons=({faq, setActive, setPassID})=>{
  // set states on update button click
  const update=()=>{
    setActive(true)
    setPassID({id: faq._id})
  }

  // on delete button click delete from db
  const del =()=>{
    console.log('delete', faq._id)
    fetch(`/api/ask/delete/${faq._id}`,{
      method: 'DELETE'
    }).then(res=>{
        res.json()
        window.location.href = '/ask'
    })
  }
  return(
  <div className="ui segment">
    <div className="ui top attached segment">
      <h3>{faq.email}</h3>
    </div>
    <div className="ui attached segment">
      <p>{faq.question}</p>
    </div>
    <div className="ui two bottom attached buttons">
      <button
        className="ui orange button"
        onClick={update}>update
      </button>
      <button 
      className="ui orange button"
      onClick={del}>delete
      </button>
    </div>
  </div>
  )
}

// ask page component
const Ask = () =>{
  // toggle form and questions
  const [active, setActive] = useState(false)
  // questions array
  const [faqs, setFaqs] =useState([])
  // waiting on db
  const [loading, setLoading] = useState(true)
  // using id for update
  const [passID, setPassID]=useState({id:''})

  // get questions from db
  useEffect(()=>{
    fetch('/api/ask')
    .then(res=>res.json())
    .then(setFaqs)
    .then(setLoading(false))
  },[])

  return(
  <div className="ui text container">
    <div className="ui raised center aligned segment">
      <h1>Frequently Asked Questions</h1>
    </div>
    <div className="ui center aligned raised segment">
      <div className="ui segments">
        {/* toggle form and buttons while sending props */}
        {(active) ?
          <AskForm faqs={faqs} passID={passID}/> : (loading) ?
            <div>Loading....</div> : (faqs.length === 0) ?
              <div>no faq</div> : 
                faqs.map((faq, i)=>
                  <Quesitons 
                    key={i} 
                    faq={faq} 
                    active={active} 
                    setActive={setActive}
                    setPassID={setPassID}
                  />
                )
        }
      </div>
      <button 
        className={`ui ${active?'hide':''} orange button`} 
        onClick={()=>setActive(true)}
        >Click To Ask
      </button>
      <button
        className={`ui ${active?'':'hide'} orange button`} 
        onClick={()=>setActive(false)}
        >Back
      </button>
    </div>
  </div>
  )
}

export default Ask