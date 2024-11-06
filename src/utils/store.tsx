import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});

export type StoreState = ReturnType<typeof store.getState>;
export default store;
