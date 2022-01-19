import React from "react";
import Table from "react-bootstrap/Table";
import pic2 from "../../images/pic2.png";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./table.css";

const TableList = () => {
  return (
    <div className="table-ctr">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <h3>Playlist Title</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img className="playlist-photo" src={pic2} alt="playlist photo" />
            </td>
            <td>
              <p className="song-title">Song Title</p>
              <p className="artist">Artist</p>
            </td>

            <td>
              <p>1990</p>
            </td>
            <td>
              <FontAwesomeIcon icon={faTrash} color="white" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="playlist-photo" src={pic2} alt="playlist photo" />
            </td>
            <td>
              <p className="song-title">Song Title</p>
              <p className="artist">Artist</p>
            </td>
            <td>
              <p>1990</p>
            </td>
            <td>
              <FontAwesomeIcon icon={faTrash} color="white" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="playlist-photo" src={pic2} alt="playlist photo" />
            </td>
            <td>
              <p className="song-title">Song Title</p>
              <p className="artist">Artist</p>
            </td>
            <td>
              <p>1990</p>
            </td>
            <td>
              <FontAwesomeIcon icon={faTrash} color="white" />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TableList;
