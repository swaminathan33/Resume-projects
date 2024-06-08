import React, { useEffect, useState } from 'react'
import './Css/RightSidebar.css'
import SongCardSmall from './SongCardSmall'
import axios from 'axios'

const RightSidebar = () => {
  const token = localStorage.getItem('token')
  const [recommendations, setRecommendations] = useState([])

  const handleRecommendations = async () =>{
    const {data} = await axios.get(`https://api.spotify.com/v1/recommendations`, {
      headers:{
        Authorization:`Bearer ${token}`
      },
      params:{
        seeds_artists:'4NHQUGzhtTLFvgF5SZesLK',
        seed_genres: 'classical,country',
        seed_tracks:'0c6xIDDpzE81m2q797ordA'
      }
    })
    setRecommendations(data.tracks.slice(0,4))
  }

  useEffect(() => {
    handleRecommendations()
  }, [])
  return (
    <div className='rightsidebar'>
      <div className="title">Albums</div>
      {
        recommendations.map((i, index) =>{
          return <SongCardSmall key={index} data={i} />
        })
      }
      <div className="title">Go mobile</div>
      <div className="content">
        <div className="button1">
          <button>Download on App Store</button>
        </div>
        <div className="button2">
          <button>Get it on Google Play</button>
        </div>
      </div>
      <div className="links">
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Legal</li>
          <li>Policy</li>
        </ul>
      </div>
      <p className='copyright'>©️ Copyright 2023</p>
    </div>
  )
}

export default RightSidebar
