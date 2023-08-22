// use shorcut rfc to get the snippet for react component with export statement
import React,{useState} from 'react'

export default function About() {
 
  const [myStyle,setStyle]=useState({
    border:"1px solid white",
    backgroundColor:"white",
    color:"black",
  });
  const [btntext,setbtn]=useState("enable dark mode")
  const togglestyle=()=>{
    if(myStyle.color==="black"){
      setStyle({
        color:"white",
        backgroundColor:"black",
        border:"0.2px solid white"
      });
      setbtn("enable light mode");
    }
    else{
      setStyle({
        color:"black",
        backgroundColor:"white",
        border:"1px solid white"
      });
      setbtn("enable dark mode")
    }  };
  return (
    <>
    <div className='container' style={myStyle}>
      <h1>About Us</h1>
    <div className="accordion accordion-flush" id="accordionFlushExample" style={myStyle} >
  <div className="accordion-item" style={myStyle} >
    <h2 className="accordion-header" style={myStyle} >
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse"data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" >
      <div className="accordion-body" >Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle} >
    <h2 className="accordion-header" >
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" >
      <div className="accordion-body" >Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle} >
    <h2 className="accordion-header" >
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
<button type="button" className="btn btn-primary" onClick={togglestyle}>{btntext}</button>
    </div> 
    </>
  )
}
