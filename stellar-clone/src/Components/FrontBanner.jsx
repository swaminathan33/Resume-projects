import React from "react";
import { motion } from "framer-motion";
import { MouseParallax } from "react-just-parallax";
import HeroBackground from "./HeroBackground";

const FrontBanner = () => {
  return (
    <div className="text-textColor py-40 mt-6 relative">
      <HeroBackground />
      <div className="z-20">
        <div className="flex justify-center items-center mb-4">
          <div className="absolute px-32 rounded-xl border-2 bg-fuchsia-500 blur-md py-4"></div>
          <button className=" relative border-2 rounded-xl bg-fuchsia-500 px-6 z-10">
            API Studio is now in beta{" "}
          </button>
        </div>
        <div className="title text-6xl font-bold">Gurkha Cyber Forum</div>
        <p className="text-lg mt-4">
          Our landing page template works on all devices, so you only have to
          set it up once, <br /> and get beautiful results forever.
        </p>
        <div className="buttons mt-3">
          <button className="bg-transparent border-2 px-3 rounded-2xl py-1 mr-6">
            Get Started
          </button>
          <button className="bg-transparent border-2 px-3 rounded-2xl py-1">
            Read The Docs
          </button>
        </div>
      </div>
      <HeroBackground />
    </div>
  );
};

export default FrontBanner;
