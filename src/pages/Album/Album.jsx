import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import "./Album.css";

class Album extends Component {
  constructor() {
    super();
    this.state = {
      filtered: "",
    };
  }

  componentDidMount() {
    let path = this.props.match.path;
    this.props.handlePath(path);
  }
  handleChange = (e) => {
    this.setState({
      filtered: e.target.value,
    });
  };
  render() {
    const { albums, history, match } = this.props;
    const albumFiltered = albums.filter((album) =>
      album.name.toLowerCase().includes(this.state.filtered.toLowerCase())
    );
    console.log(albumFiltered);
    return (
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-2"
            style={{
              background: "white",
            }}
          >
            <Sidebar activePath="albums" />
          </div>
          <div className="col-10">
            <div className="row">
              <div class="jumbotron jumbotron-fluid w-100">
                <div class="container">
                  <h1 class="main-h1">JAAMZ ALBUMS</h1>
                  <p class="lead">
                    This is the total list of albums on Jaamz Music Streaming
                    app. You can search by name.
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control w-100"
                    onChange={this.handleChange}
                    placeholder="Start typing album name"
                  />
                  {!albumFiltered.length && (
                    <p className="empty">Sorry! No album match your search.</p>
                  )}
                </div>
              </div>
            </div>
            <div className="row justify-content-between">
              {albumFiltered.map((album) => {
                return (
                  <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-10 m-2 p-2 text-center">
                    <div
                      className="album-item rounded-circle"
                      key={album.id}
                      onClick={() => history.push(`${match.url}${album.id}`)}
                      style={{ background: `url(${album.image})` }}
                    ></div>
                    <h5>
                      <strong>
                        {album.name} - {album.tracks.length}
                      </strong>
                    </h5>
                    <p>by - {album.artist_name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Album);
