import React from "react";
import bg from "../Assets/bg.jpg";
import laptop from "../Assets/laptop-3d.png";
import laptop3 from "../Assets/laptop-3d-3.png";
import Navbar from "../Components/Navbar";

const Contact = () => {
  return (
    <div className="overflow-hidden">
      <div
        className="px-24 max-sm:px-2 py-5 w-100 h-screen animate-bg overflow-hidden bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundRepeat: "none",
          // backgroundSize: "100%",
        }}
      >
        <Navbar />
        <div className="flex justify-center pb-20 items-center h-screen text-white gap-10">
          <div className="max-sm:hidden">
            <img src={laptop3} alt="" className="w-96 mr-72 h-60" />
          </div>
          <div className="absolute right-96 max-sm:right-10 max-sm:text-center">
            <h1 className="font-semibold text-lg max-sm:text-2xl">
              Gurkha Cyber Force
            </h1>
            <p className="text-xs max-sm:text-lg">
              Computer Security Service In Patan
            </p>
            <p className="text-md">
              71/69, Adarsha Marga Ward 13, Lalitpur 44700
            </p>
            <p className="text-md">phone: 980-1824605</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
