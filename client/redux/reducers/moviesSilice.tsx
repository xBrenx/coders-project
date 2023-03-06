import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    moviesList: [],
  },
  reducers: {
    getAllPopulars: (state, action) => {
      state.moviesList = action.payload;
    },
  },
});

export const { getAllPopulars } = moviesSlice.actions;

export default moviesSlice.reducer;
