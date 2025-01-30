import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const attributesApi = createApi({
  reducerPath: "attributesApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
  tagTypes: ["Brands", "Models"],

  keepUnusedDataFor: 60,

  endpoints: (builder) => ({
    //   Get Brands
    getBrands: builder.query({
      query: ({ id }: { id: number }) => `api/brands?category_id=${id}`,
      providesTags: ["Brands"],
    }),

    //   Get Models
    getModels: builder.query({
      query: ({ brand_id }: { brand_id: number }) =>
        `api/brands/${brand_id}/models`,
      providesTags: ["Models"],
    }),
  }),
});

export const { useGetBrandsQuery, useGetModelsQuery } = attributesApi;
