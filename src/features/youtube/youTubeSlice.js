import { createSlice } from "@reduxjs/toolkit";
import { getHomePageVideos } from "../../store/reducers/getHomePageVideos";
const initialState = {
  video: [],
  currentPlaying: null,
  searchTerm: "",
  searchResults: [],
  nextPageToken: null,
  recommendedVideo: [],
};

const youTueSlice = createSlice({
  name: "youTubeApp",
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(getHomePageVideos.fulfilled,(state,action)=>{
      
    })
  }
});

export default youTueSlice.reducer;
