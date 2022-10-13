/* eslint-disable no-param-reassign */
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { api } from 'services/api';

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
    logout: (state) => {
      state.authenticated = false;
      state.id = '';
      state.email = '';
      state.username = '';
      state.token = '';
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(isAnyOf(api.endpoints.signIn.matchFulfilled, api.endpoints.signUp.matchFulfilled), (state, action) => {
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

export const { logout } = authSlice.actions;

export default authSlice.reducer;
