import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import logo from "../../images/logo.png";
import "./navbar.css";
import Login from '../Auth/Login'
 
const NavBar = () => {
    return(
    <div className="nav-ctr">
        <div className="logo-ctr">
          <img className="logo" src={logo} alt="website logo" />
        </div> 
    <Login />    

      </div> 
  
    )
  }


export default NavBar;