import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface FilterOption {
  id: string;
  name_ar: string;
}

interface FilterState {
  selectedFilters: {
    [key: string]: FilterOption[];
  };
  priceRange: [number, number];
  year: number | null;
}

const initialState: FilterState = {
  selectedFilters: {},
  priceRange: [0, 1000],
  year: null,
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    toggleFilter: (
      state,
      action: PayloadAction<{ category: string; option: FilterOption }>
    ) => {
      const { category, option } = action.payload;
      if (!state.selectedFilters[category]) {
        state.selectedFilters[category] = [];
      }
      const index = state.selectedFilters[category].findIndex(
        (item) => item.id === option.id
      );
      if (index > -1) {
        state.selectedFilters[category].splice(index, 1);
      } else {
        state.selectedFilters[category].push(option);
      }
    },
    setPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.priceRange = action.payload;
    },
    setYear: (state, action: PayloadAction<number | null>) => {
      state.year = action.payload;
    },
    clearFilters: (state) => {
      state.selectedFilters = {};
      state.priceRange = [0, 1000];
      state.year = null;
    },
  },
});

export const { toggleFilter, setPriceRange, setYear, clearFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
