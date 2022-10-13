import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiUrl } from 'lib/constants';

interface LoginResponse {
  token: string
  id: string
  email: string
  username: string
}

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  reducerPath: 'api',
  endpoints: (builder) => ({
    signIn: builder.query<LoginResponse, {email: string, password: string}>({
      query: ({ email, password }) => {
        return {
          url: 'signin',
          method: 'POST',
          body: { email, password },
        };
      },
    }),
  }),
});

export const { useSignInQuery } = api;
