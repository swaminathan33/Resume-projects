import React from "react";
import bg from "../Assets/bg.jpg";
import Navbar from "../Components/Navbar";

const ComingSoon = () => {
  return (
    <div className="overflow-hidden">
      <div
        className="px-24 py-5 w-100 h-screen animate-bg overflow-hidden bg-no-repeat bg-cover max-sm:px-2"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundRepeat: "none",
          // backgroundSize: "100%",
        }}
      >
        <Navbar />
        <div className="flex justify-center pb-20 items-center h-screen text-white font-semibold text-5xl max-sm:text-3xl ">
          Coming soon..
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
