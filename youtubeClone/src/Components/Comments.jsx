import React, { useRef } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

const Comments = ({ comment }) => {
  //   console.log("comment", comment);
  return (
    <div className="flex items-start">
      <div className="profile">
        <img
          className="rounded-full w-10 mr-4 mt-1"
          src={comment.authorProfileImageUrl}
          alt=""
        />
      </div>
      <div>
        <div className="top text-sm flex gap-3">
          <div className="name">{comment.authorDisplayName}</div>
          <div className="date text-gray-400">
            {comment.publishedAt.slice(0, 10)}
          </div>
        </div>
        <div className="comment">{comment.textDisplay}</div>
        <div className="flex gap-5 text-2xl mt-2">
          <div className="flex items-center gap-1">
            <AiOutlineLike />{" "}
            <span className="text-sm text-gray-300">{comment.likeCount}</span>
          </div>
          <AiOutlineDislike />
        </div>
      </div>
    </div>
  );
};

export default Comments;
