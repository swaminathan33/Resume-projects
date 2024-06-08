import React from 'react'
import './Css/AlbumsCard.css'
import Photo from '../assets/Photo.jpg'

const AlbumsCard = ({imageUrl, name}) => {
  return (
    <div className='albums_card'>
        <div className="content">
        <img src={imageUrl} alt="" />
        <h4>{name}</h4>
        </div>
    </div>
  )
}

export default AlbumsCard
