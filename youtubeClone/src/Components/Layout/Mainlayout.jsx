import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const Mainlayout = ({ children }) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="grid grid-cols-12 mt-4">
        <div className="sidebar col-span-1">
          <Sidebar />
        </div>
        <main className="col-span-11">{children}</main>
      </div>
    </div>
  );
};

export default Mainlayout;
