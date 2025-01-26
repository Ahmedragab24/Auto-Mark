import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";
import { countryType } from "@/types";

interface CountryState {
  Country: countryType;
}

const getInitialCountry = (): countryType => {
  if (typeof window !== "undefined") {
    const storedCountry = localStorage.getItem("country");
    return storedCountry
      ? JSON.parse(storedCountry)
      : {
          id: 1,
          name_ar: "الإمارات العربية المتحدة",
          name_en: "UAE",
        };
  }

  return {
    id: 1,
    name_ar: "الإمارات العربية المتحدة",
    name_en: "UAE",
  };
};

const initialState: CountryState = {
  Country: getInitialCountry(),
};

export const CountrySlice = createSlice({
  name: "Country",
  initialState,
  reducers: {
    setCountry: (state, action: PayloadAction<countryType>) => {
      state.Country = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("country", JSON.stringify(action.payload));
      }
    },
  },
});

export const { setCountry } = CountrySlice.actions;
export const selectCountry = (state: RootState) => state.Country;
