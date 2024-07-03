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
import { motion } from "framer-motion";
const Home = () => {
  return (
    // <div className="bg-gradient-to-r from-fuchsia-950 via-fuchsia-500 to-fuchsia-950 py-5 px-24 ">
    <div className="bg-backgroundColor py-5 px-24 max-sm:px-5">
      <Navbar />
      <div className="flex justify-center align-middle text-center">
        <div className="absolute py-56 animate-blob bg-backgroundColor2 w-4/6 h-full blur-3xl rounded-full"></div>
        <FrontBanner />
      </div>

      <div className="absolute py-56 animate-blob bg-gradient-to-t right-5 from-fuchsia-950 to-fuchsia-900 w-4/6 h-5/6 blur-3xl rounded-full"></div>
      <div className="text-center mb-14 font-bold text-4xl text-white relative max-sm:text-3xl">
        Our Clients
      </div>
      <ScrollBar />

      <div className="row1 text-textColor relative my-40 mb-60">
        <>
          <p className="mb-2">The Security First Platform</p>
          <h2 className="text-4xl font-bold mb-3 max-sm:text-2xl">
            Simplify your security with <br /> authentication services
          </h2>
          <p className="text-lg mb-3 w-3/6 max-sm:w-5/6">
            Define access roles for the end-users, and extend your authorization
            capabilities to implement dynamic access control.
          </p>
          <div className="buttons flex items-start gap-2 mt-16 max-sm:flex-col">
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
        </>
      </div>

      <div className="absolute py-50 animate-blob bg-gradient-to-t -left-20 from-fuchsia-950 to-fuchsia-900 w-3/6 h-5/6 blur-3xl rounded-full"></div>
      <motion.div className="row2 pb-52 relative text-center text-textColor">
        <div className="title text-5xl text-white font-bold max-sm:text-4xl">
          Faster.Smarter.
        </div>
        <div className="text-lg mt-2 mb-10 max-sm:text-sm max-sm:mx-4 max-sm:mb-2">
          There are many variations available, but the majority have suffered
          alteration in some form, <br /> by injected humour, or randomised
          words which don't look even slightly believable.
        </div>
      </motion.div>

      <div>
        <ul className="flex relative justify-center gap-20 flex-wrap">
          <li className=" w-72 border-2 border-neutral-400 p-2 rounded-2xl">
            <div className="title text-white flex items-center gap-2 ">
              <FaRegHeart /> Filters
            </div>
            <p className="text-textColor text-sm">
              Login box must find the right balance for the user convenience,
              privacy and security.
            </p>
          </li>

          <li className=" w-72 border-2 border-neutral-400 p-2 rounded-2xl">
            <div className="title text-white flex items-center gap-2">
              {" "}
              <FiLink /> Configurable
            </div>
            <p className="text-textColor text-sm">
              Login box must find the right balance for the user convenience,
              privacy and security.
            </p>
          </li>
          <li className=" w-72 border-2 border-neutral-400 p-2 rounded-2xl">
            <div className="title text-white flex items-center gap-2">
              {" "}
              <HiMiniCursorArrowRipple /> Adapdable
            </div>
            <p className="text-textColor text-sm">
              Login box must find the right balance for the user convenience,
              privacy and security.
            </p>
          </li>
          <li className=" w-72 border-2 border-neutral-400 p-2 rounded-2xl">
            <div className="title text-white flex items-center gap-2">
              {" "}
              <IoLockClosedOutline /> Authorization
            </div>
            <p className="text-textColor text-sm">
              Login box must find the right balance for the user convenience,
              privacy and security.
            </p>
          </li>
          <li className=" w-72 border-2 border-neutral-400 p-2 rounded-2xl">
            <div className="title text-white flex items-center gap-2">
              {" "}
              <BsLayoutTextWindow /> Management
            </div>
            <p className="text-textColor text-sm">
              Login box must find the right balance for the user convenience,
              privacy and security.
            </p>
          </li>
          <li className=" w-72 border-2 border-neutral-400 p-2 rounded-2xl">
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
