import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/react";
type TProductState = {
  search?: string;
  minPrice?: string;
  maxPrice?: string;
  category?: string;
  isClear?: boolean;
};

const initialState: TProductState = {
  search: "",
  category: "",
  minPrice: "",
  maxPrice: "",
  isClear: false,
};

const cartSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
      state.isClear = false;
    },
  
  },
});

export const { setSearch,} =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;

export const selectSearch = (state: RootState) => state.products.search;

