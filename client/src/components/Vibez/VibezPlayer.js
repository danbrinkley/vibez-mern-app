import React from "react";
import Navbar from "../NavBar";
import Search from "../Search";
import TableList from "../Table";
import Welcome from "../Welcome";
import YourPlaylist from "../Playlist/YourPlaylist";
import PopularPlaylist from "../Playlist/PopularPlaylist";
import Player from "../Player";
// import PostForm from './Post/PostForm'
// import PostHeader from './Post/PostHeader'
// import Post from './Post/Post'
// import { getUser } from "../api/UserService";
// import * as  PostService from '../api/PostService'
// import Footer from './Footer/Footer';
import "./vibez.css";
// import Likes from '../Components/LikeButton/Like'

const VibezPlayer = () => {
  return (
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
      <div className="player-ctr">
        <Player />
      </div>
    </div>
  );
};

export default VibezPlayer;
