import React, { useState } from "react";
import thumb from "../Assets/testing-thumbnail.jpeg";
import { Link } from "react-router-dom";
const SmallVideoCard = ({ video }) => {
  const [videoState, setVideoState] = useState(video);
  return (
    <Link to={`/video/${videoState.id.videoId}`}>
      <div className="flex mb-4">
        <div className="">
          <img
            src={videoState ? videoState.snippet.thumbnails.high.url : ""}
            className="max-w-48 max-h-28 rounded-xl"
            alt=""
          />
        </div>
        <div className="ml-2 flex flex-col gap-2 w-56">
          <div className="title text-sm font-medium w-5/6">
            {videoState.snippet.title}
          </div>
          <p className="text-xs text-gray-600">
            {videoState.snippet.channelTitle}
          </p>
          <p className="text-xs text-gray-600">
            {videoState.snippet.publishedAt?.slice(0, 10)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SmallVideoCard;
