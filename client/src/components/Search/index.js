import React from "react";
import "./search.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <div className="search-ctr">
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
          <FontAwesomeIcon icon={faSearch} color="white" />
        </InputGroup.Text>
        <FormControl
          placeholder="Search songs, artist, and albums"
          aria-label="Search"
          aria-describedby="basic-addon1"
          className="search"
        />
      </InputGroup>
    </div>
  );
};

export default Search;
