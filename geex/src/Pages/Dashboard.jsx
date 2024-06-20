import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import FrontSmallCard from "../Components/FrontSmallCard";
import UserReview from "../Components/UserReview";

const Dashboard = () => {
  const frontSamallCards = [1, 2, 3];
  return (
    <div className="grid grid-cols-8">
      <Sidebar />

      <div className="col-span-6">
        <Navbar />

        <div className="Dashboard mr-4 grid grid-cols-4">
          <div className="middle_bar col-span-3">
            <div className="grid grid-cols-3">
              {frontSamallCards.map((i) => {
                return <FrontSmallCard />;
              })}
            </div>
            <div className="flex justify-around">
              {frontSamallCards.map((i) => {
                return <UserReview />;
              })}
            </div>
          </div>
          <div className="right_sidebar m-5">
            <h4>Server Status</h4>
            <p>Consectetur et quo dolor vero.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
