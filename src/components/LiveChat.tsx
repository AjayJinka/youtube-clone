import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomName, generateRandomText } from "../utils/helper";
import { addMessage } from "../utils/chatSlice";
import { StoreState } from "../utils/store";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const messages = useSelector((store: StoreState) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      const name = generateRandomName();
      const message = generateRandomText(20);
      const payload = { name, message };
      dispatch(addMessage(payload));
      console.log("setInterval running");
    }, 2000);
    return () => {
      clearInterval(i);
    };
  }, []);
  const sendLiveMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addMessage({
        name: "Ajay Jinka",
        message: liveMessage,
      })
    );
    setLiveMessage("");
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="border h-[500px] w-full flex flex-col-reverse gap-2 overflow-y-scroll">
        {messages.map((m, index) => (
          <ChatMessage key={index} {...m} />
        ))}
      </div>
      <form
        className="flex gap-2 border border-black p-1"
        onSubmit={sendLiveMessage}
      >
        <input
          type="text"
          className="border w-full"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-300 px-3 font-bold rounded hover:bg-blue-400"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
