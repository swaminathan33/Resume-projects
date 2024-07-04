import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { PiDownloadSimple } from "react-icons/pi";
import { Link } from "react-router-dom";
import { motion, delay } from "framer-motion";

const Sidebar = () => {
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
      x: -250,
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.1,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const listVariant = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <div className="">
      <motion.div
        variants={boxVariant}
        animate="visible"
        initial="hidden"
        className="flex flex-col w-16 max-sm:flex-row max-sm:justify-between max-sm:w-screen max-sm:px-4 max-sm:fixed max-sm:bg-white dark:bg-black bottom-0 mt-12 max-sm:mt-0"
      >
        {items.map((menu, index) => {
          return (
            <Link to={"/"} key={index}>
              <motion.li
                variants={listVariant}
                className="flex flex-col justify-center items-center hover:bg-gray-200 dark:hover:bg-gray-800 py-4 max-sm:py-2 rounded-xl cursor-pointer"
              >
                {/* <{menu.icon} fontSize={"22px"} /> */}
                {menu.icon}
                <div className="text-[10px] mt-2">{menu.text}</div>
              </motion.li>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Sidebar;
