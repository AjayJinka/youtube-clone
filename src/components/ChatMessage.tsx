import { profileIcon } from "../utils/constants";
import { Message } from "../utils/types";

const ChatMessage: React.FC<Message> = ({ name, message }) => {
  return (
    <div className="flex items-center gap-1 p-2 bg-gray-100 rounded-lg">
      <img className="h-8" src={profileIcon} alt="profileIcon" />
      <div className="flex gap-2 items-center">
        <p className="font-bold">{name}</p>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
