import React, { useEffect, useState } from "react";
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
import { useGlobalContentContext } from "../Components/context/ContentContext";

const Dashboard = () => {
  const images = [violet, red, green];
  const icons = [google, facebook, youtube];
  const { sidebarOpen, setSidebarOpen } = useGlobalContentContext();

  return (
    <div className="grid grid-cols-8 max-sm:grid-cols-4">
      <div
        className={`hidden absolute top-0 w-screen bg-opacity-20 bg-black h-full max-sm:${
          sidebarOpen ? "block" : "hidden"
        }`}
      >
        <Sidebar lScreen={"block"} />
      </div>

      <Sidebar lScreen={"hidden"} />

      <div className="col-span-6 max-sm:m-4 max-sm:col-span-4">
        <Navbar page={"Dashboard"} />

        <div className="title hidden max-sm:block">
          <h1 className="text-xl font-medium text-gray-700">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-600">
            Welcome to Geex Modern Admin Dashboard
          </p>
        </div>

        <div className="Dashboard mr-6 grid grid-cols-4 max-sm:flex flex-col max-sm:mr-3">
          <div className="middle_bar col-span-3">
            <div className="grid grid-cols-3 max-sm:flex flex-col">
              {images.map((i, index) => {
                return <FrontSmallCard key={index} image={i} />;
              })}
            </div>

            <div className="bg-white my-7 h-96 rounded-3xl">
              <h2 className="p-10 text-xl font-medium text-gray-600">
                Server Request
              </h2>
            </div>

            <div className="bg-white my-7 h-96 pb-28 rounded-3xl">
              <div className="flex justify-between px-14 pt-10 max-sm:px-5">
                <h2 className="text-xl font-medium text-gray-600">Visitors</h2>
                <button className="text-violet-500 text-md font-bold">
                  View More
                </button>
              </div>

              <div className="px-14 pt-8 flex gap-8 max-sm:px-5">
                <div className="text-4xl text-green-600">98,425k</div>
                <div className="text-gray-600">
                  <div className="text-sm max-sm:font-semibold">+2.5%</div>
                  <div className="text-xs max-sm:text-sm">Than last week</div>
                </div>
              </div>
            </div>

            <div className="bg-white my-7 h-96 pb-28 rounded-3xl">
              <div className="flex justify-between px-14 pt-10 max-sm:px-4">
                <h2 className="text-xl font-medium text-gray-600">
                  Chart Summary
                </h2>
                <button className="text-violet-500 text-md font-bold">
                  Download Report
                </button>
              </div>
            </div>

            <div>
              <h1 className="text-xl font-medium text-gray-600">User Review</h1>
              <h1 className="text-lg pb-7 text-gray-500">
                Eum fuga consequuntur ut et.
              </h1>
              <div className="flex justify-between max-sm:flex-col">
                {images.slice(1).map((i) => {
                  return <UserReview />;
                })}
              </div>
            </div>
          </div>

          <div className="right_sidebar m-3">
            <div className="pb-96">
              <h4 className="text-xl text-gray-600 font-medium pb-4">
                Server Status
              </h4>
              <p className="text-gray-400 text-sm">
                Consectetur et quo dolor vero.
              </p>
            </div>

            <div>
              <div className="top">
                <h4 className="text-xl pb-4 text-gray-600">Recent Problems</h4>
                <p className="text-gray-400 text-sm">
                  Consectetur et quo dolor vero.
                </p>
              </div>

              <div className="bottom max-sm:pb-52">
                {icons.map((i) => {
                  return (
                    <div className="flex justify-between my-10 gap-4">
                      <div className="flex justify-center bg-white px-1 rounded-xl w-10 h-10">
                        <img src={i} alt="" />
                      </div>

                      <div className="w-20">
                        <h2 className="text-sm text-gray-600">Google</h2>
                        <p className="text-gray-400 text-sm w-20">
                          www. google .com
                        </p>
                      </div>

                      <div className="mt-4">
                        <button className="bg-red-400 text-white px-2 py-1 text-xs rounded">
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
