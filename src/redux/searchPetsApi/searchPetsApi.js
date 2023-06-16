import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const searchPetsApi = createApi({
  reducerPath: 'searchPetsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pets-shelter-service.onrender.com/api/pets',
  }),

  endpoints: (builder) => ({
    searchPetsByTitle: builder.query({
      query: (title) => `/search?keyword=${title}`,
    }),
  }),
});

export const { useSearchPetsByTitleQuery } = searchPetsApi;
