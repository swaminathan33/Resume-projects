import { configureStore } from "@reduxjs/toolkit";
import  searchVideo  from "../SearchVideos";

const store = configureStore({
    reducer:{
        searchvideo: searchVideo
    }
})

export default store