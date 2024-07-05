import React, { useRef } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

const Comments = ({ comment }) => {
  console.log("comment", comment);
  return (
    <div className="flex items-start mb-6">
      <div className="profile">
        <img
          className="rounded-full max-w-10 mr-4 mt-1"
          src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
          alt=""
        />
      </div>
      <div>
        <div className="top text-sm flex gap-3">
          <div className="name">
            {comment.snippet.topLevelComment.snippet.authorDisplayName}
          </div>
          <div className="date text-gray-400">
            {comment.snippet.topLevelComment.snippet.publishedAt.slice(0, 10)}
          </div>
        </div>
        <div className="comment text-sm w-5/6">
          {comment.snippet.topLevelComment.snippet.textOriginal}
        </div>
        <div className="flex gap-5 text-2xl mt-2">
          <div className="flex items-center gap-1">
            <AiOutlineLike />{" "}
            <span className="text-sm text-gray-300">
              {comment.snippet.topLevelComment.snippet.likeCount}
            </span>
          </div>
          <AiOutlineDislike />
        </div>
      </div>
    </div>
  );
};

export default Comments;
