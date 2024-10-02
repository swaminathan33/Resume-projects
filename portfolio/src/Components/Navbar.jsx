import React from "react";
import { FaNodeJs } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
const Navbar = () => {
  const links = [
    {
      name: "Home",
      id: "app",
    },
    {
      name: "About",
      id: "/",
    },
    {
      name: "Skills",
      id: "/",
    },
    {
      name: "Education",
      id: "/",
    },
    {
      name: "Projects",
      id: "projects",
    },
    {
      name: "Experience",
      id: "/",
    },
    {
      name: "Contact",
      id: "/",
    },
  ];
  return (
    <div className="flex sticky top-0 z-20 bg-gray-100 justify-between px-20 p-4">
      <div className="first flex items-center gap-1 text-xl">
        <div className="logo">
          <FaNodeJs />
        </div>
        <div className="name font-bold text-indigo-950">Swami</div>
      </div>
      <div>
        <ul className="flex gap-10 font-semibold text-lg">
          {links.map((i) => {
            return (
              <li className="hover:text-blue-700 border-b-2 border-transparent hover:border-blue-700 hover:cursor-pointer">
                <Link
                  activeClass="active"
                  to={i.id}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={400}
                >
                  {i.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
