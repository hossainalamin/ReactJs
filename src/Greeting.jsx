import React from "react";
let date = new Date()
date = date.getHours()
let greeting = "";
var cssStyle = {}
if(date >=1 && date <12){
    greeting = "Good Morning";
    cssStyle.color = "Green";
}
if(date >=12 && date <19){
    greeting = "Good Afternoon";
    cssStyle.color = "Orange";
}
if(date >=19 && date <=24){
    greeting = "Good night";
    cssStyle.color = "Black";
}

function Greeting(){
    return <span style={cssStyle}>{greeting}</span>;
}
export default Greeting;