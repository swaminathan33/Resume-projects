import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEducation } from "../Components/Slices/FormDetails";
import { useNavigate } from "react-router-dom";

const Education = () => {
  const dispatch = useDispatch();
  const [education, setEducation] = useState([]);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    course: "",
    college: "",
    start: "",
    end: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setEducation((i) => {
      return [...i, input];
    });
    setInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEducation(education));
    navigate("/template");
  };

  return (
    <div>
      <form action="">
        <input
          name="course"
          type="text"
          placeholder="Course"
          onChange={(e) =>
            setInput((i) => {
              return { ...i, [e.target.name]: e.target.value };
            })
          }
        />
        <input
          type="text"
          name="college"
          placeholder="School / College"
          onChange={(e) =>
            setInput((i) => {
              return { ...i, [e.target.name]: e.target.value };
            })
          }
        />
        <input
          type="date"
          name="start"
          onChange={(e) =>
            setInput((i) => {
              return { ...i, [e.target.name]: e.target.value };
            })
          }
        />
        <input
          type="date"
          name="end"
          onChange={(e) =>
            setInput((i) => {
              return { ...i, [e.target.name]: e.target.value };
            })
          }
        />
        <button onClick={handleChange}>Add</button>
        <button onClick={handleSubmit}>Next</button>
      </form>
      <div>
        {education.map((i, index) => {
          return (
            <div key={index}>
              <h1>{i.course}</h1>
              <h1>{i.college}</h1>
              <h1>{i.start}</h1>
              <h1>{i.end}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
