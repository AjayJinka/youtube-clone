import { useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../utils/store";
import { setVideos } from "../utils/searchSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const videos = useSelector((store: StoreState) => store.search.videos);
  useEffect(() => {
    if (videos.length > 0) return;
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    dispatch(setVideos(json.items));
  };

  return (
    <div className="grid gap-2 grid-cols-6">
      {videos.map((video) => (
        <Link
          to={"/watch?v=" + (video?.id?.videoId || video?.id)}
          key={video?.id?.videoId || video?.id}
        >
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
