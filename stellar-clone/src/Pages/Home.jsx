import React from "react";
import Navbar from "../Components/Navbar";
import FrontBanner from "../Components/FrontBanner";
import ScrollBar from "../Components/ScrollBar";
import { FaRegHeart } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { HiMiniCursorArrowRipple } from "react-icons/hi2";
import { IoLockClosedOutline } from "react-icons/io5";
import { BsLayoutTextWindow } from "react-icons/bs";
import { FaRegEyeSlash } from "react-icons/fa";
import { MouseParallax, ScrollParallax } from "react-just-parallax";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-pink-500 via-pink-400 to-pink-700 py-5 px-24 ">
      <Navbar />
      <div className="flex justify-center align-middle text-center">
        <FrontBanner />
      </div>
      <ScrollBar />

      <div className="row1 text-textColor my-40 mb-60">
        <ScrollParallax>
          <p className="mb-2">The Security First Platform</p>
          <h2 className="text-4xl font-bold mb-3">
            Simplify your security with <br /> authentication services
          </h2>
          <p className="text-lg mb-3 w-3/6">
            Define access roles for the end-users, and extend your authorization
            capabilities to implement dynamic access control.
          </p>
          <div className="buttons flex items-start gap-2 mt-16">
            <button className="border-2 border-violet mr-8 w-72 text-start rounded-lg pl-2 py-1">
              Simplify Your security
            </button>
            <button className="border-2 border-violet mr-8 w-72 text-start rounded-lg pl-2 py-1">
              Customer Identity
            </button>
            <button className="border-2 border-violet mr-8 w-72 text-start rounded-lg pl-2 py-1">
              Adaptable authentication
            </button>
          </div>
        </ScrollParallax>
      </div>

      <div className="row2 text-center text-textColor">
        <div className="title text-5xl text-white font-bold">
          Faster.Smarter.
        </div>
        <div className="text-lg mt-2 mb-10">
          There are many variations available, but the majority have suffered
          alteration in some form, <br /> by injected humour, or randomised
          words which don't look even slightly believable.
        </div>
      </div>
      <div>
        <ul className="flex justify-center gap-20 flex-wrap">
          <li className=" w-72">
            <div className="title text-white flex items-center gap-2">
              <FaRegHeart /> Filters
            </div>
            <p className="text-textColor text-sm">
              Login box must find the right balance for the user convenience,
              privacy and security.
            </p>
          </li>

          <li className=" w-72">
            <div className="title text-white flex items-center gap-2">
              {" "}
              <FiLink /> Configurable
            </div>
            <p className="text-textColor text-sm">
              Login box must find the right balance for the user convenience,
              privacy and security.
            </p>
          </li>
          <li className=" w-72">
            <div className="title text-white flex items-center gap-2">
              {" "}
              <HiMiniCursorArrowRipple /> Adapdable
            </div>
            <p className="text-textColor text-sm">
              Login box must find the right balance for the user convenience,
              privacy and security.
            </p>
          </li>
          <li className=" w-72">
            <div className="title text-white flex items-center gap-2">
              {" "}
              <IoLockClosedOutline /> Authorization
            </div>
            <p className="text-textColor text-sm">
              Login box must find the right balance for the user convenience,
              privacy and security.
            </p>
          </li>
          <li className=" w-72">
            <div className="title text-white flex items-center gap-2">
              {" "}
              <BsLayoutTextWindow /> Management
            </div>
            <p className="text-textColor text-sm">
              Login box must find the right balance for the user convenience,
              privacy and security.
            </p>
          </li>
          <li className=" w-72">
            <div className="title text-white flex items-center gap-2">
              {" "}
              <FaRegEyeSlash /> Building
            </div>
            <p className="text-textColor text-sm">
              Login box must find the right balance for the user convenience,
              privacy and security.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
