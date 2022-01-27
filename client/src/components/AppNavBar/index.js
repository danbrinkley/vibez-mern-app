import React, {Component, Fragment} from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  Container,
  Collapse,
  Nav
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import logo from "../../images/logo.png";
import "./navbar.css";
import Register from '../Auth/Register'
import Logout from '../Auth/Logout'
import Login from '../Auth/Login'
 
class NavBar extends React.Component {

  state = {
    isOpen: false
  }

  static propTypes = {
    auth: PropTypes.object.isRequired
  }

  toggle = () => {
    this.setState({
      
    })
  }

  
  render() {

    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
        <NavItem>
          <span className="navbar-text mr-3">
            <strong>{ user ? `Welcome ${user.name}`: '' }</strong>
          </span>
        </NavItem>
            <NavItem>
              <Logout />
            </NavItem>

      </Fragment>
    )

    const guestLinks = (
      <Fragment>
            <NavItem>
              <Register />  
            </NavItem>
            <NavItem>
              <Login />
            </NavItem>

      </Fragment>
    )
    return(
    <div className="nav-ctr">
    <Navbar>
      <Container>
        <NavbarBrand href='/'>
          <div className="logo-ctr">
            <img className="logo" src={logo} alt="website logo" />
          </div>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className='ml-auto' navbar>
            { isAuthenticated ? authLinks: guestLinks }
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  </div>
    )
  }
};

const mapStateProps = state => ({
  auth: state.auth
})

export default connect(mapStateProps, null) (NavBar);