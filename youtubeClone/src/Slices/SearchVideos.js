import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    videos:[]
}

export const searchVideo = createSlice({
    name:'searchvideo',
    initialState,
    reducers:{
        addVideos:(state,action) =>{
            state.value = action.payload
        }
    }
})


export const {addVideos} = searchVideo.actions


export default searchVideo.reducer;

