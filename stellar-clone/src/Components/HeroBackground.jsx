import React from "react";
import { MouseParallax } from "react-just-parallax";

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
    <div className="max-sm:hidden">
      <MouseParallax>
        <div className="w-2 h-2 shadow-xl rounded bg-fuchsia-500 absolute left-20 top-4"></div>
        <div className="w-2 h-2 shadow-xl rounded bg-fuchsia-500 absolute bottom-6 right-0"></div>
        <div className="w-2 h-2 shadow-xl rounded bg-fuchsia-500 absolute bottom-0 right-20"></div>
        <div className="w-2 h-2 shadow-xl rounded bg-fuchsia-500 absolute right-0 left-36"></div>

        <div className="w-2 h-2 shadow-xl rounded bg-fuchsia-500 absolute bottom-0"></div>
        <div className="w-2 h-2 shadow-xl rounded bg-fuchsia-500 absolute bottom-6 right-0"></div>
        <div className="w-2 h-2 shadow-xl rounded bg-fuchsia-500 absolute bottom-0 right-20"></div>
        <div className="w-2 h-2 shadow-xl rounded bg-fuchsia-500 absolute right-0 left-36"></div>
      </MouseParallax>
    </div>
  );
};

export default HeroBackground;
