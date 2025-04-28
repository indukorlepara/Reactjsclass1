import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {NavBar,Footer }  from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import { Home } from './Home';

import { Register } from './Register';
import Plans from './Plans';
import  Binding  from './Binding';
import Condtional from './Condtional';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home />} />
       <Route path='/plans' element={ <Plans/>} />
        <Route path="/register" element={ <Register/> } />
        <Route path="/binding" element={ <Binding name="indu"/>} />
        <Route path='/condtional' element= {<Condtional name="testconn"/>} />
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
