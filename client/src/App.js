
import { BrowserRouter, Routes,Route } from "react-router-dom"
import React from 'react';
import Home from './Pages/Home' ;
import Login from './Pages/Login';
import Events from './Pages/Events';
import Signup from "./Pages/Signup";
import AdminList from './Components/admin_list';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/login" exact element = {<Login />} />
        <Route path = "/events" exact element = {<Events />} /> 
        <Route path = "/register" exact element = {<Signup />} />
        <Route path = "/admin_list" exact element = {<AdminList />} />


      </Routes>
    </div>
      
    </BrowserRouter>
      
  );
}

export default App;