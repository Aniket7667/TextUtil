import React, {useState} from "react"; 

export default function TextForm({heading, mode}){

    const[text,setText] = useState('');

  return (
    <div className={`text-${mode==='dark'?'light':'dark'}`}>
      <div className="conatiner mb-3" style={{backgroundColor:mode==='dark'?'rgb(4, 39, 67)':'white'}}>
        <h2 className={`text-${mode==='dark'?'light':'dark'}`}> {heading} </h2>
        <textarea className={`form-control text-${mode==='dark'?'light':'dark'}`} id="myBox" rows="8" value={text} onChange={(event)=>{setText(event.target.value)}} placeholder="Enter your text here" style={{backgroundColor:mode==='dark'?'rgb(4, 39, 67)':'white'}}></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={()=>{setText(text.toUpperCase())}}>UpperCase</button>
      <button className="btn btn-secondary mx-2" onClick={()=>{setText(text.toLowerCase())}}>LowerCase</button>
      <button className="btn btn-danger mx-2" onClick={()=>{setText('')}}>Clear</button>
        
      <div className="container my-4">
        <h1>Your text summary</h1>
        <p>{text.split(" ")[0]===""?0:text.split(" ").length} words and {text.length} characters</p>
      </div>
    </div>
  );
}

