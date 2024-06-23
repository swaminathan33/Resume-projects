import React from "react";

const FrontBanner = () => {
  return (
    <div className="text-textColor py-40 mt-6 relative">
      <div className="flex justify-center items-center mb-4">
        <div className="absolute px-32 rounded-xl border-2 bg-pink-600 blur-md py-4"></div>
        <button className=" relative border-2 rounded-xl bg-pink-500 px-6 z-10">
          API Studio is now in beta{" "}
        </button>
      </div>
      <div className="title text-6xl font-bold">The API Security Framework</div>
      <p className="text-lg mt-4">
        Our landing page template works on all devices, so you only have to set
        it up once, <br /> and get beautiful results forever.
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
  );
};

export default FrontBanner;
