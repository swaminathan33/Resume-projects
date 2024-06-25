import React from "react";
import "./Components.css";
import clients_logo from "../Assets/clients";

const ScrollBar = () => {
  return (
    <div className="Scroll flex  justify-center gap-5 overflow-hidden w-100 ">
      <div className="flex gap-10  animate-loop-scroll">
        {clients_logo.map((img) => {
          return (
            <img
              loading="lazy"
              src={img.img}
              class={`max-w-none w-${img.w} h-${img.h}`}
              alt="Image 1"
            />
          );
        })}
      </div>
      <div className="flex gap-10 animate-loop-scroll">
        {clients_logo.map((img) => {
          return (
            <img
              loading="lazy"
              src={img.img}
              class={`max-w-none w-${img.w} h-${img.h}`}
              alt="Image 1"
            />
          );
        })}
      </div>
      <div className="flex gap-10 animate-loop-scroll">
        {clients_logo.map((img) => {
          return (
            <img
              loading="lazy"
              src={img.img}
              class={`max-w-none w-${img.w} h-${img.h}`}
              alt="Image 1"
            />
          );
        })}
      </div>
    </div>
  );
};

export default ScrollBar;
