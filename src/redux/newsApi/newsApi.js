import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pets-shelter-service.onrender.com/api',
  }),
  tagTypes: ['News'],
  endpoints: (builder) => ({
    getFetchNews: builder.query({
      query: () => '/news',
      providesTags: ['News'],
    }),
  }),
});

export const { useGetFetchNewsQuery } = newsApi;
