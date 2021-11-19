// node module imports
import React, { StrictMode } from 'react'; // importing official react core library 
import ReactDOM from 'react-dom'; // importing dom rendering package

// custom imports
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// React Dom should render a component -- AppComponent
ReactDOM.render(
  <StrictMode>
    <App/>
  </StrictMode>
  ,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
