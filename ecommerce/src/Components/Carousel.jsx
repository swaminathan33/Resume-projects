import React from "react";
import { motion } from "framer-motion";
import "../index.css";

const Carousel = ({ image, size }) => {
  return (
    <motion.div className="flex">
      <div className="relative">
        <motion.img
          src={image}
          alt=""
          className={`h-96  ${size} ${
            size == "small" ? "" : ""
          } rounded-lg mr-5`}
          transition={{
            duration: 3,
          }}
        />
      </div>
    </motion.div>
  );
};

export default Carousel;
