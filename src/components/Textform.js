import React, {useState} from 'react'


export default function Textform(props){
    const handleup=()=>{
        // console.log('uppercase was clicked')
        setText(text.toUpperCase());
        props.showalert("converted to uppercase","success");
    }
    const handlelow=()=>{
        setText(text.toLowerCase());
        props.showalert("converted to lowercase","success");
    }
    const handleonchange=(event)=>{
        // console.log('handled on change');
       setText(event.target.value);
    }
    const countwords=(text)=>{
        let i;
        let c=0
        for (i=0;i<=text.length;i++){
            if (text[i]===" "){
                c=c+1;
            }
        }
        return c;
    }
    const handleextraspace=()=>{
        let nr=text.split(/[ ]+/);
        setText(nr.join(" "))
        props.showalert("Extra spaces removed","success");
    }
    const clear=()=>{
        setText("");
        props.showalert("Text cleared","success");
    }
    const [text,setText]=  useState('enter your text in box');
    return(
        <>
        <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">example textarea</label>
        <textarea className="form-control" value={text} 
        onChange={handleonchange} id="mybox" rows="10"></textarea>
        <button className="btn btn-primary mx-2" onClick={handleup}>convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handlelow}>convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={clear}>Clear all</button>
        <button className="btn btn-primary mx-2" onClick={handleextraspace}>Remove extra spaces</button>
      </div>
      <div className="container">
        <h1>your text summary</h1>
        <p>{countwords(text)} words, {text.length}characters</p>
        <span>{countwords(text)*0.008*60} seconds to read</span>
        <h2>Preview
        </h2>
        <p>
            {text.toLowerCase()}
        </p>
      </div>
    </div>
        </>
    );
}