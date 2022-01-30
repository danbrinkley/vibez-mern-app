import React, { useEffect, useState } from "react"
import "./homepage.css";
import logo from "../images/logo.png";
import NavBar from "./Nav";
import Search from "./Search";
import TableList from "./Table";
import Welcome from "./Welcome";
import YourPlaylist from "./Playlist/YourPlaylist";
import PopularPlaylist from "./Playlist/PopularPlaylist";
import Player from "./Player";
// import PostList from "./Posts/PostList";
// import PostForm from "./Posts/PostForm";
// import * as PostService from "../api/PostService";
// import { getUser } from "../api/UserService";







const VibezApp = () => {

  
  return (
    
    <div className="homepage-ctr">
        <NavBar />
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
    

      </div>
      <div className="player-ctr">
        <Player />
      </div>
    </div>
   
    
  );
};

export default VibezApp;