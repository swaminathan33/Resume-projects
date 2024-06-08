import React, { useEffect } from 'react'
import './Css/Home.css'
import LeftSidebar from '../Components/LeftSidebar'
import Navbar from '../Components/Navbar'
import RightSidebar from '../Components/RightSidebar'
import Discover from '../Pages/Discover'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const token = window.localStorage.getItem('token')

    useEffect(() =>{
        if(!token){
            navigate('/signin')
        }
    }, [])
  return (
    <div className='home'>
    <LeftSidebar />
      <Navbar />
      <RightSidebar />
      <Discover />
    </div>
  )
}

export default Home
