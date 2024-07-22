import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import AccountMenu from "./AccountMenu";
import { useSelector } from "react-redux";
import { IoMdMenu } from "react-icons/io";

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
      <div className="logo">FurniFlex</div>
      {/* <ul className="f lex gap-10 max-sm:hidden"> :  */}
      {showSidebar ? (
        ""
      ) : (
        <ul className="flex gap-10 max-sm:absolute max-sm:flex-col right-0 top-14 max-sm:bg-teal-700 max-sm:font-semibold max-sm:text-center max-sm:p-2 rounded-xl">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/products"}>Products</Link>
          </li>
          <li>Contact Us</li>
        </ul>
      )}
      <ul className="flex items-center gap-5 text-lg">
        <li>
          <CiSearch />
        </li>
        <li>
          <CiHeart />
        </li>
        <li>
          <Link to={"/cart"}>
            <CiShoppingCart />
          </Link>
        </li>
        <li onClick={handleMenu}>
          <VscAccount />
        </li>
        {showMenu ? <AccountMenu /> : ""}
        <li className="hidden max-sm:block">
          <IoMdMenu onClick={() => setShowSidebar(!showSidebar)} />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
