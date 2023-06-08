import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const servicesApi = createApi({
  reducerPath: 'serviceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pets-shelter-service.onrender.com/api',
  }),
  tagTypes: ['Services'],
  endpoints: (builder) => ({
    getFetchService: builder.query({
      query: () => '/services ',
      providesTags: ['Services'],
    }),
  }),
});

export const { useGetFetchServiceQuery } = servicesApi;
