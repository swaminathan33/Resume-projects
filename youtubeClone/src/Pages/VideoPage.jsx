import React from "react";
import { useParams } from "react-router-dom";
import Mainlayout from "../Components/Layout/Mainlayout";

const VideoPage = () => {
  let { id } = useParams();

  return (
    <Mainlayout>
      <div>
        <div className="video">
          <iframe
            className="rounded-2xl"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/HRiCRmPYAl8?si=7Jq67zDasEoG_sFp"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="description">
          <div className="title">
            Mr Bean's Black Friday Accident! | Mr Bean Funny Clips | Mr Bean
            Official
          </div>
          <div className="buttons border-2">
            <div>
              <div>
                <p>MR. Bean</p>
                <span>33.5M Subscribers</span>
              </div>
              <button>Subscribe</button>
            </div>
            <div>
              <div className="likes"></div>
              <div className="share"></div>
              <div className="menu"></div>
            </div>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
};

export default VideoPage;
