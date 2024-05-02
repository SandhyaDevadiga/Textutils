import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("enter text here");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper Case", "Success");
  };
  const handleLowerCase = () => {
    //console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const eraseText = (event) => {
    setText("");
  };

  return (
    <>
    <div className="container" style={{backgroundColor:props.mode==='dark'?'grey':'white'}} />
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <label for="myBox" className="form-label"></label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}
          id="myBox"
          rows="5"
          
        ></textarea>
      </div>
      
      <div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary" onClick={handleLowerCase}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-3" onClick={eraseText}>
          Clear
        </button>
      </div>
      <div className="ms-1 container">
        <h1>Your text summary</h1>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} charecters
        </p>
        <p>{0.0008 * text.split(" ").length} minutes to read</p>
      
      </div>
    </>
  );
}
