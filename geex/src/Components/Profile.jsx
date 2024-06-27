import React from "react";

const Profile = ({ profile }) => {
  return (
    <div
      className={`absolute top-14 bg-white p-2 rounded-xl rounded-tr-none shadow-lg right-2 px-5 py-4 max-sm:-right-0 ${
        profile ? "block" : "hidden"
      }`}
    >
      <h2 className="text-center bg-violet-50 px-20 py-2 rounded-lg text-sm text-gray-700">
        Profile
      </h2>
    </div>
  );
};

export default Profile;
