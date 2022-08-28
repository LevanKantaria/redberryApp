import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "main",
  initialState: { id: "", formPage: "1" },
  reducers: {
    idSelect(state, action) {
      state.id = action.payload;

      console.log(state.id);
    },
    PageSelect(state, action) {
        state.formPage = action.payload;
      },
  },
  
});

const store = configureStore({
  reducer: { main: filterSlice.reducer },
});

export const filterActions = filterSlice.actions;
export default store;
