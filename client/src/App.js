import React, { useEffect } from "react"
import "./App.css";
import Navbar from "../src/components/NavBar";
import Search from "../src/components/Search";
import TableList from "../src/components/Table";
import Welcome from "../src/components/Welcome";
import YourPlaylist from "../src/components/Playlist/YourPlaylist";
import PopularPlaylist from "../src/components/Playlist/PopularPlaylist";
import Player from "../Player";

import { Provider } from "react-redux";
import store from './store'
import { loadUser } from './actions/authActions'
import 'bootstrap/dist/css/bootstrap.min.css'




const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
    <div className="homepage-ctr">
      <Navbar />
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