
import React from "react";
import "./login.css";
import { accessUrl } from "../../spotify";
import logo from '../../images/logo.png'


function Login() {
  return (
    <div className="login-ctr">
      <img
        className="logo"
        src={logo}
        alt="logo"
      />

      <a href ={accessUrl}>
      <button
        className="login-btn">
          <i class="fa fa-spotify fa-lg"/> 
           <span>Login to Spotify</span></button>
      </a>
    </div>
  );
}

export default Login;