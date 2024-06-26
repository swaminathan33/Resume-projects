import React from "react";
import { IoAddCircle } from "react-icons/io5";
import { MouseParallax } from "react-just-parallax";
import one from "../Assets/balls/two.png";

const HeroBackground = () => {
  const points = [
    {
      left: 20,
      top: 4,
    },
    {
      bottom: 6,
      right: 0,
    },
    {
      bottom: 0,
      right: 20,
    },
    {
      right: 0,
      left: 36,
    },
    {
      bottom: 6,
      right: 0,
    },
    {
      bottom: 0,
      right: 20,
    },
    {
      right: 0,
      left: 36,
    },
  ];
  return (
    <div className="max-sm:hidden ">
      <MouseParallax>
        {/* <div className="w-2 h-2 shadow-xl rounded bg-fuchsia-500 absolute left-20 top-4"></div>
        <div className="w-2 h-2 shadow-xl rounded bg-fuchsia-500 absolute bottom-6 right-0"></div>
        <div className="w-2 h-2 shadow-xl rounded bg-fuchsia-500 absolute bottom-0 right-20"></div>
        <div className="w-2 h-2 shadow-xl rounded bg-fuchsia-500 absolute right-0 left-36"></div>

        <div className="w-2 h-2 shadow-xl rounded bg-fuchsia-500 absolute bottom-0"></div>
        <div className="w-2 h-2 shadow-xl rounded bg-fuchsia-500 absolute bottom-6 right-0"></div>
        <div className="w-2 h-2 shadow-xl rounded bg-fuchsia-500 absolute bottom-0 right-20"></div>
        <div className="w-2 h-2 shadow-xl rounded bg-fuchsia-500 absolute right-0 left-36"></div> */}
        <img
          src={one}
          className="w-5 h-5 animate-blob absolute left-20 top-20"
          alt=""
        />
        <img
          src={one}
          className="w-5 h-5 animate-blob absolute -bottom-20 -right-4"
          alt=""
        />
        <img
          src={one}
          className="w-5 h-5 animate-blob absolute -bottom-0 -right-20"
          alt=""
        />
        <img
          src={one}
          className="w-5 h-5 animate-blob absolute  -top-30
           -left-36"
          alt=""
        />
        <img
          src={one}
          className="w-5 h-5 animate-blob absolute -bottom-52 "
          alt=""
        />
        <img
          src={one}
          className="w-5 h-5 animate-blob absolute -bottom-56 right-0"
          alt=""
        />
        <img
          src={one}
          className="w-5 h-5 animate-blob absolute bottom-0 right-20"
          alt=""
        />
        <img
          src={one}
          className="w-5 h-5 animate-blob absolute right-0 left-36"
          alt=""
        />
      </MouseParallax>
    </div>
  );
};

export default HeroBackground;
