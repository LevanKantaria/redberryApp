import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "main",
  initialState: { id: "", formPage: "1", images: [], dragState: false, width:'' },
  reducers: {
    idSelect(state, action) {
      state.id = action.payload;

      
    },
    PageSelect(state, action) {
      state.formPage = action.payload;
      console.log(state.formPage)
    },
    dragAndDropImage(state, action) {
      state.images = action.payload;
    
    },

    dragAndDropState(state, action) {
      state.dragState = action.payload;
      
    },
    windowWidth(state,action){
      state.width = action.payload
    }
  },
});

const store = configureStore({
  reducer: { main: filterSlice.reducer },
});

export const filterActions = filterSlice.actions;
export default store;
