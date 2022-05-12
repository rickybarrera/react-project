import React from 'react'
import './AudioPlayer.css'
import Controls from './Controls';
import ProgressCircle from './ProgressCircle'
import WaveAnimation from './WaveAnimation';
export default function AudioPlayer({ currentTrack }) {
    const artists = [];
    currentTrack?.album?.artists.forEach((artist) => {
      artists.push(artist.name);
    });
  return (
    <div className='player-body flex'>
    <div className='player-left-body'>
        <ProgressCircle
              percentage={75}
              isPlaying={true}
              image={currentTrack?.album?.images[0]?.url}
              size={300}
              color="#C96850"
            />
    </div>
    <div className='player-right-body'>
    <p className="song-title"> {currentTrack?.name} </p>
    <p className="song-artist"> {artists.join(" | ")}</p>
        <div className='player-right-bottom'>
            <div className='song-duration'>
            <p className='duration'>0:01</p>
            <WaveAnimation />
            <p className='duration'>0:30</p>
            <Controls
            // isPlaying={isPlaying}
            // setIsPlaying={setIsPlaying}
            // handleNext={handleNext}
            // handlePrev={handlePrev}
            // total={total}
            />
            </div>
        </div>
    </div>
    </div>
  )
}
