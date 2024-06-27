import React from "react";

const Notifications = ({ msgBox }) => {
  return (
    <div
      className={`absolute top-8 bg-white p-2 rounded-xl rounded-tr-none shadow-lg right-0 px-5 py-4 max-sm:-right-10 ${
        msgBox ? "block" : "hidden"
      }`}
    >
      <h2 className="text-center bg-violet-50 px-20 py-2 rounded-lg text-sm text-gray-700">
        Messages
      </h2>
    </div>
  );
};

export default Notifications;
