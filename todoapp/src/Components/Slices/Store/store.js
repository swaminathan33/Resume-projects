import { configureStore } from "@reduxjs/toolkit";
import  authDetails  from "../AuthDetails";
import  todoDetail  from "../TodoDetail";

const store = configureStore({
    reducer:{
        authdetails: authDetails,
        todoDetail
    }
})

export default store