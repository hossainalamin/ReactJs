import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const name = "Md Alamin hossain"
var currentDate = new Date()
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
ReactDOM.render(
  //[
  // <h1>Top five favourite movies I watched</h1>,
  // <p>Here is the list:</p>,
  // <ol>
  //   <li>Life is beautifu</li>
  //   <li>Itihash</li>
  //   <li>Zindegi na Milegegi Doobara</li>
  //   <li>Ammajan</li>
  //   <li>Hazar bochor Dhore</li>
  // </ol>,
  // <h1>{`My name is ${name}`}</h1>,
  // <p>{`Current date ${currentDate.toLocaleDateString()}`}</p>,
  // <p>{`Current time ${currentDate.toLocaleTimeString()}`}</p>
  // ],
  <>
  <h1 contentEditable="true" className="name">My name is {name}</h1>
  <div className='img-div'>
    <img src={img1} alt="Lorem image"/>
    <img src={img2} alt="Lorem image"/>
    <img src={img3} alt="Lorem image"/>
  </div>
  </>,
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
