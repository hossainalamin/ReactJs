import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <>
  <div className='container'>
    <div className='row'>
      <div className='col'>
        <App/>
      </div>
    </div>
  </div>
  </>,
  document.querySelector("#root")
)
reportWebVitals();
