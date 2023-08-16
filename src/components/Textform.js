import React, {useState} from 'react'


export default function Textform(props){
    const handleup=()=>{
        // console.log('uppercase was clicked')
        setText(text.toUpperCase());
    }
    const handleonchange=(event)=>{
        // console.log('handled on change');
       setText(event.target.value);
    }
    const [text,setText]=  useState('enter your text in box');
    return(
        <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">example textarea</label>
        <textarea className="form-control" value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="10"></textarea>
        <button className="btn btn-primary" onClick={handleup}>convert to uppercase</button>
      </div>
    </div>
    );
}