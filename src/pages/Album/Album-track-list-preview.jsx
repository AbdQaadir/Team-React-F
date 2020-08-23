import React from "react";
import { withRouter, useParams } from "react-router-dom";
import AlbumTracksList from "./album.track.list";

const AlbumTracks = (props) => {
  console.log(props)
  const albumId = props.match.params.albumid;
  
  const { albums, currentTrack, handleClick } = props;
  return (
    <div className="row" style={{marginRight : 0}}>
      <div className="col-10">
        {albums.map((album) => {
          return album.id === albumId ? (
            <AlbumTracksList
              album={album}
              currentTrack={currentTrack}
              handleClick={handleClick}
              key={album.id}
            />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default withRouter(AlbumTracks);
