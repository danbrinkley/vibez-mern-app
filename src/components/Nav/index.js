import React from "react";
import {Routes, Route } from 'react-router-dom'
import Login from '../Auth/Login'
import VibezApp from '../VibezApp'

const Nav = () => {

  //   state = {
    //     navigate: false
    // }
    
    // handleLogout() {
      //     logout();
      //     this.setState({
        //         navigate: true
        //     })
        // }
        
        // render() {
          //   const { navigate } = this.state;
          
          //   if (navigate) {
            //       return <Navigate to="/" push={true} />;
            //   }
 return(
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<VibezApp />} />
    
      </Routes>
    
    
   
    )
  }


export default Nav

