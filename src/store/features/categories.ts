import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";
import { CategoryCarsType } from "@/types";

interface CategoriesState {
  Categories: CategoryCarsType;
}

const initialState: CategoriesState = {
  Categories: {
    id: 1,
    key: "",
    name: "",
  },
};

export const CategoriesSlice = createSlice({
  name: "Categories",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<CategoryCarsType>) => {
      state.Categories = action.payload;
    },
  },
});

export const { setCategories } = CategoriesSlice.actions;
export const selectCategories = (state: RootState) => state.Categories;
