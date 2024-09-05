import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
   name: "home",
   initialState: {
      sortBy: "place",
      order: "highest",
   },
   reducers: {
      setSortBy: (state, action) => {
         state.sortBy = action.payload;
      },
      setOrder: (state, action) => {
         state.order = action.payload;
      },
   },
});
export const { setSortBy, setOrder } = homeSlice.actions;
export default homeSlice.reducer;
