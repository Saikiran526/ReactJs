import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import StudentList from './components/StudentList'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <App/> */}
  <StudentList/>
  </React.StrictMode>
);


reportWebVitals();
