import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to={"/personal"}>Start</Link>
    </div>
  );
};

export default Home;
