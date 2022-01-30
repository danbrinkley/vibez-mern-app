import React from "react";
import PropTypes from "prop-types";
import "../navbar.css";

const UserDetails = ({ userImage, displayName }) => (
  <div className="user-ctr">
    <img alt="user" className="user-image" src={userImage} />
    <h4 className="user-name">{displayName}</h4>
  </div>
);


UserDetails.propTypes = {
  userImage: PropTypes.string,
  displayName: PropTypes.string
};

export default UserDetails;
