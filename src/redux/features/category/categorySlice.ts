
import { createSlice } from "@reduxjs/toolkit";
export interface TCategory {
  name: string;
  description: string;
  image: string;
}

const initialState: TCategory = {
name:"",
description:"",
image:""
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
});

export const categoryReducer = categorySlice.reducer;

