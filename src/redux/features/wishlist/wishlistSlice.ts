import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/react";
type TProductState = {
  search?: string;
  isClear?: boolean;
};

const initialState: TProductState = {
  search: "",

  isClear: false,
};

const wishlistSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
      state.isClear = false;
    },
  },
});

export const { setSearch } = wishlistSlice.actions;
export const wishlistReducer = wishlistSlice.reducer;

export const selectSearch = (state: RootState) => state.products.search;
