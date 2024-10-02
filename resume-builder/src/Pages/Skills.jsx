import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSkills } from "../Components/Slices/FormDetails";
import { useNavigate } from "react-router-dom";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setSkills((e) => [...e, input]);
    setInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSkills(skills));
    navigate("/education");
  };

  return (
    <div>
      <form action="" onSubmit={handleChange}>
        <input
          type="text"
          placeholder="Enter Your Skills"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button type="submit">Submit</button>
      </form>
      {skills.map((i, index) => {
        return (
          <div key={index}>
            {index + 1}. {i}
          </div>
        );
      })}
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
};

export default Skills;
