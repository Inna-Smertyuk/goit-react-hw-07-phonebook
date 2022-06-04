import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    value: "",
  },
  reducers: {
    contactsFilter(state, action) {
      state.value = action.payload;
    },
  },
});

export const { contactsFilter } = filterSlice.actions;
export default filterSlice.reducer;
