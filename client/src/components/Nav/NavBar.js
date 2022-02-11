import React from 'react'
import logo from "../../images/logo.png";
import "./navbar.css";
import UserDetails from './UserDetails'

const NavBar = () => {

    return (

        <div className="nav-ctr">
        <UserDetails />
  
        <div className="logo-ctr">
          <img className="logo" src={logo} alt="website logo" />
        </div>
  
        <div className="logout-ctr">
          <button className="logout-btn"
          onClick={() => this.handleLogout()}>
            LOGOUT
            </button>
        </div>
      </div>

    )
}

export default NavBar