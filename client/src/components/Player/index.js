import React from "react";
import PropTypes from "prop-types";
import SongControls from "./SongControls";
import VolumeControls from "./VolumeControls";
import "./player.css";

const Player = ({ stopSong, pauseSong, resumeSong, audioControl }) => (
  <div className="player">
    <SongControls
      stopSong={stopSong}
      pauseSong={pauseSong}
      resumeSong={resumeSong}
      audioControl={audioControl}
    />
    <VolumeControls />
  </div>
);


Player.propTypes = {
  stopSong: PropTypes.func,
  pauseSong: PropTypes.func,
  resumeSong: PropTypes.func,
  audioControl: PropTypes.func
};

export default Player;
