/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
// @ts-ignore
import { API_KEY } from 'react-native-dotenv';
import axios from 'axios';
import { api } from 'services/api';

axios.defaults.headers.common.API_KEY = API_KEY;

export interface AuthState {
  authenticated: boolean
  id: string
  email: string
  username: string
  token: string
}

const initialState: AuthState = {
  authenticated: false,
  id: '',
  email: '',
  username: '',
  token: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startAuthLoading: (state) => ({ ...state, loading: true }),
    stopAuthLoading: (state) => ({ ...state, loading: false }),
  },
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.signIn.matchFulfilled, (state, action) => {
      if ('token' in action.payload) {
        const {
          token, id, email, username,
        } = action.payload;
        state = ({
          ...state, authenticated: true, token, id, email, username,
        });
      }
      return state;
    });
  },
});

export const { startAuthLoading, stopAuthLoading } = authSlice.actions;

export default authSlice.reducer;
