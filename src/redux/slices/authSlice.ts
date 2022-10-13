/* eslint-disable no-param-reassign */
import { createSlice, isAnyOf, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from 'services/api';
import axios from 'axios';
import { apiUrl } from 'lib/constants';

export interface AuthState {
  authenticated: boolean
  id: string
  email: string
  username: string
  token: string
  loaded: boolean
}

const initialState: AuthState = {
  authenticated: false,
  id: '',
  email: '',
  username: '',
  token: '',
  loaded: false,
};

export const retrieveToken = createAsyncThunk(
  'auth/retrieveToken',
  async () => {
    const token = await AsyncStorage.getItem('@token');
    const { data } = await axios.get(`${apiUrl}user-info`, {
      headers: {
        authorization: token,
      },
    });

    if (data) {
      return {
        token,
        id: data.id,
        email: data.email,
        username: data.username,
      };
    }

    return null;
  },
);

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
    builder.addCase(retrieveToken.fulfilled, (state, action) => {
      if (action.payload) {
        state = {
          ...state,
          ...action.payload,
          authenticated: true,
        };
      }
      state.loaded = true;
      return state;
    });
    builder.addCase(retrieveToken.rejected, (state) => {
      state.loaded = true;
      return state;
    });
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
