import React from "react";
import {Routes, Route } from 'react-router-dom'
import Login from '../Auth/Login'
import VibezApp from '../VibezApp'

const Nav = () => {

 
 return(
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<VibezApp />} />

      </Routes>
    
    
   
    )
  }


export default Nav

