import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import { SiInstagram } from "react-icons/si";
import { Tilt } from "@jdion/tilt-react";
import Avatar from "../Assets/avatar.png";
import Hacker from "../Assets/hacker.png";
import { ParticlesComponent } from "./ParticlesComponent";
import Typed from "typed.js";

const HeroSection = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Front End Development", "Reactjs Development"],
      typeSpeed: 70,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div id="hero">
      <ParticlesComponent />
      {/* <Navbar /> */}
      <div className="flex justify-around  h-screen items-center z-40">
        <div className="text flex flex-col gap-5">
          <div className="text-5xl font-bold text-blue-950">Hi There,</div>
          <div className="text-5xl font-bold text-blue-950">
            I'm Swami <span className="text-orange-500">Nathan</span>
          </div>
          <div className="text-2xl font-bold text-blue-950">
            <span>I am Into </span>
            <span className="text-red-500" ref={el}></span>
          </div>
          <div>
            <span>
              <button className="bg-blue-700 shadow-lg shadow-blue-400 text-white p-2 rounded-full px-5 font-medium">
                About Me
              </button>
            </span>
          </div>
          <div className="links">
            <ul className="flex gap-4">
              {[1, 2, 3, 4].map((i) => {
                return (
                  <li className="bg-blue-950 p-3 rounded-full">
                    <SiInstagram color="lightblue" fontSize={20} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <Tilt>
          <div className="image shadow-2xl bg-yellow-400 w-72 h-72 rounded-full flex items-center justify-center overflow-hidden">
            <div className="mt-10">
              <img src={Hacker} width={250} alt="" />
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default HeroSection;
