import React, { useState } from "react";
const Form = ()=>{
    const[myName,setName] = useState()
    const[name,setFormname] = useState()
    const formData = (event)=>{
        setName(event.target.value)
    }
    const submitData = ()=>{
        setFormname(myName)
    }
    return (
        <>
        <div>
            <h2 style={{justifyContent : 'center',display : 'flex'}}>Hello {name}</h2>
            <input type="text" placeholder = "Enter your name" onChange={formData}/><br/><br/>
            <button className="btn btn-success" onClick={submitData}>Click Me</button>
         </div>   
        </>
    )
}
export default Form;