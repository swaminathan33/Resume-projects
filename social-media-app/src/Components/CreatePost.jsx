import React from 'react'
import './Css/CreatePost.css'
import profile from '../assets/profile.jpg'
import { IoMdPhotos } from "react-icons/io";
import { FaSmile, FaTags } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const CreatePost = () => {
  return (
    <div className='create_post'>
      <div className="top">
        <div className="pic">
          <img src={profile} alt="" />
        </div>
        <div className="text_box">
          <input type="text" placeholder="What's in your mind ?" />
        </div>
      </div>
      <div className="line"></div>
      <div className="bottom">
        <ul>
          <li>
            <IoMdPhotos color='#ff6347' size={'18px'} />
            <p>photo / video</p>
          </li>
          <li>
            <FaTags color='#0101ff'  size={'18px'}/>
            <p>tag</p>
          </li>
          <li>
            <FaLocationDot color='#008000' size={'18px'} />
            <p>Location</p>
          </li>
          <li>
            <FaSmile color='orange' size={'18px'} />
            <p>Feelings</p>
          </li>
          <li>
            <div className="share_button">
            <button>Share</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CreatePost
