import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
   name: "home",
   initialState: {
      sortBy: "rank",
   },
   reducers: {
      setSortBy: (state, action) => {
         state.sortBy = action.payload;
      },
   },
});
export const { setSortBy } = homeSlice.actions;
export default homeSlice.reducer;
