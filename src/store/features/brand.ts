import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

interface BrandState {
  id: number;
}

const initialState: BrandState = {
  id: 1,
};

export const BrandSlice = createSlice({
  name: "Brand",
  initialState,
  reducers: {
    setBrand: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
  },
});

export const { setBrand } = BrandSlice.actions;
export const selectBrand = (state: RootState) => state.Brand;
