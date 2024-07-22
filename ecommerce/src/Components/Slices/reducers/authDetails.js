import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authUser:null
}

const authDetails = createSlice({
    name:'authdetails',
    initialState,
    reducers:{
        addUser:(state, action) => {
            state.authUser = action.payload
        },
        removeUser:(state) =>{
            state.authUser = null;
        }
    }
})

export const { addUser, removeUser } = authDetails.actions

export default authDetails.reducer;