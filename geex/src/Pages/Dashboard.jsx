import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import FrontSmallCard from "../Components/FrontSmallCard";
import UserReview from "../Components/UserReview";
import violet from "../Assets/graphSymbols/violet.svg";
import red from "../Assets/graphSymbols/red.svg";
import green from "../Assets/graphSymbols/green.svg";
import google from "../Assets/websites_icons/google.svg";
import facebook from "../Assets/websites_icons/facebook.svg";
import youtube from "../Assets/websites_icons/youtube.svg";

const Dashboard = () => {
  const images = [violet, red, green];
  const icons = [google, facebook, youtube];
  return (
    <div className="grid grid-cols-8">
      <Sidebar />

      <div className="col-span-6">
        <Navbar />

        <div className="Dashboard mr-4 grid grid-cols-4">
          <div className="middle_bar col-span-3">
            <div className="grid grid-cols-3">
              {images.map((i) => {
                return <FrontSmallCard image={i} />;
              })}
            </div>

            <div className="bg-white my-7 h-96 rounded-3xl">
              <h2 className="p-10 text-2xl">Server Request</h2>
            </div>

            <div className="bg-white my-7 h-96 pb-28 rounded-3xl">
              <div className="flex justify-between px-14 pt-10">
                <h2 className="text-2xl">Visitors</h2>
                <button className="text-violet-500 text-md font-bold">
                  View More
                </button>
              </div>

              <div className="px-14 pt-8 flex gap-8">
                <div className="text-5xl text-green-600">98,425k</div>
                <div>
                  <div className="text-xl">+2.5%</div>
                  <div className="text-sm">Than last week</div>
                </div>
              </div>
            </div>

            <div className="bg-white my-7 h-96 pb-28 rounded-3xl">
              <div className="flex justify-between px-14 pt-10">
                <h2 className="text-2xl">Chart Summary</h2>
                <button className="text-violet-500 text-md font-bold">
                  Download Report
                </button>
              </div>
            </div>

            <div>
              <h1 className="text-2xl font-medium">User Review</h1>
              <h1 className="text-lg pb-7">Eum fuga consequuntur ut et.</h1>
              <div className="flex justify-between">
                {images.slice(1).map((i) => {
                  return <UserReview />;
                })}
              </div>
            </div>
          </div>

          <div className="right_sidebar m-5">
            <div className="pb-96">
              <h4 className="text-2xl pb-4">Server Status</h4>
              <p className="text-gray-400 text-lg">
                Consectetur et quo dolor vero.
              </p>
            </div>

            <div>
              <div className="top">
                <h4 className="text-2xl pb-4">Recent Problems</h4>
                <p className="text-gray-400 text-lg">
                  Consectetur et quo dolor vero.
                </p>
              </div>

              <div className="bottom">
                {icons.map((i) => {
                  return (
                    <div className="flex justify-between my-10 gap-4">
                      <div className="flex justify-center bg-white px-1 rounded-xl">
                        <img src={i} alt="" />
                      </div>

                      <div>
                        <h2>Google</h2>
                        <p className="text-gray-400">www.google.com</p>
                      </div>

                      <div className="mt-4">
                        <button className="bg-red-400 text-white px-2 py-1 text-base rounded">
                          Down
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
