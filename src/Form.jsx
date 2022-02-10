import React, { useState } from "react";
const Form = ()=>{
    const[fullname,setFormname] = useState({
        fname : ' ',
        lname : ' '
    });
    const formData = (event)=>{
       const value =  event.target.value
       const name =  event.target.name
       setFormname((preVlaue)=>{
        if(name === 'fname' ){
            return{
            fname : value,
            lname : preVlaue.lname
            }
        }else if(name === 'lname' ){
            return{
            fname : preVlaue.fname,
            lname : value
            }
        }
    });
}
    // const submitData = ()=>{
        
    // }
    return (
        <>
        <form action="">
        <div style={{height : '330px'}}>
            <h2 >Hello {fullname.fname} {fullname.lname}</h2>
            <input type="text" placeholder = "Enter first name" style={{width:'300px'}} name = "fname" onChange={formData}/><br/><br/>
            <input type="text" placeholder = "Enter last name" style={{width:'300px'}} name = "lname" onChange={formData}/><br/><br/>
            <button className="btn btn-success">Click Me</button>
         </div>   
         </form>
        </>
    )
}
export default Form;