import React from "react";
const Slot = (probs)=>{
    let {x,y,z} = probs;
    if(x===y && y==z){
        return (
        <>
            <div className="card">
                <span style={{justifyContent : 'center',display : 'flex'}}>{x}{y}{z}</span>
                <hr/>
                <p style={{textAlign : 'center'}}>Mathing</p>
            </div>
        </>
    )
    }else{
        return (
            <>
                <div className="card">
                    <span style={{justifyContent : 'center',display : 'flex'}}>{x}{y}{z}</span>
                    <hr/>
                    <p style={{textAlign : 'center'}}>Not Mathing</p>
                </div>
            </>
        )
    }
}
export default Slot;