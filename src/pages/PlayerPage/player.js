import React from 'react'
import { useLocation } from 'react-router-dom'
import "./player.css"
export default function Player() {

    const location = useLocation();
    
  return (
    <div className='screen-container'>test P
    <div className='left-player-body'></div>
    <div className='right-player-body'></div>
    </div>
  )
}
