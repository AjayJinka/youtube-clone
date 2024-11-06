import ButtonsList from "./ButtonsList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="flex flex-col gap-2 p-2">
      <ButtonsList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
