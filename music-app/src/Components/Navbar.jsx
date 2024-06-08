import React from "react";
import "./Css/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="dropdown-button">
        <button>📁</button>
      </div>
      <div className="search-box">
        <input type="text" placeholder="search songs, albums ..." />
      </div>
      <div className="signin-button">
        <button>Sign Up</button>
      </div>
      <div className="login-button">
        <button>Log In</button>
      </div>
    </div>
  );
};

export default Navbar;
