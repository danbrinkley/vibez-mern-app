import React, { useEffect } from "react"
import "./App.css";
import AppNavbar from "./components/AppNavBar";
import Search from "./components/Search";
import TableList from "./components/Table";
import Welcome from "./components/Welcome";
import YourPlaylist from "./components/Playlist/YourPlaylist";
import PopularPlaylist from "./components/Playlist/PopularPlaylist";
import Player from "./components/Player";

import { Provider } from "react-redux";
import store from './store'
// import { loadUser } from './actions/authActions'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from "reactstrap";




const App = () => {
  // useEffect(() => {
  //   store.dispatch(loadUser());
  // }, []);
  return (
    <Provider store={store}>
    <div className="homepage-ctr">
      <AppNavbar />
      <div className="home-ctr">
        <div className="right-ctr">
          <Welcome />
          <Search />
          <TableList />
        </div>

        <div className="left-ctr">
          <PopularPlaylist />
          <YourPlaylist />
        </div>
      </div>
      <div className="post-ctr">
        {/* <PostModal />
        <PostList /> */}

      </div>
      <div className="player-ctr">
        <Player />
      </div>
    </div>
   
    </Provider>
  );
};

export default App;