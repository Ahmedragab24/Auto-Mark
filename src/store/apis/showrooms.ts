// import { langType } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const ShowroomProductsApi = createApi({
  reducerPath: "ShowroomProductsApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
  tagTypes: ["ShowroomsProducts", "ShowroomsProductsById"],

  // Cache settings: Keep data for 60 seconds
  keepUnusedDataFor: 60,

  endpoints: (builder) => ({
    //   Get Showrooms Products
    getShowroomsProducts: builder.query({
      query: ({
        lang,
        page,
        countryId,
      }: {
        lang: string;
        page: number;
        countryId: number;
      }) => `api/showrooms?lang=${lang}&page=${page}&country_id=${countryId}`,

      // Provide tags for cache invalidation
      providesTags: ["ShowroomsProducts"],
    }),

    //   Get Showrooms Products BY ID
    getShowroomProductsById: builder.query({
      query: ({ id, lang }: { id: number; lang: string }) =>
        `api/showrooms/${id}/profile?lang=${lang}`,

      // Provide tags for cache invalidation
      providesTags: ["ShowroomsProductsById"],
    }),
  }),
});

// Export hooks for usage in function components
export const { useGetShowroomsProductsQuery, useGetShowroomProductsByIdQuery } =
  ShowroomProductsApi;
