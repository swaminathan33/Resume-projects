import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExperience } from "../Components/Slices/FormDetails";
import { useNavigate } from "react-router-dom";

const Experience = () => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDetails((d) => {
      return { ...d, [e.target.name]: e.target.value };
    });
    console.log(details);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addExperience(details));
    navigate("/skills");
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="border-2 p-2"
          onChange={handleChange}
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          className="border-2 p-2"
          onChange={handleChange}
        />
        <input
          type="date"
          name="datefrom"
          placeholder="Date"
          className="border-2 p-2"
          onChange={handleChange}
        />
        <input
          type="date"
          name="dateto"
          placeholder="Date"
          className="border-2 p-2"
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="border-2 p-2"
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
        {/* <button type="submit">Next</button> */}
      </form>
    </div>
  );
};

export default Experience;
