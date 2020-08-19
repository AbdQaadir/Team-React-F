import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";

import "./Album.css";

class Album extends Component {
  constructor() {
    super();
     this.state = {
       filtered : ''
     }
  }

  componentDidMount() {
    let path = this.props.match.path;
    this.props.handlePath(path);
  }
  handleChange = e => {
    this.setState({
      filtered : e.target.value
    })

  }
  render() {
    const { albums, history, match } = this.props;
    const albumFiltered = albums.filter(album => album.name.toLowerCase().includes(this.state.filtered.toLowerCase()))
    console.log(albumFiltered)
    return (   
      <div className="row justify-content-center mx-0">
        <div className="col-2 px-0" id="sidebar">
          <Sidebar path={this.props.path} />
        </div>
        <input type="text" name="" id="" onChange={this.handleChange} placeholder="search by album name"/>
          {  !albumFiltered.length &&  <p className='empty'>Album not found</p>}           
        <div
          className="col-10  px-0 mx-0"
          style={{ position: "absolute", top : '8%'}}
        >
          <div className="row justify-content-end">
            {albumFiltered.map((album) => {
              return (
                <div
                  className="card col-3 m-2 p-2 album-container"
                  key={album.id}
                  onClick={() => history.push(`${match.url}${album.id}`)}
                >
                  <h5>{album.name}</h5>
                  <p>Artist id: {album.artist_id}</p>
                  <p>Artist name: {album.artist_name}</p>
                  <p>Album id: {album.id}</p>
                  <img src={album.image} alt="" className="w-25" />
                  <p>Release date: {album.releasedate}</p>
                  <p>No of tracks: {album.tracks.length}</p>
                   
                  {/* <p>Zip link: {album.zip}</p> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Album);
