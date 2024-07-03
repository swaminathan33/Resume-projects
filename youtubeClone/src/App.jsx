import React from "react";
// import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import VideoPage from "./Pages/VideoPage";
import SearchPage from "./Pages/SearchPage";
const App = () => {
  // const api = async () => {
  //   const res = await axios
  //     .get("https://youtube-v31.p.rapidapi.com/search", {
  //       params: {
  //         q: "music",
  //         maxResults: 10,
  //       },
  //       headers: {
  //         "x-rapidapi-key":
  //           "4d08e6d40bmsh66c49b4bf545d8bp177b08jsn3047ad857da0",
  //         "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  //       },
  //     })
  //     .then((res) => console.log(res.data.items));
  // };
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/video/:id" element={<VideoPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
