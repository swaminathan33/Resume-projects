import React from "react";

const FrontSmallCard = ({ image }) => {
  return (
    <div className="bg-white w-45 h-64 rounded-3xl m-2 pl-4 pt-8 max-sm:w-full max-sm:text-center">
      <div className="title text-sm text-gray-600">Memory</div>
      <h3 className="font-medium text-2xl pt-2 text-gray-700 max-sm:text-xl">
        200TB
      </h3>
      <div className="text-green-700 pt-5 text-lg max-sm:">+2.5%</div>
      <img src={image} alt="" className="pt-5 w-25 h-25" />
    </div>
  );
};

export default FrontSmallCard;
