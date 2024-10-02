import React, { useState } from "react";

const Languages = () => {
  const [input, setInput] = useState({
    language: "",
    range: 0,
  });

  const handleChange = (e) => {
    e.preventDefault();
    console.log(input);
  };
  return (
    <div>
      <form action="">
        <label htmlFor="">Language Name</label>
        <input
          type="text"
          onChange={(e) =>
            setInput((i) => {
              return { ...i, [e.target.name]: e.target.value };
            })
          }
          name="language"
        />
        <label htmlFor="">Level {input.range}</label>
        <input
          type="range"
          min={0}
          max={5}
          name="range"
          onChange={(e) =>
            setInput((i) => {
              return { ...i, [e.target.name]: e.target.value };
            })
          }
        />
        <button onClick={handleChange}>Submit</button>
      </form>
    </div>
  );
};

export default Languages;
