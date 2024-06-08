import React from 'react'
import './Css/SongCardBig.css'
import Photo from '../assets/Photo.jpg'
const SongCardBig = ({name, imgUrl, date, tracks}) => {
  return (
    <div className='songcardbig'>
        <div>
      <img src={imgUrl} alt="" />
        </div>
      <div className="scb-content">
            <div className="scb-title"><b>{name}</b></div>
            <div className="scb-track">{tracks} tracks</div>
            <div className="scb-date">{date}</div>
      </div>
    </div>
  )
}

export default SongCardBig
