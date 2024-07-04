import React from "react";
import { LuMenu } from "react-icons/lu";
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { PiDownloadSimple } from "react-icons/pi";
import { Link } from "react-router-dom";
import logo from "../Assets/yt-logo.png";
import whiteLogo from "../Assets/yt-logo-white.png";
import { motion } from "framer-motion";

const SidebarToggle = ({ menuOpen, setMenuOpen }) => {
  const items = [
    {
      text: "Home",
      icon: <MdHomeFilled fontSize={"22px"} />,
    },
    {
      text: "Shorts",
      icon: <SiYoutubeshorts fontSize={"22px"} />,
    },
    {
      text: "Subscriptions",
      icon: <MdOutlineSubscriptions fontSize={"22px"} />,
    },
    {
      text: "Downloads",
      icon: <PiDownloadSimple fontSize={"22px"} />,
    },
  ];

  const boxVariant = {
    hidden: {
      opaciy: 0,
    },
    visible: {
      opaciy: 1,
      transition: {
        delay: 0.7,
        staggerChildren: 0.1,
      },
    },
  };

  const listVariant = {
    hidden: {
      x: -200,
      opaciy: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <div className="sidebar layer absolute bg-black bg-opacity-35 top-0 left-0 -bottom-100 right-0">
      <div className="sidebar bg-white dark:bg-black w-52 h-screen">
        <div className="flex justify-between p-5 items-center">
          <div
            className="hover:border-[1px] p-4 dark:hover:bg-gray-800 hover:bg-gray-200 border-none rounded-full max-sm:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <motion.div
              initial={{ rotate: -90 }}
              animate={{
                rotate: 0,
                transition: {
                  delay: 0.1,
                },
              }}
            >
              <LuMenu fontSize={"22"} />
            </motion.div>
          </div>
          <div>
            <Link to={"/"}>
              <img
                src={logo}
                className="dark:hidden block"
                height={"90"}
                width={"90"}
                alt=""
              />
              <img
                src={whiteLogo}
                className="dark:block hidden"
                height={"90"}
                width={"90"}
                alt=""
              />
            </Link>
          </div>
        </div>
        <motion.ul
          variants={boxVariant}
          animate="visible"
          initial="hidden"
          className="flex flex-col w-full gap-10 justify-center items-start pl-10"
        >
          {items.map((menu, index) => {
            return (
              <Link to={"/"} key={index}>
                <motion.li
                  variants={listVariant}
                  className="flex justify-center items-center gap-2 hover:bg-gray-200 py-1 px-2 rounded-lg cursor-pointer"
                >
                  <div>{menu.icon}</div>
                  <div className="text-sm">{menu.text}</div>
                </motion.li>
              </Link>
            );
          })}
        </motion.ul>
      </div>
    </div>
  );
};

export default SidebarToggle;
