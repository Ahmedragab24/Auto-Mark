import { configureStore } from "@reduxjs/toolkit";
import { ProductsApi } from "./apis/products";
import { countriesApi } from "./apis/countries&cities";
import { CountrySlice } from "./features/country";
import { LanguageSlice } from "./features/language";
import { categoriesApi } from "./apis/categories";
import { CategoriesSlice } from "./features/categories";
import { favoritesSlice } from "./features/favorite";
import { ShowroomProductsApi } from "./apis/showrooms";
import { authApi } from "./apis/auth";
import { attributesApi } from "./apis/attrbuite";
import { filterSlice } from "./features/filter";
import { productsNumberSlice } from "./features/productsNumber";
import { BrandSlice } from "./features/brand";
import { filteringApi } from "./apis/filtering";
import { SearchApi } from "./apis/search";

export const store = configureStore({
  reducer: {
    // Add your reducers here
    Country: CountrySlice.reducer,
    Language: LanguageSlice.reducer,
    Categories: CategoriesSlice.reducer,
    Favorites: favoritesSlice.reducer,
    filters: filterSlice.reducer,
    productsNumber: productsNumberSlice.reducer,
    Brand: BrandSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [ProductsApi.reducerPath]: ProductsApi.reducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [ShowroomProductsApi.reducerPath]: ShowroomProductsApi.reducer,
    [attributesApi.reducerPath]: attributesApi.reducer,
    [filteringApi.reducerPath]: filteringApi.reducer,
    [SearchApi.reducerPath]: SearchApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      ProductsApi.middleware,
      ShowroomProductsApi.middleware,
      countriesApi.middleware,
      categoriesApi.middleware,
      filteringApi.middleware,
      attributesApi.middleware,
      SearchApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
