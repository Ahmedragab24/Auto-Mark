import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const filteringApi = createApi({
  reducerPath: "filteringApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
  tagTypes: ["filtering"],

  keepUnusedDataFor: 60,

  endpoints: (builder) => ({
    //   Get Filter product
    getFilters: builder.query({
      query: ({ id }: { id: number }) => `api/categories/${id}/attributes`,
      providesTags: ["filtering"],
    }),
  }),
});

export const { useGetFiltersQuery } = filteringApi;
