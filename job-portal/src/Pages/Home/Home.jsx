import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import FrontBanner from '../../Components/FrontBanner/FrontBanner'
import RoundButton from '../../Components/RoundButton/RoundButton'
import './Home.css'
import PathCard from '../../Components/PathCard/PathCard'

import { RiAccountBoxFill } from "react-icons/ri";
import { FaSearchengin } from "react-icons/fa";
import { IoDocumentAttach } from "react-icons/io5";
import { FaSuitcase } from "react-icons/fa6";
import Footer from '../../Components/Footer/Footer'
import { useGlobalAuthContext } from '../../Components/Context/AuthContext'

const Home = () => {
  const {currentUser} = useGlobalAuthContext();
  console.log(currentUser ? currentUser.email : currentUser)
  const jobs = [
    {
      job:'Senior full stack developer',
      blue:true
    },
    {
      job:'Front end developer',
      blue:false
    },
    {
      job:'Back-end developer',
      blue:false
    },
    {
      job:'Graphic Designer',
      blue:false
    },
    {
      job:'Lead Devops Engineer',
      blue:true
    },
    {
      job:'Employer Branding Associate',
      blue:false
    },
    {
      job:'Senior Accountant',
      blue:true
    },
  ]

  const paths = [
  {
    icon: <RiAccountBoxFill color='orange' fontSize={'45px'}/>,
    title:'Create an account'
  },
  {
    icon: <FaSearchengin color='violet' fontSize={'40px'}  />,
    title:'Search Job'
  },
  {
    icon: <IoDocumentAttach color='#3AC2BA' fontSize={'40px'}/>,
    title:'Upload CV/Resume'
  },
  {
    icon: <FaSuitcase color='#FBBB06' fontSize={'40px'} />,
    title:'Get Job'
  }
  ]
  return (
    <div className='home'>
      <Navbar />
      <FrontBanner />
      <div className="jobs-column-1">
          {
            jobs.map((job, index) =>{
              return <div key={index}>
                <RoundButton  job={job.job} blue={job.blue} />
              </div>
            })
          }
      </div>
      <div className="jobs-column-2">
          {
            jobs.slice(2).map((job, index) =>{
              return <div key={index} >
                <RoundButton job={job.job} blue={job.blue} />
              </div>
            })
          }
      </div>
      <div className="path-column">
        <div className="title">
          Get Hired in <span>4 Quick Easy Steps</span>
        </div>
        <div className="para">
          The quickest and most effective way to get hired by the top firm working in your 
          career interest areas.
        </div>
        <div className="path-cards">
          {
            paths.map((path, index) => {
              return <PathCard key={index} icon={path.icon} title={path.title} />
            })
          }
        </div>
      </div>
      <div className="jobs-column-3">
        <h1>
          <span>Countless Career Options</span> Are Waiting <br />
          For You to Explore
        </h1>
      </div>
      <Footer />
    </div>
  )
}

export default Home
