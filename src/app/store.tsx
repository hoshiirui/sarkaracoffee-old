import { configureStore } from "@reduxjs/toolkit";
import shareModalSlice from "../features/shareModalSlice";

export const store = configureStore({
    reducer: {
        shareModal: shareModalSlice
    }
})