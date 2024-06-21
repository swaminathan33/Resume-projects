import React from "react";
import one from "../Assets/Review_profiles/one.svg";

const UserReview = () => {
  return (
    <div className="bg-white rounded-2xl w-72 p-7 py-10 mb-10">
      <div className="top flex gap-4 pb-7">
        <div>
          <img src={one} className="w-14" alt="" />
        </div>
        <div className="text-lg">
          <span className="text-gray-600">John Doe</span> <br />
          <span className="text-gray-400 text-sm">4 days ago</span>
        </div>
      </div>

      <div className="para pb-7 text-sm text-gray-500">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime libero,
        impedit officiis nobis perspiciatis nulla mollitia excepturi
      </div>

      <div className="buttons flex gap-7 text-sm font-medium">
        <button className="text-red-500">Archive</button>
        <button className="text-green-500">Accept</button>
      </div>
    </div>
  );
};

export default UserReview;
