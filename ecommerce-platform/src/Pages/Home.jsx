import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <div className='Home'>
      <Navbar />
      <div className="Home_title">
          <h3>Earth</h3>
          <p>Multi Purpose Store</p>
          <Link to={'shop'}><button>Shop Now</button></Link>
      </div>
    </div>
  )
}

export default Home
