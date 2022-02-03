import React, {Component} from "react";
import logo from "../../images/logo.png";
import "./navbar.css";
import UserDetails from './UserDetails'
import { logout } from '../../api/UserService'
import { Navigate } from 'react-router-dom';

export default class Nav extends Component {

  state = {
    navigate: false
}

handleLogout() {
    logout();
    this.setState({
        navigate: true
    })
}
  
  render() {
    const { navigate } = this.state;

    if (navigate) {
        return <Navigate to="/" push={true} />;
    }
    return(
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
};


