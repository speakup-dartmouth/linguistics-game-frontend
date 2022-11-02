import { createSlice } from '@reduxjs/toolkit';
import { api } from 'services/api';
import { User } from './authSlice';

export interface Question {
  title: string;
  description: string;
  photoUrl?: string;
  _id: string;
  options: string[];
  categories: string[];
}

export interface Answer {
  question: string;
  user: Pick<User, 'username' | '_id'>;
  recordingURL?: string;
  stance: string;
  _id: string;
  upvoteCount: number;
  downvoteCount: number;
  userVoteStatus: 1 | -1 | 0;
}

export interface QuestionState {
  categories: string[];
  questions: Question[];
  currentQuestion: Question | null;
  questionAnswers: {
    [questionId: string]: Answer[];
  }
}

const initialState: QuestionState = {
  categories: [],
  questions: [],
  currentQuestion: null,
  questionAnswers: {},
};

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    setCurrentQuestion(state, action) {
      state.currentQuestion = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.getCategories.matchFulfilled, (state, action) => {
      state.categories = action.payload;
      return state;
    });
    builder.addMatcher(api.endpoints.getQuestions.matchFulfilled, (state, action) => {
      state.questions = action.payload;
      return state;
    });
    builder.addMatcher(api.endpoints.addAnswer.matchFulfilled, (state, action) => {
      const { question } = action.payload;
      if (!state.questionAnswers[question]) {
        state.questionAnswers[question] = [];
      }
      state.questionAnswers[question].push(action.payload);
      return state;
    });
    builder.addMatcher(api.endpoints.getAnswers.matchFulfilled, (state, action) => {
      const { questionId } = action.meta.arg.originalArgs;
      state.questionAnswers[questionId] = action.payload;
      return state;
    });
    builder.addMatcher(api.endpoints.vote.matchFulfilled, (state, action) => {
      const { question } = action.payload;
      const answers = state.questionAnswers[question];
      if (answers) {
        const index = answers.findIndex((a) => a._id === action.payload._id);
        if (index !== -1) {
          answers[index] = action.payload;
        }
      }
      return state;
    });
  },
});

export const { setCurrentQuestion } = questionSlice.actions;

export default questionSlice.reducer;
