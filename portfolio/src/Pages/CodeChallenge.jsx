import React from "react";
import { Tilt } from "@jdion/tilt-react";
import { IoGameController } from "react-icons/io5";
import Leetcode from "../Assets/codingchallenges/leetcode.png";
import Codewars from "../Assets/codingchallenges/codewars.png";
const CodeChallenge = () => {
  const ranks = [
    {
      id: 0,
      name: "CodeWars",
      image: Codewars,
    },
    {
      id: 1,
      name: "Leetcode",
      image: Leetcode,
    },
  ];
  return (
    <div className=" py-7 my-10 " id="challenges">
      <div className="text-indigo-950 flex items-center gap-3  justify-center font-bold text-3xl py-10 pb-20">
        <span>
          <IoGameController fontSize={37} />
        </span>
        <span>Coding Challenges</span>
      </div>
      <div className="flex-col sm:flex-row flex flex-wrap gap-10 justify-center sm:px-20 px-8">
        {ranks.map((i) => {
          return (
            <Tilt>
              <div className="">
                <img
                  src={i.image}
                  className=" w-full h-52 rounded-t-md"
                  alt=""
                />
                <div className="bg-yellow-400 font-bold text-lg p-2 rounded-b-md">
                  {i.name}
                </div>
              </div>
            </Tilt>
          );
        })}
      </div>
    </div>
  );
};

export default CodeChallenge;
