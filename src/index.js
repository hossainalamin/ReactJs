import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Form from './Form'
ReactDOM.render(
  <>
  <div className='container'>
        <App/>
        <hr/>
        <Form/>
  </div>
  </>,
  document.querySelector("#root")
)
reportWebVitals();
