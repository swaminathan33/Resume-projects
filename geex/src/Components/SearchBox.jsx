import React from "react";

const SearchBox = ({ searchBox }) => {
  return (
    <div
      className={`absolute top-8 bg-white p-2 rounded-xl rounded-tr-none shadow-lg right-2 px-5 py-4 max-sm:-right-16 ${
        searchBox ? "block" : "hidden"
      }`}
    >
      <input
        type="text"
        placeholder="Search"
        className="text-sm outline-none"
      />
    </div>
  );
};

export default SearchBox;
