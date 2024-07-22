import { configureStore } from "@reduxjs/toolkit";
import CartDetails from "./reducers/CartDetails";
import authDetails from "./reducers/authDetails";

const store = configureStore({
    reducer:{
        CartDetails,
        authDetails
    }
})

export default store