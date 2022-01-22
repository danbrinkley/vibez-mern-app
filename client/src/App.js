import React, { Component } from "react";
import AppRoutes from "./AppRoutes";
import { 
  BrowserRouter as Router,
  Routes,
  Route, 
    } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import { Provider } from "react-redux";
import store from './store'
import { loadUser } from './actions/authActions'





class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser())
  }
render() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          
        {/* <Route exact path="/register" render={(props) => <SignupPage {...props} />}/>
      <Route exact path="/auth/login" render={(props) => <LoginPage {...props} />} /> */}
        {/* <Route exact path="/profile" render={(props) => <ProfilePage {...props} />}/> 
          <Route exact path="/home" render={(props) => <HomePage {...props} />} /> */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />

        
        </Routes>
      </Router>
      </Provider>
  );
  }
}

export default App;
