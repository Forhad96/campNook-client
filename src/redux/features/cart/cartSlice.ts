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
    setCategory: (state, action: PayloadAction<TProductState>) => {
      const { category } = action.payload;
      state.category = category;
      state.isClear = false;
    },
    setPrice: (state, action: PayloadAction<TProductState>) => {
      const { minPrice, maxPrice } = action.payload;
      state.minPrice = minPrice;
      state.maxPrice = maxPrice;
      state.isClear = false;
    },
    clearFilters: (state) => {
      state.isClear = true;
      state.category = "";
      state.search = "";
      state.minPrice = "";
    },
  },
});

export const { setSearch, setPrice, setCategory, clearFilters } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;

export const selectSearch = (state: RootState) => state.products.search;
export const selectCategory = (state: RootState) => state.products.category;
export const selectMinPrice = (state: RootState) => state.products.minPrice;
export const selectMaxPrice = (state: RootState) => state.products.maxPrice;
export const selectClear = (state: RootState) => state.products.isClear;
