import { createSlice } from "@reduxjs/toolkit";

export const genre = createSlice({
  name: "genre",
  initialState: {
    grenreName: "",
    page: 1,
    searchQuery: "",
  },
  reducers: {
    selectGenre: (state, action) => {
      console.log(action, payload);
      state.grenreName = action.payload;
    },
  },
});

export const { selectGenre } = genre.actions;
export default genre.reducer;
