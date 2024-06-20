import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useGlobalAuthContext } from "../Context/AuthContext";
import { MdAccountCircle } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";
import { ImSwitch } from "react-icons/im";

const Navbar = () => {
  const { currentUser, logout } = useGlobalAuthContext();

  return (
    <div className="navbar">
      <div className="logo">
        <Link to={"/"}>Job-Huntz</Link>
      </div>
      <div className="pages">
        <div className="list">
          <ul>
            <li className="home_link">
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/jobs"}>Jobs</Link>
            </li>
            {/* <li>
              <Link to={'/contact'}>Contact Us</Link>
            </li> */}
          </ul>
        </div>
        <div className="buttons">
          <div className="login">
            <Link to={"/login"}>
              <button>
                <div className="text">Login</div>
                <div className="icon">
                  <MdAccountCircle fontSize={"22px"} />
                </div>
              </button>
            </Link>
          </div>
          <div className="register">
            {currentUser ? (
              <button onClick={logout}>
                <div className="text">LogOut</div>
                <div className="icon">
                  <ImSwitch />
                </div>
              </button>
            ) : (
              <Link to={"/register"}>
                <button>
                  <div className="text">Register</div>
                  <div className="icon">
                    <IoPersonAddSharp fontSize={"18px"} />
                  </div>
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
