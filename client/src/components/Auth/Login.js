
  
import React from "react";
import LoginForm from "./LoginForm";
import logo from "../../images/logo.png";

const Login = () => {
  return(
    <div className="login-ctr">
        <img className="logo" src={logo} alt="website logo" />
      <LoginForm />
    </div>
  )
};

export default Login;