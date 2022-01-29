import React from "react";
import { Route, Routes } from 'react-router-dom'
import logo from "../../images/logo.png";
import "./navbar.css";
import VibezApp from "../VibezApp";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";
 
const Nav = (props) => {
    return(
    // <div className="nav-ctr">
    //     <div className="logo-ctr">
    //       <img className="logo" src={logo} alt="website logo" />
    //     </div> 
      
        <Routes>
          <Route
            path='/home/*'
            element={<VibezApp />}
            />
          {/* <Route
            path='*'
            element={<Navigate to='/' />}
            /> */}
          <Route
            path='/login'
            element={<Login />}
            />
          <Route
            path='/signup'
            element={<Signup />}
            />

          
        </Routes>
      

      // </div> 
  
    )
  }


export default Nav;