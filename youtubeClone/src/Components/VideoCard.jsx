import React from "react";
import image from "../Assets/testing-thumbnail.jpeg";
import Profileimage from "../Assets/profile-testing.jpeg";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const VideoCard = ({ video, id }) => {
  return (
    <motion.div
      initial={{ scale: 0.2, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{
        scale: 1.03,
      }}
      className="mb-10 w-[23rem] max-sm:w-[20rem]"
    >
      <Link to={`/video/${id}`}>
        <div className="cursor-pointer">
          <div className="top-image">
            <img
              src={video.thumbnails.medium.url}
              alt=""
              className="rounded-xl w-[23rem] h-[15rem] max-sm:w-[20rem]"
            />
          </div>

          <div className="bottom-text w-[23rem] flex mt-3 gap-3 justify-between max-sm:w-[20rem]">
            {/* <div className="profile">
          <img src={Profileimage} className="w-16 h-9 rounded-full" alt="" />
        </div> */}

            <div className="video-descrip flex justify-between w-full ">
              <div className="video-titles">
                <h2 className="text-base font-medium">{video.title}</h2>
                <h4 className="text-sm text-gray-600">{video.channelTitle}</h4>
                {/* <p className="text-sm text-gray-600">35M views 1 year ago</p> */}
              </div>

              <div className="mt-1 video-menu">
                <BsThreeDotsVertical />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default VideoCard;
