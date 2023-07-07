import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const favoritApi = createApi({
  reducerPath: 'favoritApi',
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
  tagTypes: ['Favorit'],
  endpoints: (build) => ({
    addFavorit: build.mutation({
      query: (userId, petId) => ({
        url: `users/${userId}/favorites`,
        method: 'POST',
        body: { petId },
      }),
      invalidatesTags: ['Favorit'],
    }),
  }),
});

export const { useAddFavoritMutation } = favoritApi;
