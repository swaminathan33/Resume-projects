import { React } from "react";
import Mainlayout from "../Components/Layout/Mainlayout";
import { useSelector } from "react-redux";
import SearchVideoCard from "../Components/SearchVideoCard";

const SearchPage = () => {
  const searchVideos = useSelector((state) => state.searchvideo);
  console.log("searchvideos from redux", searchVideos);
  return (
    <Mainlayout>
      {searchVideos.value
        ? searchVideos.value.map((video) => {
            return <SearchVideoCard video={video} />;
          })
        : "nothing found"}
    </Mainlayout>
  );
};

export default SearchPage;
