import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const verifyApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pets-shelter-service.onrender.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Verify'],
  endpoints: (build) => ({
    verifyUser: build.mutation({
      query: (email) => ({
        url: 'users/verify',
        method: 'POST',
        body: { email },
      }),
      invalidatesTags: ['Verify'],
    }),
  }),
});

export const { useVerifyUserMutation } = verifyApi;
