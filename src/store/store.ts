import { configureStore } from "@reduxjs/toolkit";
import { ProductsApi } from "./apis/products";
import { countriesApi } from "./apis/countries&cities";
import { CountrySlice } from "./features/country";
import { LanguageSlice } from "./features/language";
import { categoriesApi } from "./apis/categories";
import { CategoriesSlice } from "./features/categories";
import { favoritesSlice } from "./features/favorite";
import { ShowroomProductsApi } from "./apis/showrooms";
// ...

export const store = configureStore({
  reducer: {
    // Add your reducers here
    Country: CountrySlice.reducer,
    Language: LanguageSlice.reducer,
    Categories: CategoriesSlice.reducer,
    Favorites: favoritesSlice.reducer,
    [ProductsApi.reducerPath]: ProductsApi.reducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [ShowroomProductsApi.reducerPath]: ShowroomProductsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      ProductsApi.middleware,
      ShowroomProductsApi.middleware,
      countriesApi.middleware,
      categoriesApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
