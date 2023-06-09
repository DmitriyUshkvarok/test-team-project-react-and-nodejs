import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const petsApi = createApi({
  reducerPath: 'petsApi',
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
  tagTypes: ['Pets'],
  endpoints: (builder) => ({
    getPets: builder.query({
      query: () => `api/pets`,
      providesTags: ['Pets'],
    }),
    addPets: builder.mutation({
      query: (formData) => ({
        url: `api/pets`,
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Pets'],
    }),
    deletePets: builder.mutation({
      query: (petId) => ({
        url: `api/pets/${petId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Pets'],
    }),
  }),
});

export const { useGetPetsQuery, useAddPetsMutation, useDeletePetsMutation } =
  petsApi;
