import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { parseData } from "../../utils/parseData";
// import parsedData from "
const API = "AIzaSyCRLIOPJOGk_X5I9qX2rw6talb3f-rNjuE";

export const getHomePageVideos = createAsyncThunk(
  "youtube/App/homePageVideos",
  async (isNext, { getState }) => {
    const {
      youTubeApp: { nextPageToken: nextPageTojenFromState, video },
    } = getState();
    const response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q="next js"&key=${API}&part=snippet&type=video`
    );
    // console.log(response);
    const items = response.data.items;
    // console.log(items);

    const parsedData = await parseData(items);
    console.log(parsedData);
  }
);
