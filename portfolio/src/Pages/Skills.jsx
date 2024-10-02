import React from "react";
import { IoLogoFirebase } from "react-icons/io5";

const Skills = () => {
  const skills = [
    {
      id: 0,
      skill: "Firebase",
      image: "https://img.icons8.com/color/48/firebase.png",
      color: "yellow",
    },
  ];
  return (
    <div className="bg-indigo-800">
      <h2 className="text-center font-bold text-2xl text-white">
        Skills & Abilities
      </h2>
      <div className="bg-violet-900 bg-opacity-80 flex">
        {skills.map((i) => {
          return (
            <div className="bg-indigo-950 m-2 p-2 rounded-md">
              <img src={i.image} alt="" />
              <span className="text-white">{i.skill}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
