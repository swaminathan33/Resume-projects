import { React, useEffect, useState } from "react";
import { LuMenu } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import logo from "../Assets/yt-logo.png";
import { FaMicrophone } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { RiAccountCircleLine } from "react-icons/ri";
import SidebarToggle from "./SidebarToggle";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addVideos } from "../Slices/SearchVideos";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  const [finalWord, setFinalWord] = useState("");
  const [searchVideos, setSearchVideos] = useState([]);
  let searchvideosVar = [];

  const dispatch = useDispatch((state) => state.searchvideo.addVideos);

  const navigate = useNavigate();

  const getSearchVideos = async (searchWord) => {
    const res = await axios.get("https://youtube-v31.p.rapidapi.com/search", {
      params: {
        q: searchWord,
        part: "snippet,id",
        regionCode: "US",
        maxResults: "50",
        order: "date",
      },
      headers: {
        "x-rapidapi-key": "4d08e6d40bmsh66c49b4bf545d8bp177b08jsn3047ad857da0",
        "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
      },
    });
    setSearchVideos(res.data.items);
    // console.log("hi", searchVideos);
  };

  useEffect(() => {
    getSearchVideos(searchWord);
    console.log("searchvideos from state", searchVideos);
    dispatch(addVideos(searchVideos));
    navigate(`/search`);
  }, [finalWord]);

  const handleSearch = () => {};
  return (
    <div className="flex justify-between items-center mt-4 px-5">
      {menuOpen ? (
        <SidebarToggle menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      ) : (
        ""
      )}
      <div className="flex justify-between items-center gap-4">
        <div
          className="hover:border-[1px] p-2 hover:bg-gray-200 border-none rounded-full"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <LuMenu fontSize={"22"} />
        </div>
        <div>
          <img src={logo} height={"90"} width={"90"} alt="" />
        </div>
      </div>
      <div className="flex justify-between items-center gap-6">
        <div className="searchbar border-[1px] border-slate-300 rounded-full px-4 p-2 flex justify-center items-center">
          <input
            type="text"
            className="w-[35rem] outline-none"
            placeholder="Search"
            onChange={(e) => setSearchWord(e.target.value)}
          />
          <div>
            <CiSearch
              fontSize={"25px"}
              className="cursor-pointer"
              onClick={() => setFinalWord(searchWord)}
            />
          </div>
        </div>
        <div className="mic border-[1px] p-2 rounded-full bg-gray-100 hover:bg-gray-300">
          <FaMicrophone fontSize={"20px"} />
        </div>
      </div>
      <div className="flex justify-between items-center gap-4">
        <BsThreeDotsVertical fontSize={"20px"} />
        <div className="signIn border-[1px] rounded-full p-2 px-3 hover:bg-blue-100">
          <button className="text-blue-600 font-medium flex justify-center items-center gap-1">
            <RiAccountCircleLine fontSize={"20px"} />
            <div className="text-sm">Sign in</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
