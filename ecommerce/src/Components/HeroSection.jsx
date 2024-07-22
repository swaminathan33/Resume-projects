import React, { useEffect, useRef, useState } from "react";
import Carousel from "./Carousel";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import living from "../Assets/carousel/livingroom.jpg";
import hall from "../Assets/carousel/hallroom.jpeg";
import bed from "../Assets/carousel/bedroom.jpg";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef();
  const authUser = useSelector((state) => state.authDetails);
  const [images, setImages] = useState([
    {
      id: 0,
      image: living,
      width: "large",
    },
    {
      id: 1,
      image: hall,
      width: "small",
    },
    {
      id: 2,
      image: bed,
      width: "small",
    },
  ]);

  const handlenext = () => {
    setCount(count + 1);
    if (count > images.length - 2) {
      setCount(0);
    }
    // console.log(count);
    const newImages = images.map((i) => {
      if (i.id == count) {
        return { ...i, width: "large" };
      }
      return { ...i, width: "small" };
    });
    setImages(newImages);
  };

  useEffect(() => {
    // console.log(authUser);
    handlenext();
  }, []);

  return (
    <div>
      <div className="grid max-sm:flex grid-cols-2 ml-28 max-sm:ml-0 mt-20 max-sm:mt-1">
        <div className="text col-span-1 mt-14 flex max-sm:items-center gap-3 flex-col">
          <span className="text-md w-48 text-center  font-light rounded-xl bg-opacity-10 bg-white">
            Furniture Design Ideas
          </span>
          <h2 className="text-5xl font-semibold mb-2 max-sm:text-center max-sm:text-4xl">
            Modern Interior <br /> Design Studio
          </h2>
          <p className="w-5/6 mb-8 text-sm max-sm:text-center max-sm:w-full max-sm:px-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque,
            quasi sunt alias molestiae, ipsa ullam quod, tempore non temporibus
            obcaecati deleniti a doloribus. Debitis earum doloribus adipisci
            laboriosam rem! Sapiente!
          </p>
          <div className="flex gap-4 max-sm:gap-10 max-sm:justify-between mb-9">
            <Link to={"/products"}>
              <button className="bg-yellow-600  py-2 px-5 rounded-full flex items-center justify-center gap-1">
                Shop Now
                <HiOutlineArrowLongRight className="mt-1 font-bold text-xl" />
              </button>
            </Link>
            <button>
              <a
                href="www.instagram.com/"
                className="underline-offset-4 underline"
              >
                Follow Instagram
              </a>
            </button>
          </div>
          <div>
            <ul className="flex gap-16 max-sm:gap-7 ">
              <li className="text-xl flex flex-col max-sm:text-center">
                <span>2500+</span>
                <span className="text-sm opacity-70">Unique Styles</span>
              </li>
              <li className="text-xl flex flex-col max-sm:text-center">
                5000+ <br />
                <span className="text-sm opacity-70">Happy Customer</span>
              </li>
              <li className="text-xl flex flex-col max-sm:text-center">
                300+ <br />
                <span className="text-sm opacity-70">Certified Outlets</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="carousel col-span-1 max-sm:hidden">
          <div className="flex gap-4">
            {images.map((i, key) => {
              return <Carousel image={i.image} size={i.width} key={key} />;
            })}
          </div>
          <div className="flex gap-4">
            {/* <button onClick={handleold}>old</button> */}
            <motion.button
              onClick={handlenext}
              whileTap={{
                scale: 0.9,
              }}
              className="bg-yellow-600 hover:bg-yellow-500 mt-6 text-2xl px-3 py-1 rounded-full"
            >
              <HiOutlineArrowLongRight />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
