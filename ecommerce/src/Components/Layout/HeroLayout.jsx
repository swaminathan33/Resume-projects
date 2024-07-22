import React from "react";
import Navbar from "../Navbar";

const HeroLayout = ({ children }) => {
  return (
    <div className="bg-teal-900 text-white h-screen">
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default HeroLayout;
