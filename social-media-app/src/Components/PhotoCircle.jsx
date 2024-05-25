import React from 'react'
import profile from '../assets/profile.jpg'
import './Css/PhotoCircle.css'

const PhotoCircle = () => {
  return (
    <div className='photocircle'>
      <img width={20} height={20} src={profile} alt="" />
      <div className="title">
            <b>Karoline Sandria</b>
            <p>Nature Lover</p>
        </div>
    </div>
  )
}

export default PhotoCircle
