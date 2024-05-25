import React from 'react'
import { IoSearch } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
import profile from '../assets/profile.jpg'
import './Css/Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-title">
        <Link to={'/'}>SocialDemo</Link>
        </div>
        <div className="navbar-search">
            <IoSearch color='black' size={'22px'} />
            <input type="text" placeholder='search for friends, post etc...' />
        </div>
        <div className="navbar-links">
            <IoPerson size={'17px'} />
            <IoIosNotifications size={'19px'} />
            <FaMessage size={'15px'}/>
        </div>
        <div className="navbar-profile">
            <Link to={'/profile'}><img src={profile} alt="profile-photo" /></Link>
        </div>
    </div>
  )
}

export default Navbar
