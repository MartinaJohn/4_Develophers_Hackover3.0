
import { BrowserRouter, Routes,Route } from "react-router-dom"
import React from 'react';
import Home from './Pages/Home' ;
import Login from './Pages/Login';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/login" exact element = {<Login />} /> 

      </Routes>
    </div>
      
    </BrowserRouter>
      
  );
}

export default App;