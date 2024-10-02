import React from "react";

const Education = () => {
  const education = [
    {
      id: 0,
      image: "#",
      name: "College Name",
      course: "Bachelor Of Computer Application",
      timline: "2024-2026 | Pursuing",
    },
    {
      id: 0,
      image: "#",
      name: "College Name",
      course: "Bachelor Of Computer Application",
      timline: "2024-2026 | Pursuing",
    },
  ];
  return (
    <div>
      <h2>My Education</h2>
      {education.map((i) => {
        return (
          <div>
            <div className="image">{i.image}</div>
            <div className="text">
              <div className="title">{i.course}</div>
              <div className="title">{i.name}</div>
              <div className="title">{i.timline}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
