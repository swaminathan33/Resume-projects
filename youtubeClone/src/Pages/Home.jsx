import React, { useEffect, useState } from "react";
import Mainlayout from "../Components/Layout/Mainlayout";
import VideoCard from "../Components/VideoCard";
import axios from "axios";

const Home = () => {
  const [homeVideos, setHomeVideos] = useState([]);

  const getHomeVideos = async () => {
    const res = await axios.get("https://youtube-v31.p.rapidapi.com/search", {
      params: {
        relatedToVideoId: "7ghhRHRP6t4",
        part: "id,snippet",
        type: "video",
        maxResults: "50",
      },
      headers: {
        "x-rapidapi-key": "4d08e6d40bmsh66c49b4bf545d8bp177b08jsn3047ad857da0",
        "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
      },
    });
    setHomeVideos(res.data.items);
  };

  useEffect(() => {
    getHomeVideos();
  }, []);

  return (
    <Mainlayout>
      <div className="grid grid-cols-3 mt-5">
        {homeVideos.map((video, index) => {
          return (
            <VideoCard
              key={index}
              video={video.snippet}
              id={video.id.videoId}
            />
          );
        })}
      </div>
    </Mainlayout>
  );
};

export default Home;
