import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import Sample from "../Assets/sample.jpeg";
import { Tilt } from "@jdion/tilt-react";
import projects from "../Assets/projects/projects";

const Projects = () => {
  // const projects = [
  //   {
  //     id: 0,
  //     name: "Insta CLone",
  //     desc: "Instagram clone with x tech and y tech deployed in abc website",
  //     live_link: "#",
  //     github_link: "#",
  //     image: "#",
  //   },
  // ];
  return (
    <div className="bg-indigo-950 py-7 " id="projects">
      <div className="text-white flex items-center gap-3 justify-center font-bold text-3xl py-3 pb-10">
        <span>
          <FaLaptopCode fontSize={37} />
        </span>
        <span>Projects Made</span>
      </div>
      <div className="flex-col sm:flex-row flex flex-wrap gap-10 justify-center sm:px-20 px-8">
        {/* {[1, 2, 3, 4, 5, 6].map((i) => {
          return (
            <Tilt>
              <div className="">
                <img src={Sample} className=" w-80 h-52 rounded-t-md" alt="" />
                <div className="bg-yellow-400 font-bold text-lg p-2 rounded-b-md">
                  Instagram Clone
                </div>
              </div>
            </Tilt>
          );
        })} */}
        {projects.map((i) => {
          return (
            <Tilt>
              <a href={i.link} target="_blank">
                <div className="">
                  <img
                    src={i.image}
                    className=" w-full h-52 rounded-t-md"
                    alt=""
                  />
                  <div className="bg-yellow-400 font-bold text-lg p-2 rounded-b-md">
                    {i.name}
                  </div>
                </div>
              </a>
            </Tilt>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
