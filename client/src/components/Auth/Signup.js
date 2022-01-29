
  
import React from "react";
import SignupForm from "./SignupForm";
import logo from "../../images/logo.png";

const Signup = () => {  
return (
    <div className="signup-ctr"> 
        <img className="logo" src={logo} alt="website logo"/>

        <SignupForm />
        </div>
    )
}

export default Signup;