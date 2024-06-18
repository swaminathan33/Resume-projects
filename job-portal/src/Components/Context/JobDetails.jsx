import React, { createContext, useContext } from "react";

const JobContext = createContext();

const JobProvider = ({children}) =>{
    const job_details = [
        {
          id:1,
          img:'https://www.freepnglogos.com/uploads/linkedin-social-media-logo-7.png',
          job:'Full Stack Developer',
          company:'LinkedIn',
          positions:'5 positions',
          salary:'$85,000/year',
          years:'3 years'
        },
        {
          id:2,
          img:'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png',
          job:'Project Manager',
          company:'Google Inc.',
          positions:'2 positions',
          salary:'$105,000/year',
          years:'5 years'
        },
        {
          id:3,
          img:'https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-icon-symbol-png-logo-21.png',
          job:'ReactJs Developer',
          company:'Amazon',
          positions:'8 positions',
          salary:'$75,000/year',
          years:'3 years'
        },
        {
          id:4,
          img:'https://www.freepnglogos.com/uploads/512x512-logo/512x512-transparent-logo-download-twitter-png-transparent-image-and-clipart-12.png',
          job:'Lead DevOps Engineer',
          company:'Twitter',
          positions:'1 position',
          salary:'$55,000/year',
          years:'3 years'
        },
        {
          id:5,
          img:'https://www.freepnglogos.com/uploads/windows-logo-png/windows-logo-microsoft-exchange-pour-tous-microsoft-exchange-made-22.png',
          job:'Product Designer',
          company:'Microsoft',
          positions:'2 positions',
          salary:'$15,000/year',
          years:'1 years'
        },
        {
          id:6,
          img:'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png',
          job:'AngularJs Developer',
          company:'Google Inc.',
          positions:'6 positions',
          salary:'$65,000/year',
          years:'5 years'
        },
        {
          id:7,
          img:'https://www.freepnglogos.com/uploads/linkedin-social-media-logo-7.png',
          job:'Team Lead - AWS',
          company:'LinkedIn',
          positions:'2 positions',
          salary:'$105,000/year',
          years:'5 years'
        },
        {
          id:8,
          img:'https://www.freepnglogos.com/uploads/windows-logo-png/windows-logo-microsoft-exchange-pour-tous-microsoft-exchange-made-22.png',
          job:'Project Manager',
          company:'Microsoft',
          positions:'1 positions',
          salary:'$95,000/year',
          years:'5 years'
        },
        {
          id:9,
          img:'https://www.freepnglogos.com/uploads/512x512-logo/512x512-transparent-logo-download-twitter-png-transparent-image-and-clipart-12.png',
          job:'Back-End Developer',
          company:'Twitter',
          positions:'2 positions',
          salary:'$45,000/year',
          years:'3 years'
        }, 
      ]
    
    return (
        <JobContext.Provider value={{job_details}}>
            {children}
        </JobContext.Provider>
    )
}

export const useGlobalJobContext = () =>{
    return useContext(JobContext)
}

export {JobContext, JobProvider };