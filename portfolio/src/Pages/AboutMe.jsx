import React from "react";

const AboutMe = () => {
  return (
    <div>
      <div className="title text-center font-bold text-3xl">About Me</div>
      <div className="grid grid-cols-2 px-64 my-16">
        <div className="image bg-gray-600 h-80 w-60 rounded-xl"></div>
        <div className="text flex flex-col gap-2">
          <div className="name font-bold text-xl">I'm Swaminathan</div>
          <div className="font-semibold text-md">Front End Developer</div>
          <div className="text-sm">
            I am a Full-Stack developer based in Pune, India. I am an
            Information Technology undergraduate from SPPU. I am very passionate
            about improving my coding skills & developing applications &
            websites. I build WebApps and Websites using MERN Stack. Working for
            myself to improve my skills. Love to build Full-Stack clones.
          </div>
          <div className="text-sm">
            <span className="text-blue-800">Email: </span>
            <span>Swami008457@gmail.com</span>
          </div>
          <div className="text-sm">
            <span className="text-blue-800">Place: </span>
            <span>Bangalore</span>
          </div>
          <div>
            <button className="bg-blue-800 text-white rounded-md px-6 py-2 my-5 ">
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
