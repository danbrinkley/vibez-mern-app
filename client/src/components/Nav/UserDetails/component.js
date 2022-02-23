import React from "react";
import PropTypes from "prop-types";
import "../navbar.css";

const UserDetails = ({ userImage, displayName }) => (
  <div className="user-ctr">
    <img alt="user" className="user-image" src={userImage} />
    <h3 className="user-name">{displayName}</h3>
  </div>
);


UserDetails.propTypes = {
  userImage: PropTypes.string,
  displayName: PropTypes.string
};

export default UserDetails;
