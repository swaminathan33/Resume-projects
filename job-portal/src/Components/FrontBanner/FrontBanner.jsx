import React from 'react'
import './FrontBanner.css'
import { Link } from 'react-router-dom'

const FrontBanner = () => {
  return (
    <div className='frontbanner'>
        <div className="title-top">
            💼 No.1 Job Hunt Website
        </div>
        <div className="title">
            Search, Apply & <br /> Get Your <span>Dream Job</span>
        </div>
        <div className="para">
            Start Your hunt for the best, life-changing career oppourtunities from here in your 
            selected areas convenietly and get hired quickly.
        </div>
        <div className="buttons">
            <div className="browse">
            <Link to={'/jobs'}> <button>Browse Jobs</button></Link>
            </div>
            <div className="how">
                <button>▶️How It Works?</button>
            </div>
        </div>
    </div>
  )
}

export default FrontBanner
