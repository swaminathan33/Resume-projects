import React, { useState } from 'react'
import { FaGift } from "react-icons/fa6";
import './Css/SideBarRight.css'

const SideBarRight = () => {
  const ad = 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/shoes-ads-design-template-72e8a0d99463c5612b81496e64b3dfd6_screen.jpg?ts=1618297509'
  const [friends, setFriends] = useState([
    {
      name:'Jackson Raj',
      photo:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      name:'Michael',
      photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Crm0tHuxLJbJDZ4kopg-Ti9AJ-Rg8-_k9PyT_XZNiw&s'
    },
    {
      name:'Anderson',
      photo:'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg'
    },
    
  ])

  return (
    <div className='sidebarright'>
      <div className="birthdays">
          <FaGift size={20} color='red' /> 
          <span><b>Raj</b> and <b>3 others</b> have a birthday today.</span>
      </div>
      <div className="advertisement">
        <img src={ad} alt="" />
      </div>
      <div className="friends">
        <div className="friends_title">
          <b>Online Friends</b>
        </div>
        <div className="friends_list">
          <ul>
            {
              friends.map((friend, index) => {
                return <li key={index}>
                <img src={friend.photo} alt="" />
                <div className="friend_name">{friend.name}</div>
              </li>
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBarRight
