import React from "react";
import "./JobCard.css";
import { IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const JobCard = ({details, index}) => {
  return (
    <div className="jobcard">
      <div className="row-1">
        <div className="row-1-first">
          <div className="img">
            <img
              alt=""
              src={details.img}
            />
          </div>
          <div className="job-location">
            <div className="name">{details.company}</div>
            <div
              className="place"
              style={{ color: "rgb(104, 103, 103)", fontSize: "13px" }}
            >
              USA
            </div>
          </div>
        </div>
        <IoHeartOutline fontSize={"20px"} />
      </div>
      <div className="row-2">
        <div className="job-title">{details.job}</div>
        <div className="job-description">
          As a project manager, your work will cut across areas of judicious
          planning, operational...
        </div>
      </div>
      <div className="row-3">
        <button className="position">{details.positions}</button>
        <button className="time">Full Time</button>
        <button className="years">{details.years}</button>
        <button className="salary">{details.salary}</button>
        <button className="wfo">WFO</button>
      </div>
      <div className="row-4">
        <div className="apply">
          <button>Apply Now</button>
        </div>
        <div className="details">
        <Link to={`/jobinfo/${details.id}`}><button>View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
