import { createSlice } from "@reduxjs/toolkit";

const albumSlice = createSlice({
  name: "albums",
  initialState: {
    albums: [],
  },
  //набір методів з якими працюємо
  reducers: {
    addAlbum(state, action) {
      console.log(state);
      console.log(action);
      // addNewAlbum(action.payload.album);
    },
    revoveAlbum(state, action) {},
  },
});

export const { addAlbum, revoveAlbum } = albumSlice.actions;
export default albumSlice.reducer;
