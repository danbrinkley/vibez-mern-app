import React from "react";
import Navbar from "../NavBar";
import Search from "../Search";
import TableList from "../Table";
import Welcome from "../Welcome";
import YourPlaylist from "../Playlist/YourPlaylist";
import PopularPlaylist from "../Playlist/PopularPlaylist";
import Player from "../Player";
import "./vibez.css";
import PostList from '../Posts/PostList'
import PostModal from '../Posts/PostModal'
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
      <div className="post-ctr">
        {/* <PostModal />
        <PostList /> */}

      </div>
      <div className="player-ctr">
        <Player />
      </div>
    </div>
  );
};

export default VibezPlayer;
