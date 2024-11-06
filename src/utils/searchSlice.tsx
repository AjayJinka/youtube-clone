import { createSlice } from "@reduxjs/toolkit";
import { type SearchState } from "./types";

const initialState: SearchState = {
  cache: {},
  videos: [],
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state.cache, action.payload);
    },
    setVideos: (state, action) => {
      state.videos = action.payload;
    },
    clearVideos: (state) => {
      state.videos = [];
    },
  },
});

export const { cacheResults, setVideos, clearVideos } = searchSlice.actions;
export default searchSlice.reducer;
