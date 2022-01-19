import React from "react";
import { Switch, Route } from "react-router-dom";
// import SignupPage from "../components/pages/SignupPage";
// import LoginPage from "../components/pages/LoginPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";

const Routes = () => (
  <Switch>
     {/* <Route exact path="/register" render={(props) => <SignupPage {...props} />}/>
      <Route exact path="/auth/login" render={(props) => <LoginPage {...props} />} /> */}
        <Route exact path="/profile" render={(props) => <ProfilePage {...props} />}/> 
          <Route exact path="/home" render={(props) => <HomePage {...props} />} />
  </Switch>
);

export default Routes;