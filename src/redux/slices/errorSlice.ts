import { createSlice } from '@reduxjs/toolkit';
import { api } from 'services/api';

export interface ErrorState {
  message: string;
  isError: boolean;
}

const initialState: ErrorState = {
  message: '',
  isError: false,
};

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, action) => {
      state.message = action.payload;
      state.isError = true;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.signIn.matchRejected, (state, action) => {
      if (typeof action.payload.data === 'string' && action.payload.data.includes('Unauthorized')) {
        state.message = 'Invalid email or password';
      } else {
        state.message = 'There was an error signing in';
      }
      state.isError = true;
      return state;
    });
  },
});

export const { setError } = errorSlice.actions;

export default errorSlice.reducer;
