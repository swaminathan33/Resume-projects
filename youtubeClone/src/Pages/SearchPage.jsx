import { React } from "react";
import Mainlayout from "../Components/Layout/Mainlayout";
import { useSelector } from "react-redux";
import SearchVideoCard from "../Components/SearchVideoCard";

const SearchPage = () => {
  const searchVideos = useSelector((state) => state.searchvideo);
  return (
    <Mainlayout>
      {searchVideos.value
        ? searchVideos.value.map((video, index) => {
            return <SearchVideoCard video={video} key={index} />;
          })
        : "nothing found"}
    </Mainlayout>
  );
};

export default SearchPage;
