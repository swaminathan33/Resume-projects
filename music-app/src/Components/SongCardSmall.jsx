import React, { useState } from 'react'
import './Css/SongCardSmall.css'
import Photo from '../assets/Photo.jpg'

const SongCardSmall = ({data}) => {
  return (
    <div className='songcardsmall'>
      <img src={data.album.images[0].url} alt="" />
      <div className="content">
        <div className="title">{data.album.name}</div>
      </div>
    </div>
  )
}

export default SongCardSmall
