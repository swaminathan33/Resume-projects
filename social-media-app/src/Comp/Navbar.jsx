import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const logOut = () => {
        signOut(auth).then(() => {
            
        })
        .catch((err) => console.log(err))
    }
  return (
    <div>
      <button onClick={logOut}>SignOut</button>
    </div>
  )
}

export default Navbar
