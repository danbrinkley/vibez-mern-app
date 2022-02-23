import React, { Component } from "react";
import PropTypes from "prop-types";
import "./TrackSearch.css";

class TrackSearch extends Component {
  state = {
    searchTerm: ""
  };

  updateSearchTerm = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  render() {
    return (
      <div className="search-ctr">
        <form
          onSubmit={() => {
            this.props.searchSongs(this.state.searchTerm, this.props.token);
          }}
        >
          <input
            onChange={this.updateSearchTerm}
            type="text"
            placeholder="Search..."
            className="search"
          />
          <button
            onClick={e => {
              e.preventDefault();
              this.props.searchSongs(this.state.searchTerm, this.props.token);
            }}
          >
            <i className="fa fa-search search" aria-hidden="true" color="white" />
          </button>
        </form>
      </div>
    );
  }
}

TrackSearch.propTypes = {
  searchSongs: PropTypes.func,
  token: PropTypes.string
};

export default TrackSearch;
