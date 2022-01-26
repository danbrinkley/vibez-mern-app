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
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />

        
        </Routes>
      </Router>
      </Provider>
  );
  }
}

export default App;
