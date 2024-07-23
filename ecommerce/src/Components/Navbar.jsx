import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import AccountMenu from "./AccountMenu";
import { useSelector } from "react-redux";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import { boxVariant, listVariant } from "./constants/animate";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();
  const { authUser } = useSelector((state) => state.authDetails);
  const handleMenu = () => {
    if (authUser) {
      setShowMenu(!showMenu);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="flex justify-between mx-28 max-sm:mx-0 max-sm:p-6 text-md pt-4 bg-transparent max-sm:w-full">
      <Link to={"/"}>
        <motion.div
          animate={{
            x: 0,
            transition: {
              delay: 0.5,
            },
          }}
          initial={{
            x: -400,
          }}
          className="logo font-serif font-semibold text-xl"
        >
          FurniFlex
        </motion.div>
      </Link>
      {/* <ul className="f lex gap-10 max-sm:hidden"> :  */}
      {showSidebar ? (
        ""
      ) : (
        <motion.ul
          variants={boxVariant}
          animate="visible"
          initial="hidden"
          className="flex gap-10 max-sm:absolute max-sm:flex-col right-0 top-14 max-sm:bg-teal-700 max-sm:font-semibold max-sm:text-center max-sm:p-2 rounded-xl"
        >
          <motion.li variants={listVariant}>
            <Link to={"/"}>Home</Link>
          </motion.li>
          <motion.li variants={listVariant}>
            <Link to={"/products"}>Products</Link>
          </motion.li>
          <motion.li variants={listVariant}>Contact Us</motion.li>
        </motion.ul>
      )}
      <motion.ul
        variants={boxVariant}
        animate="visible"
        initial="hidden"
        className="flex items-center gap-10 text-lg"
      >
        {/* <motion.li variants={listVariant}>
          <CiSearch />
        </motion.li>
        <motion.li variants={listVariant}>
          <CiHeart />
        </motion.li> */}
        <motion.li variants={listVariant}>
          <Link to={"/cart"}>
            <CiShoppingCart />
          </Link>
        </motion.li>
        <motion.li variants={listVariant} onClick={handleMenu}>
          <VscAccount />
        </motion.li>
        {showMenu ? <AccountMenu /> : ""}
        <motion.li variants={listVariant} className="hidden max-sm:block">
          <IoMdMenu onClick={() => setShowSidebar(!showSidebar)} />
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default Navbar;
