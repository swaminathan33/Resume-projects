import React from "react";
import HeroLayout from "../Components/Layout/HeroLayout";
import HeroSection from "../Components/HeroSection";
import { FiTruck } from "react-icons/fi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { FaArrowsRotate } from "react-icons/fa6";
import MainLayout from "../Components/Layout/MainLayout";
import table from "../Assets/newfolder/table.jpg";

const Home = () => {
  return (
    <div>
      <HeroLayout>
        <HeroSection />
      </HeroLayout>
    </div>
  );
};

export default Home;
