import React , { useState }  from 'react'
import copy from "copy-to-clipboard";

export default function TextForm(props) {
  const[text , setText] = useState("")

  const NullValeAlert = () => {
    if (text === ""){
      props.showAlert ("Kindly First Enter Text below","warning")
    }
  }

  // upper case 
  const upperCase = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to UPPER CASE ","success")
    NullValeAlert()
  }

  
  // lower case 
  const lowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted to LOWER CASE ","success")
    NullValeAlert()
  }
  // clear text 
  const ClearText = () => {
    let newText ="" ;
    setText(newText)
    props.showAlert("Clear Text ","success")
    NullValeAlert()
  }

  //copy to clipBoard
  const ClipBoard = ()=>{
    copy(text);
    // alert(` you text has been copied ${text} `)
    props.showAlert("your text has been copied","success")
    NullValeAlert()
  }

  //this is the onchange event listener to the text area 
  const handeleOnchange = (event) => {
    // console.log("handle on change has been clicked")
    setText(event.target.value)
  }
  return (
    <>
      <div className='container my-3 mx-6' style ={{color : props.mode==="light" ? "black":"white"}} >
        <h1>{props.heading}</h1>   
        <div className="mb-10">
          <textarea className="form-control" placeholder='Enter the text here .....' onChange={handeleOnchange} style={{backgroundColor : props.mode==="light" ? "white":"#343a40" ,color : props.mode==="light" ? "black":"white"}} value={text} id="exampleFormControlTextarea1" rows={8}></textarea>
        </div>
        <button type="button" onClick={upperCase} className="btn btn-outline-info my-3 mx-2">Uppper case</button>
        <button type="button" onClick={lowerCase} className="btn btn-outline-primary my-3 mx-2">Lower case</button>
        <button type="button" onClick={ClearText} className="btn btn-outline-danger my-3 mx-2"> Clear </button>
        <button type="button" onClick={ClipBoard} className="btn btn-outline-success my-3 mx-2"> copyToClipboard </button>

   
      </div>
      <div className='container' style ={{color : props.mode==="light" ? "black":"white"}}>
        <h1>You Text Summary :- </h1>
        <p>{text.split(" ").length} words and {text.length} charecter</p>
        <h2>Preview :-</h2>
        <p id='preview'>{text.length>0 ? text :"Write above something for the preview"}</p>

      </div>
    </>
  )
}


