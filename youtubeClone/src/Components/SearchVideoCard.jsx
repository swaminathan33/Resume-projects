import React from "react";
import thumb from "../Assets/testing-thumbnail.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SearchVideoCard = ({ video }) => {
  return (
    <motion.div className="flex searchvideocard  mb-5 max-sm:flex-col mt-14">
      <Link to={`/video/${video.id.videoId}`}>
        <div className="mr-4">
          <img
            src={video.snippet.thumbnails.medium.url}
            alt=""
            className="min-w-[30rem] h-[18rem] rounded-xl max-sm:min-w-[20rem]"
          />
        </div>
      </Link>
      <div className="">
        <Link to={`/video/${video.id.videoId}`} className="w-5/6">
          <div className="font-normal text-gray-950 dark:text-white text-lg w-5/6">
            {video.snippet.title}
          </div>
          <div className="text-gray-600 text-sm flex flex-col dark:text-gray-400 gap-3 max-sm:gap-1">
            <p>1M {video.snippet.publishedAt}</p>
            <p>{video.snippet.channelTitle}</p>
            <p className="w-5/6 max-sm:hidden">
              {video.snippet.description.slice(0, 100)}...
            </p>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default SearchVideoCard;
