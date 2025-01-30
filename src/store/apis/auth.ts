import type { RegisterFormData } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    // credentials: "include", // This is important for including cookies
    prepareHeaders: (headers) => {
      // Get the CSRF token from the cookie
      const csrfToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("XSRF-TOKEN="))
        ?.split("=")[1];

      if (csrfToken) {
        headers.set("X-XSRF-TOKEN", decodeURIComponent(csrfToken));
      }

      return headers;
    },
  }),

  endpoints: (builder) => ({
    // POST request for Registration
    postRegister: builder.mutation({
      query: (data: RegisterFormData) => ({
        url: `/api/register`,
        method: "POST",
        body: { data },
      }),
    }),
  }),
});

export const { usePostRegisterMutation } = authApi;
