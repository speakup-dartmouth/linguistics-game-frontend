import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiUrl } from 'lib/constants';
import { RootState } from 'redux/store';

// @ts-ignore
import { API_KEY } from 'react-native-dotenv';
import axios from 'axios';

axios.defaults.headers.common.API_KEY = API_KEY;

interface LoginResponse {
  token: string
  id: string
  email: string
  username: string
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
    prepareHeaders: (headers, { getState }) => {
      const { token } = (getState() as RootState).auth;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      headers.set('API_KEY', API_KEY);

      return headers;
    },
  }),
  reducerPath: 'api',
  endpoints: (builder) => ({
    signIn: builder.mutation<LoginResponse, {email: string, password: string}>({
      query: ({ email, password }) => {
        return {
          url: 'signin',
          method: 'POST',
          body: { email, password },
        };
      },
    }),
    signUp: builder.mutation<LoginResponse, {email: string, password: string, username: string}>({
      query: ({ username, email, password }) => {
        return {
          url: 'signup',
          method: 'POST',
          body: { username, email, password },
        };
      },
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = api;
