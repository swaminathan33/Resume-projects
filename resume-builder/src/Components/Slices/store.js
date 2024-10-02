import { configureStore } from "@reduxjs/toolkit";
import FormDetails from "./FormDetails";

const store = configureStore({
    reducer:{
        FormDetails,
    }
})

export default store