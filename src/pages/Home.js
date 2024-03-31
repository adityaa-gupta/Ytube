import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import { useAppDispatch, useAppSelector } from "../hooks/userApp";
import { getHomePageVideos } from "../store/reducers/getHomePageVideos";

export default function Home() {
  const [view, setView] = useState(true);
  const dispatch = useAppDispatch();
  // const [query, setQuery] = useState("");
  const videos = useAppSelector((state) => state.youTubeApp.videos);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);
  // useEffect(() => {
  //   console.log(query);
  // }, [query]);
  // console.log(query);
  return (
    <div>
      <Navbar view={view} setView={setView} />
      {view && <Sidebar isOpen={view} />}
    </div>
  );
}
