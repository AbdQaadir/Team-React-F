import React from 'react';

import Tracks from '../Tracks/Tracks'
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom'

const AlbumTracksList = (props) => {
    const { handleClick, currentTrack } = props
    const { tracks, artist_name, name, image } = props.album
    return ( 
     <div className=" my-3" >
         <Link to="/albums" style={{
           marginLeft : '2rem', 
           fontWeight : 900,
           borderRadius: '10px',
           boxShadow: '0 2px 8px rgba(0, 0, 0, 0.26)',
           padding: '.7rem 1rem',
           background: 'white',
           
           }}>
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
             <path fillRule="evenodd" d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"/>
             <path fillRule="evenodd" d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
           Album</Link>
        <Header 
           header="ALBUM"
           name={name}
           description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
           repellat, quisquam ad sequi ab distinctio."
           image={image}
        />
         {/* <h1>Album name : {name}</h1>
         <p className="display-4"> By : {artist_name}</p> */}
           <Tracks tracks={tracks}  handleClick={handleClick} currentTrack={currentTrack} />
     </div>
     );
}
 
export default AlbumTracksList;