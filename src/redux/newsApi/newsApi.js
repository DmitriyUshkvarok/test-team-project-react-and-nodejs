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
    getFetchNewsTitle: builder.query({
      query: (title) => `/news/search?title=${title}`,
      providesTags: (result, error, title) => ['News', { type: 'News', title }],
    }),
  }),
});

export const { useGetFetchNewsQuery, useGetFetchNewsTitleQuery } = newsApi;
