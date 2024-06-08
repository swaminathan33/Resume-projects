import React from 'react'
import './Css/LeftSidebar.css'
import { Link } from 'react-router-dom'

const LeftSidebar = () => {
  return (
    <div className='leftsidebar'>
      <div className="title">Music App</div>
      <div className="sub-title">Menu</div>
      <div className="links">
        <Link to={'#'} >Discover</Link>
      </div>
      <div className="links">
        <Link to={'#'}>Browse</Link>
      </div>
      <div className="links">
        <Link to={'#'}>Search</Link>
      </div>
      <div className="sub-title">Library
      </div>
      <div className="links">
        <Link to={'#'}>Create Playlists</Link>
      </div>
      <div className="sub-title">Account
      </div>
      <div className="links">
        <Link to={'#'}>Sign Up</Link>
      </div>
      <div className="links">
        <Link to={'#'}>Sign In</Link>
      </div>
    </div>
  )
}

export default LeftSidebar
