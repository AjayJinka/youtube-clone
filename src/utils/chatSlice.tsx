import { createSlice } from "@reduxjs/toolkit";
import { Message } from "./types";
import { OFFSET_LIVE_CHAT } from "./constants";

type ChatState = {
  messages: Message[];
};

const initialState: ChatState = {
  messages: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(OFFSET_LIVE_CHAT, 1);
      state.messages.unshift(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
