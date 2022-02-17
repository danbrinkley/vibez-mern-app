import React from "react";
import YourPlaylistItems from "./YourPlaylistItems";
import "./playlist.css";
import pic3 from "../../images/pic3.png";
import pic4 from "../../images/pic4.png";
import pic5 from "../../images/pic5.png";

const PopularPlaylist = () => {
  return (
    <div
      style={{
        maxWidth: 1200,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 5
      }}
    >
      <h3>Your Playlist </h3>
      <YourPlaylistItems show={3}>
        <div className="carousel-indiv-ctr">
          <div style={{ padding: 8 }}>
            <img src={pic3} alt="placeholder" className="carousel-image" />
            <p>Playlist Title</p>
          </div>
        </div>
        <div className="carousel-indiv-ctr">
          <div style={{ padding: 8 }}>
            <img src={pic5} alt="placeholder" className="carousel-image" />
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
            <img src={pic3} alt="placeholder" className="carousel-image" />
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
      </YourPlaylistItems>
    </div>
  );
};

export default PopularPlaylist;
