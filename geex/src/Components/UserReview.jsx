import React from "react";
import one from "../Assets/Review_profiles/one.svg";

const UserReview = () => {
  return (
    <div className="bg-white rounded-2xl w-96 p-7 py-10 mb-10">
      <div className="top flex gap-4 pb-7">
        <div>
          <img src={one} className="w-16" alt="" />
        </div>
        <div className="text-xl">
          John Doe <br />4 days ago
        </div>
      </div>

      <div className="para pb-7 text-xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime libero,
        impedit officiis nobis perspiciatis nulla mollitia excepturi
      </div>

      <div className="buttons flex gap-7 text-lg font-medium">
        <button className="text-red-500">Archive</button>
        <button className="text-green-500">Accept</button>
      </div>
    </div>
  );
};

export default UserReview;
