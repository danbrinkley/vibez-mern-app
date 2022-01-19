import React from "react";
import { Switch, Route } from "react-router-dom";
// import SignupPage from "../components/pages/SignupPage";
// import LoginPage from "../components/pages/LoginPage";
import VibezPlayer from "../components/Vibez/VibezPlayer";
// import ProfilePage from "../components/pages/ProfilePage";

const Routes = () => (
  <Switch>
    {/* <Route exact path="/register" render={(props) => <SignupPage {...props} />}/>
    <Route exact path="/auth/login" render={(props) => <LoginPage {...props} />} />
// <Route exact path="/profile" render={(props) => <ProfilePage {...props} />}/> */}

<Route exact path="/home" render={(props) => <VibezPlayer {...props} />} />
  </Switch>
);

export default Routes;