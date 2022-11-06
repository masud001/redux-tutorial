import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './features/Posts/postSlice'
import userReducer from './features/Users/userSlice'
export const store = configureStore({
    reducer:{
        posts:postsReducer,
        users:userReducer
    }
})