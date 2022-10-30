import { createSlice } from '@reduxjs/toolkit';
import { api } from 'services/api';

export interface QuestionState {
  categories: string[];
}

const initialState: QuestionState = {
  categories: [],
};

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.getCategories.matchFulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default questionSlice.reducer;
