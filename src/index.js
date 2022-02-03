import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const name = "Md Alamin hossain"
var currentDate = new Date()
currentDate = currentDate.getHours();
var greeting = " ";
var cssStyle = {};
if(currentDate >= 1 && currentDate < 12){
    greeting = "Good morming";
    cssStyle.color = "green";
}else if(currentDate >= 12 && currentDate < 19){
  greeting = "Good Afternoon";
  cssStyle.color = "Orange";
}else{
  greeting = "Good night"
  cssStyle.color = "Black"
}
ReactDOM.render(
  <>
  <div>
    <h1 >Hello sir, <span style={cssStyle}>{greeting}</span></h1>
  </div>
  </>,
  document.querySelector("#root")
)
reportWebVitals();
