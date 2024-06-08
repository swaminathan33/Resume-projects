import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

import './Css/Discover.css'
import SongCardBig from '../Components/SongCardBig'
import AlbumsCard from '../Components/AlbumsCard'

const Discover = () => {
  const [newReleases, setNewReleases] = useState(null)
  const [albums, setAlbums] = useState(null)
  const token = window.localStorage.getItem('token')

  const searchNewReleases = async () =>{
    const {data} = await axios.get(`https://api.spotify.com/v1/browse/new-releases`, {
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    setNewReleases(data.albums.items)
  }


  const searchAlbums = async () =>{
    const {data} = await axios.get('https://api.spotify.com/v1/artists/', {
      headers:{
        Authorization: `Bearer ${token}`
      },
      params:{
        ids:'2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6,0TnOYISbd1XYRBk9myaseg'
      }
    })
    setAlbums(data.artists)
    console.log(data.artists)
  }

  useEffect(() =>{
    searchNewReleases()
    searchAlbums()
  } ,[])

  return (
    <div className='discover'>
      <div className="discover-content">
        <div className="d-title">Discover</div>
        <div className="d-description">
        Explore sonic realms with our Discover feature.
        </div>
        <div className="discover-feed">
          <div className="new-releases">
          {
           newReleases ?  newReleases.splice(0,10).map((item, index) =>{
            return <SongCardBig key={index} name={item.name} date={item.release_date} tracks={item.total_tracks} imgUrl={item.images[0].url} />
          }) : ''
          }
          </div>
          <div className="d-title">Suggested Albums</div>
            <div className="d-description">Discover new sounds with handpicked artists tailored to your taste.</div>
          <div className="artist-albums">
            {
              albums ? albums.map((item, index) => {
                return <AlbumsCard key={index} name={item.name} imageUrl={item.images[0].url} />
              }) : ''
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discover
