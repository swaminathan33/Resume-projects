import React, {Component} from 'react'
import profile from '../assets/profile.jpg'
import { BsThreeDotsVertical } from "react-icons/bs";
import './Css/Post.css'

const Post = ({name, time, text, image}) => {
  return (
    <div className='post'>
      <div className="top">
        <div>
        <div className="img">
        <img src={profile} alt="" /></div>
        <div className="name">{name}</div>
        <div className="time">{time}</div>
        </div>
        <BsThreeDotsVertical />
      </div>
      <div className="bottom">
        <div className="text">{text ? text : ''}</div>
        {image ? <img src={image} alt="" /> : ''}
      </div>
    </div>
  )
}

export default Post
