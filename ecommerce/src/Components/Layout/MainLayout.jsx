import React from "react";
import Navbar from "../Navbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <div className="mx-28 max-sm:mx-4">{children}</div>
    </div>
  );
};

export default MainLayout;
