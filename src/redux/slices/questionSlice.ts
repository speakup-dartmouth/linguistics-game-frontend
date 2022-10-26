import { createSlice } from '@reduxjs/toolkit';
import { api } from 'services/api';

export interface Question {
  title: string;
  description: string;
  photoUrl?: string;
  _id: string;
  options: string[];
}
export interface QuestionState {
  categories: string[];
  questions: Question[];
}

const initialState: QuestionState = {
  categories: [],
  questions: [],
};

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.getCategories.matchFulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addMatcher(api.endpoints.getQuestions.matchFulfilled, (state, action) => {
      state.questions = action.payload;
    });
  },
});

export default questionSlice.reducer;
