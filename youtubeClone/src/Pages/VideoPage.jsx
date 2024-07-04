import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Mainlayout from "../Components/Layout/Mainlayout";
import { BsThreeDotsVertical } from "react-icons/bs";
import SmallVideoCard from "../Components/SmallVideoCard";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { PiShareFatThin } from "react-icons/pi";
import axios from "axios";

const VideoPage = () => {
  const { id } = useParams();
  const [showMore, setShowMore] = useState(false);
  const [videoDetail, setVideoDetails] = useState([]);
  const [suggestedVideos, setSuggestedVideos] = useState([]);

  const getVideoDetails = async (videoId) => {
    // console.log("hi");
    const res = await axios.get("https://youtube-v31.p.rapidapi.com/videos", {
      params: {
        // relatedToVideoId: "7ghhRHRP6t4",
        part: "contentDetails,snippet,statistics",
        id: videoId,
      },
      headers: {
        "x-rapidapi-key": "4d08e6d40bmsh66c49b4bf545d8bp177b08jsn3047ad857da0",
        "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
      },
    });
    console.log(res.data.items);
    setVideoDetails(res.data.items);
    // console.log(videoDetail);
  };

  const getSuggestedVideos = async (videoId) => {
    const res = await axios.get("https://youtube-v31.p.rapidapi.com/search", {
      params: {
        relatedToVideoId: videoId,
        part: "id,contentDetails,snippet",
        type: "video",
        maxResults: "50",
      },
      headers: {
        "x-rapidapi-key": "4d08e6d40bmsh66c49b4bf545d8bp177b08jsn3047ad857da0",
        "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
      },
    });
    setSuggestedVideos(res.data.items);
  };

  useEffect(() => {
    getVideoDetails(id);
    getSuggestedVideos(id);
  }, []);

  return (
    <Mainlayout>
      {videoDetail.map((video, index) => {
        return (
          <div key={index}>
            <div className="grid grid-cols-8 max-sm:flex max-sm:flex-col mt-16">
              <div className="w-[700px] max-sm:w-[330px] col-span-5">
                <div className="video">
                  <iframe
                    className="rounded-2xl max-sm:w-[330px] max-sm:h-[200px]"
                    width="700"
                    height="400"
                    src={`https://www.youtube.com/embed/${id}?si=7Jq67zDasEoG_sFp`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="video_info mt-4 max-sm:w-[330px]">
                  <div className="title font-bold text-xl max-sm:text-base">
                    {video.snippet.localized.title}
                  </div>
                  <div className="buttons flex max-sm:flex-col justify-between items-center mt-4">
                    <div className="flex justify-between items-center gap-20 max-sm:mb-3">
                      <div>
                        <p className="font-semibold text-lg max-sm:text-base">
                          {video.snippet.channelTitle}
                        </p>
                      </div>
                      <div className="">
                        <button className="bg-black subscribe text-white px-3 py-1 rounded-full hover:bg-gray-900 font-semibold">
                          Subscribe
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 max-sm:justify-between max-sm:w-full">
                      <div className="likes bg-gray-200 px-2 py-1 flex justify-center items-center gap-6 cursor-pointer rounded-full">
                        <span className="flex justify-center items-center gap-2 ">
                          <AiOutlineLike fontSize={"22px"} />{" "}
                          {video.statistics.likeCount}
                        </span>
                        <AiOutlineDislike fontSize={"22px"} />
                      </div>
                      <div className="share flex bg-gray-200 rounded-full justify-center items-center px-2 py-1 gap-2">
                        <PiShareFatThin fontSize={"20px"} /> Share
                      </div>
                    </div>

                    <div className="max-sm:hidden">
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                </div>

                <div className="description mt-4 bg-gray-200 rounded-lg p-2 max-sm:w-[330px] overflow-hidden">
                  <div className="description-top font-semibold text-sm mb-2 flex justify-between">
                    <span>{video.statistics.viewCount} Views</span>
                    <span>
                      published at {video.snippet.publishedAt.slice(0, 10)}
                    </span>
                  </div>
                  <div className="description-bottom">
                    {showMore ? (
                      <div>
                        {video.snippet.description}
                        <br />
                        <br />
                        <button
                          className="font-bold"
                          onClick={() => setShowMore(false)}
                        >
                          show less
                        </button>
                      </div>
                    ) : (
                      <div>
                        {video.snippet.description.slice(0, 300)}
                        <button
                          className="font-bold"
                          onClick={() => setShowMore(true)}
                        >
                          ...more
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="suggestions col-span-3">
                {suggestedVideos.map((video, index) => {
                  return <SmallVideoCard video={video} key={index} />;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </Mainlayout>
  );
};

export default VideoPage;
