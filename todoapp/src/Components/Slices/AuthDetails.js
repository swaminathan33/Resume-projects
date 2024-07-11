import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    user:{}
}

export const authDetails = createSlice({
    name:"authdetails",
    initialState,
    reducers:{
        addUser:(state, action) =>{
            state.user = action.payload;
        },
        removeUser:(state) =>{
            state.user = {}
        }
    }
})

export const {addUser, removeUser} = authDetails.actions;

export default authDetails.reducer;
