import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPersonal } from "../Components/Slices/FormDetails";
import { useNavigate } from "react-router-dom";

const PersonalDetails = () => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDetails((d) => {
      return { ...d, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPersonal(details));
    navigate("/experience");
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border-2 p-2"
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="border-2 p-2"
          onChange={handleChange}
        />
        <input
          type="number"
          name="number"
          placeholder="Phone Number"
          className="border-2 p-2"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border-2 p-2"
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="border-2 p-2"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PersonalDetails;
