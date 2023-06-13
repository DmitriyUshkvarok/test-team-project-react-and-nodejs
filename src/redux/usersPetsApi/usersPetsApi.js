import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userPetsApi = createApi({
  reducerPath: 'userPetsApi',
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
  tagTypes: ['Posts'],
  endpoints: (builder) => ({
    getUserPets: builder.query({
      query: () => `api/userPets`,
    }),
    addUserPets: builder.mutation({
      query: (formData) => ({
        url: `api/userPets`,
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Posts'],
    }),
    deleteUserPets: builder.mutation({
      query: (petId) => ({
        url: `api/userPets/${petId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetUserPetsQuery,
  useAddUserPetsMutation,
  useDeleteUserPetsMutation,
} = userPetsApi;
