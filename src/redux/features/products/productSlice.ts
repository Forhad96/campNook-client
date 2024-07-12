import { createSlice } from "@reduxjs/toolkit";

const initialState = {
}

const productsSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      const { user, token } = action.payload;
    },

  },
});


export const productReducer = productsSlice.reducer;
