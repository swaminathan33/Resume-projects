import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { useGlobalContext } from '../context'

const Navbar = () => {
  const {cartLength, setCartLength, cartAdded} = useGlobalContext();

  useEffect(() => {
    cartAdded.map((item, index) => setCartLength(index + 1))
  })

  return (
    <div className='navbar'>
      <ul>
      <li><Link to={'/'}>Home</Link></li>
     <li> <Link to={'/shop'}>shop</Link></li>
      <li><Link to={'/cart'} className='cart_icon'>Cart<span className='cart_length'>{cartLength}</span></Link></li>
      <li><Link to={'/About'}>About</Link></li>
      <li><Link to={'/contact'}>Contact</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
