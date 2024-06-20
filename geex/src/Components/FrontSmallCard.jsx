import React from "react";

const FrontSmallCard = ({ image }) => {
  return (
    <div className="bg-white w-50 h-80 rounded-3xl m-5 pl-7 pt-10">
      <div className="title text-xl text-gray-600">Memory</div>
      <h3 className="font-semibold text-3xl pt-2 text-gray-700">200TB</h3>
      <div className="text-green-700 pt-8 text-2xl">+2.5%</div>
      <img src={image} alt="" className="pt-5 w-32 h-30" />
    </div>
  );
};

export default FrontSmallCard;
