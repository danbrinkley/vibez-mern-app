import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import pic1 from "../images/pic1.png";
import "./navbar.css";
import { faCaretSquareDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navbar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
    }
  }
  
  render() {
    return(
    <div className="nav-ctr">
      <div className="user-ctr">
        <img className="user" src={pic1} alt="user picture and profile link" />
        <Link to ="/profile">
        <p> {this.state.name} UserName</p>
        </Link>
      </div>

      <div className="logo-ctr">
        <img className="logo" src={logo} alt="website logo" />
      </div>

      <div className="logout-ctr">
        <button className="logout-btn">LOGOUT</button>
        <button className="mobile-nav-btn">
          <FontAwesomeIcon icon={faCaretSquareDown} color="white" />
        </button>
      </div>
    </div>
    )
  }
};

export default Navbar;
