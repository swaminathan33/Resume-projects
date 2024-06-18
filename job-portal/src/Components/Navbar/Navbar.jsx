import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useGlobalAuthContext } from '../Context/AuthContext'

const Navbar = () => {
  const {currentUser, logout} = useGlobalAuthContext();

  return (
    <div className='navbar'>
      <div className="logo">
        <Link to={'/'}>Job-Hunt</Link> 
      </div>
      <div className="pages">
        <div className="list">
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/jobs'}>Jobs</Link>
            </li>
            {/* <li>
              <Link to={'/contact'}>Contact Us</Link>
            </li> */}
          </ul>
        </div>
        <div className="buttons">
          <div className="login">
            <Link to={'/login'}>
            <button>Login</button>
            </Link>
          </div>
          <div className="register">
            {
              currentUser ? 
              <button onClick={logout}>LogOut</button>
              :
              <Link to={'/register'}><button>Register</button></Link>
            }
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
