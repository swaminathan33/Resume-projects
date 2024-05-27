import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import "./Css/Profile.css";
import SideBarLeft from "../Components/SideBarLeft";
import Beach from "../assets/beach.jpg";
import CreatePost from "../Components/CreatePost";
import Feed from "../Components/Feed";
import PhotoCircle from "../Components/PhotoCircle";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../Components/contexts/AuthContext";

const Profile = () => {
  const {logOut} = useAuthContext();
  const navigate = useNavigate();
  const handleLogOut = () =>{
    try{
      logOut()
      navigate('/login')
    } catch(err){
      console.log(err)
    }
  }

  const [friends, setFriends] = useState([
    {
      name: "Jackson Raj",
      photo:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "Michael",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Crm0tHuxLJbJDZ4kopg-Ti9AJ-Rg8-_k9PyT_XZNiw&s",
    },
    {
      name: "Anderson",
      photo:
        "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
    },
  ]);
  return (
    <div>
      <Navbar />
      <div className="profile">
        <SideBarLeft />
        <div className="profile_contents">
          <div className="banner_image">
            <img className="beach" src={Beach} alt="" />
            <PhotoCircle />
          </div>
          <div className="contents">
            <div className="feed">
              <CreatePost />
              <Feed />
            </div>
            <div className="infos">
              <div className="user_info">
                <b>User Information</b>
                <p>City: New York</p> <p>From: Kerala</p> <p>Relationship: Single</p>
              </div>
              <div className="online_friends">
                <b>User Friends</b>
                <ul>
                  {friends.map((friend, index) => {
                    return (
                      <li key={index}>
                        <img src={friend.photo} alt="" />
                        <div className="friend_name">{friend.name}</div>
                      </li>
                    );
                  })}
                </ul>
              </div>
                  <div className="logout_button">
                  <button onClick={handleLogOut}>Log Out</button>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
