import axios from "axios";
import React from "react";
import { convertRawtoString } from "./convertRawtoString";
// import {parseVideoDuration }from "./parseVideoDuration";
import { timeSince } from "./timeSince";
const parseVideoDuration = (duration) => {
  const durationParts = duration
    .replace("PT", "")
    .replace("H", ":")
    .replace("M", ":")
    .replace("S", "")
    .split(":");

  if (durationParts.length === 3) {
    return `${durationParts[0]}:${
      parseInt(durationParts[1]) < 10
        ? `0${durationParts[1]}`
        : durationParts[1]
    }:${
      parseInt(durationParts[2]) < 10
        ? `0${durationParts[2]}`
        : durationParts[2]
    }`;
  }

  if (durationParts.length === 2) {
    return `${durationParts[0]}:${
      parseInt(durationParts[1]) < 10
        ? `0${durationParts[1]}`
        : durationParts[1]
    }`;
  }

  if (durationParts.length === 1) {
    return `0:${
      parseInt(durationParts[0]) < 10
        ? `0${durationParts[0]}`
        : durationParts[0]
    }`;
  }

  return "";
};
export const parseData = async (items) => {
  try {
    const videoIds = [];
    const channelIds = [];
    const API = "AIzaSyCRLIOPJOGk_X5I9qX2rw6talb3f-rNjuE";
    items.forEach((item) => {
      channelIds.push(item.snippet.channelId);
      videoIds.push(item.id.videoId);
    });
    // console.log(channelIds, videoIds);
    const {
      data: { items: channelsData },
    } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&id=${channelIds.join(
        ","
      )}&key=${API}`
    );
    const parsedChannelsData = [];
    channelsData.forEach((channel) =>
      parsedChannelsData.push({
        id: channel.id,
        image: channel.snippet.thumbnails.default.url,
      })
    );
    // console.log(parsedChannelsData);

    const {
      data: { items: videosData },
    } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds.join(
        ","
      )}&key=${API}`
    );
    console.log(videosData);
    const parseData = [];
    items.forEach((item, index) => {
      const { image: channelImage } = parsedChannelsData.find(
        (data) => data.id === item.snippet.channelId
      );
      console.log(45, channelImage);
      if (channelImage) {
        parseData.push({
          videoId: item.id.videoId,
          videoTitle: item.snippet.title,
          videoDescription: item.snippet.description,
          videoThumbnail: item.snippet.thumbnails.medium.url,
          videoLink: `https://www.youtube.com/watch?v=${item.id.videoId}`,
          videoDuration: parseVideoDuration(
            videosData[index].contentDetails.duration
          ),
          // console.log(56);
          videoViews: convertRawtoString(
            videosData[index].statistics.viewCount
          ),
          videoAge: timeSince(new Date(item.snippet.publishedAt)),
          channelInfo: {
            id: item.snippet.channelId,
            image: channelImage,
            name: item.snippet.channelTitle,
          },
        });
        console.log(65);
      }
    });
    console.log(68);
    console.log(parseData, videosData);
    return parseData;
  } catch (e) {
    console.log(e.message);
  }
};

// export default parseData
