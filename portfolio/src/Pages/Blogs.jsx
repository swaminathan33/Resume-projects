import React from "react";
import { GrArticle } from "react-icons/gr";
import { Tilt } from "@jdion/tilt-react";
import { motion } from "framer-motion";
const Blogs = () => {
  const blogs = [
    {
      id: 0,
      name: "Beginner level tutorial for React Redux",
      desc: "After many days of searching for jobs or internships, I burned out this week. The applicant counts in job postings scared me every time because for one front-end developer job getting...",
      live_link:
        "https://medium.com/@swami008457/no-connections-no-degree-just-from-scratch-in-the-it-industry-98757cf80270",
      image:
        "https://miro.medium.com/v2/resize:fit:828/format:webp/1*UTx4z8okY8oPFoBYJ_Ix8Q.jpeg",
    },
    {
      id: 0,
      name: "Redux Tutorial",
      desc: "Machine learning is a branch of Artificial intelligence, in which machines learn to do a task or learn to predict some values based on past experience and a huge amo...",
      live_link:
        "https://medium.com/@swami008457/simple-explanation-of-machine-learning-bfff19d2d49c",
      image:
        "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*135lGKjg5ko-qRLaBDhImg.jpeg",
    },
  ];
  return (
    <div className="bg-blue-900 py-7 " id="projects">
      <div className="text-white flex items-center gap-3 justify-center font-bold text-3xl py-3 pb-10">
        <span>
          <GrArticle fontSize={37} />
        </span>
        <span>Recent Blogs</span>
      </div>
      <div className="flex-col sm:flex-row flex flex-wrap gap-10 justify-center sm:px-20 px-8">
        {blogs.map((i) => {
          return (
            // <Tilt>
            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="hover:shadow-xl hover:shadow-indigo-700"
            >
              <a href={i.live_link} target="_blank">
                <div className="flex flex-col sm:flex-row">
                  <div className="image">
                    <img
                      src={i.image}
                      className=" w-80 h-52 sm:rounded-s-md rounded-t-md"
                      alt=""
                    />
                  </div>
                  <div className=" text w-80 sm:w-[30rem] rounded-b-md sm:rounded-e-md bg-white pl-2 p-2 sm:pl-5 pt-5 text-indigo-950">
                    <h1 className="font-bold text-xl sm:text-2xl">{i.name}</h1>
                    <h3 className="font-medium my-3">{i.desc}</h3>
                  </div>
                </div>
              </a>
            </motion.div>
            // </Tilt>
          );
        })}
      </div>
      <div className="text-center mt-10 text-white cursor-pointer ">
        <a href="https://medium.com/@swami008457" target="_blank">
          <button className="border-[1px] border-white px-4 py-2 rounded-md">
            View More
          </button>
        </a>
      </div>
    </div>
  );
};

export default Blogs;
