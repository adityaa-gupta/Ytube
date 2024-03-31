import { configureStore } from "@reduxjs/toolkit";
import youtubeReducer from "../features/youtube/youTubeSlice";
const store = configureStore({
  reducer: {
    youTubeApp: youtubeReducer,
  },
});

export default store;
