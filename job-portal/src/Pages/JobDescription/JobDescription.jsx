import React, { useEffect, useState } from "react";
import "./JobDescription.css";
import Navbar from "../../Components/Navbar/Navbar";
import { useGlobalJobContext } from "../../Components/Context/JobDetails";
import { useParams } from "react-router-dom";

const JobDescription = () => {
  const {job_details} = useGlobalJobContext();
  let {id} = useParams();
  const [job, setJob] = useState([{
    
  }])

  const handleJob = () =>{
  const Jobs = job_details.filter((j) => id == j.id)
  setJob(Jobs)
  }

  useEffect(() => {
    handleJob()
  }, [])
  return (
    <>
            <Navbar />
    <div className="jobdescription">
      <div className="top">
        <div className="img">
          <img
            src={job ? job[0].img : ''}
            alt=""
          />
        </div>
        <div className="top-inside">
        <div className="job-title">
          <div className="title">{job[0].job}</div>
        </div>
        <div className="list-buttons">
          <button className="position">{job[0].positions}</button>
          <button className="time">Full Time</button>
          <button className="years">{job[0].years}</button>
          <button className="salary">{job[0].salary}</button>
          <button className="wfo">WFO</button>
        </div>
        </div>
        <div className="apply">
          <button>Apply Now</button>
        </div>
      </div>
      <div className="bottom">
        <h5>Job Description</h5>
        <p>
        A problem isn’t truly solved until it’s solved for all. That’s why Googlers build products that help create opportunities for everyone, whether down the street or across the globe. As a Technical Program Manager at Google, you’ll use your technical expertise to lead complex, multi-disciplinary projects from start to finish.
        </p>
        <b><h4>Essential Qualifications and Skills</h4></b>
        <ul>
          <li>8 years of experience managing cross-functional or cross-team projects.</li>
          <li>Experience with chips and embedded systems used in mobile devices.</li>
          <li>Experience in product development, program management, project management, professional services or engineering management.</li>
          <li>Expertise in major programming languages such as Groovy, Golang, Java.</li>
          <li>Knowledge of Docker, Kubernetes, and modern containerization technologies.</li>
          <li>Strong understanding of CICD standard methodologies and familiar with tools used in CICD pipeline: such as Jenkins, GitHub, Artifactory, Maven, Gradle, and SonarQube</li>
          <li>Experience in a high-tech industry.</li>
          </ul>
       </div>
    </div>
    
    </>
  );
};

export default JobDescription;
