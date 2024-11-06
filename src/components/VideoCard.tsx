import { VideoInfo } from "../utils/types";

const VideoCard: React.FC<{ info: VideoInfo }> = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="shadow rounded-lg">
      <img src={thumbnails.medium.url} alt="video" className="rounded-lg" />
      <ul>
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        {statistics && <li>{statistics?.viewCount || ""} Views</li>}
      </ul>
    </div>
  );
};

export default VideoCard;
