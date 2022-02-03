import React from "react";
import PlaylistItems from "./PlaylistItems";
import "./playlist.css";
import pic4 from "../../images/pic4.png";

const PopularPlaylist = () => {
  return (
    <div
      style={{
        marginLeft: 0,
        marginRight: 0,
        marginTop: 5
      }}
    >
      <h3>Popular Playlist </h3>
      <PlaylistItems show={3}>
        <div className="carousel-indiv-ctr">
          <div style={{ padding: 8 }}>
            <img src={pic4} alt="placeholder" className="carousel-image" />
            <p>Playlist Title</p>
          </div>
        </div>
        <div className="carousel-indiv-ctr">
          <div style={{ padding: 8 }}>
            <img src={pic4} alt="placeholder" className="carousel-image" />
            <p>Playlist Title</p>
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img src={pic4} alt="placeholder" className="carousel-image" />
            <p>Playlist Title</p>
          </div>
        </div>
        <div className="carousel-indiv-ctr">
          <div style={{ padding: 8 }}>
            <img src={pic4} alt="placeholder" className="carousel-image" />
            <p>Playlist Title</p>
          </div>
        </div>
        <div className="carousel-indiv-ctr">
          <div style={{ padding: 8 }}>
            <img src={pic4} alt="placeholder" className="carousel-image" />
            <p>Playlist Title</p>
          </div>
        </div>
        <div className="carousel-indiv-ctr">
          <div style={{ padding: 8 }}>
            <img src={pic4} alt="placeholder" className="carousel-image" />
            <p>Playlist Title</p>
          </div>
        </div>
        <div className="carousel-indiv-ctr">
          <div style={{ padding: 8 }}>
            <img
              src="https://via.placeholder.com/300x300"
              alt="placeholder"
              className="carousel-image"
            />
            <p>Playlist Title</p>
          </div>
        </div>
        <div className="carousel-indiv-ctr">
          <div style={{ padding: 8 }}>
            <img
              src="https://via.placeholder.com/300x300"
              alt="placeholder"
              className="carousel-image"
            />
            <p>Playlist Title</p>
          </div>
        </div>
      </PlaylistItems>
    </div>
  );
};

export default PopularPlaylist;
