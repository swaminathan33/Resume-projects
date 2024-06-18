import React from 'react'
import './Jobs.css'
import Navbar from '../../Components/Navbar/Navbar'
import FilterCard from '../../Components/FilterCard/FilterCard'
import JobCard from '../../Components/JobCard/JobCard'
import Footer from '../../Components/Footer/Footer'
import { useGlobalJobContext } from '../../Components/Context/JobDetails'

const Jobs = () => {

  const {job_details} = useGlobalJobContext();
  
  return (
    <div className='jobs'>
      <Navbar />
      <div className="jobs-content">
      <FilterCard />
      <div className="jobs-cards">
        {/* {
          job_cards.map((i) => {
            return <JobCard />
          })
        } */}
        {
          job_details.map((j) => {
            return <JobCard details={j} />
          })
        }
        
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Jobs
