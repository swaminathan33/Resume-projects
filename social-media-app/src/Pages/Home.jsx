import React from 'react'
import SideBarLeft from '../Components/SideBarLeft'
import SideBarRight from '../Components/SideBarRight'
import MiddleBar from '../Components/MiddleBar'
import './Css/Home.css'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='home'>
      <SideBarLeft />
      <MiddleBar />
      <SideBarRight />
    </div>
    </div>
  )
}

export default Home
