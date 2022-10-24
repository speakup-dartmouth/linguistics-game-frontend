import { createSlice, isAnyOf, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from 'services/api';
import axios from 'axios';
import { apiUrl } from 'lib/constants';

export interface User {
  id: string
  username: string
  email: string
  researchConsent: boolean,
  birthday: string,
  gender: string,
  interests: string[],
  demographicAttributes: { [key: string]: string },
}

export interface AuthState extends User {
  authenticated: boolean
  token: string
  loaded: boolean
  isRegistering: boolean
}

const initialState: AuthState = {
  authenticated: false,
  id: '',
  email: '',
  username: '',
  token: '',
  loaded: false,
  isRegistering: false,
  researchConsent: false,
  birthday: '',
  gender: '',
  interests: [],
  demographicAttributes: {},
};

export const retrieveToken = createAsyncThunk(
  'auth/retrieveToken',
  async () => {
    const token = await AsyncStorage.getItem('@token');
    if (!token) return null;

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
        researchConsent: data.researchConsent,
        birthday: data.birthday,
        gender: data.gender,
        interests: data.interests,
        ...data.demographicAttributes && { demographicAttributes: data.demographicAttributes },
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
      state.researchConsent = false;
      state.birthday = '';
      state.gender = '';
      state.interests = [];
      state.demographicAttributes = {};
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
    builder.addMatcher(api.endpoints.signIn.matchPending, (state) => {
      state.isRegistering = false;
      return state;
    });
    builder.addMatcher(api.endpoints.signUp.matchPending, (state) => {
      state.isRegistering = true;
      return state;
    });
    builder.addMatcher(api.endpoints.updateConsent.matchFulfilled, (state, action) => {
      state.researchConsent = action.payload.researchConsent;
      return state;
    });
    builder.addMatcher(api.endpoints.updateUser.matchFulfilled, (state, action) => {
      state = {
        ...state,
        ...action.payload,
      };
      return state;
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
