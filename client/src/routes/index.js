import React from "react";
import { Router, Route } from "react-router";
// import SignupPage from "../components/pages/SignupPage";
// import LoginPage from "../components/pages/LoginPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";

const Routes = () => (
  <Router>
     {/* <Route exact path="/register" render={(props) => <SignupPage {...props} />}/>
      <Route exact path="/auth/login" render={(props) => <LoginPage {...props} />} /> */}
        <Route exact path="/profile" render={(props) => <ProfilePage {...props} />}/> 
          <Route exact path="/home" render={(props) => <HomePage {...props} />} />
  </Router>
);

export default Routes;