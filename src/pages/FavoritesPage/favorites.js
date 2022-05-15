import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import APIKit from '../../spotify';
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import './favorites.css'
export default function Favorites() {
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        APIKit.get('me/tracks').then(function (response){
            console.log(response.data);
            setTracks(response.data.items);
        });
    }, []);
const navigate = useNavigate();

const playTrack = (id) => {
    navigate('/player', { state: { id: id }});
};
  return (
    <div className='screen-container'>
    <div className='favorites-body'>
        {tracks.map((track) => (
            <div className='track-card' key={track.track.id}>
                 <img src={track.track.album.images[0].url}
        className="track-image"
        alt="track-Art"></img>

            
        <p className='track-title'> {track.track.name} </p>
        <p className='track-subtitle'> By: {track.track.artists[0].name}  </p>
        <div className="track-fade">
              {/* <IconContext.Provider value={{ size: "50px", color: "#E99D72" }}>
                <AiFillPlayCircle />
              </IconContext.Provider> */}

        </div>
</div>
))}
</div>
</div>
)
}

