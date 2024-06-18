import React from 'react'
import './PathCard.css'

const PathCard = ({icon, title}) => {
  return (
    <div className='pathcard' >
      <div className="icon">
            {icon}
      </div>
      <div className="pathcard_title">
        {title}
      </div>
      <div className="pathcard_para">
        Signup for the job applicant profile, mention your application, past experiences, and expertise
        and scope your interests, voila! you're all set to find your dream jobs.
      </div>
    </div>
  )
}

export default PathCard
