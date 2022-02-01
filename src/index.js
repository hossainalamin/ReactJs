import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const name = "Md Alamin hossain"
var currentDate = new Date()
ReactDOM.render(
  [
  <h1>Top five favourite movies I watched</h1>,
  <p>Here is the list:</p>,
  <ol>
    <li>Life is beautifu</li>
    <li>Itihash</li>
    <li>Zindegi na Milegegi Doobara</li>
    <li>Ammajan</li>
    <li>Hazar bochor Dhore</li>
  </ol>,
  <h1>{`My name is ${name}`}</h1>,
  <p>{`Current date ${currentDate.toLocaleDateString()}`}</p>,
  <p>{`Current time ${currentDate.toLocaleTimeString()}`}</p>
  ],
  document.querySelector("#root")
)
// ReactDom.render(
//   <>
//     <p>This is nice using react</p>
//     <h1>Good Night</h1>
//   </>,
//   document.getElementById('para')
// )
reportWebVitals();
