import { createSlice } from '@reduxjs/toolkit';
import { Audio } from 'expo-av';
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
  },
  currentlyPlayingSounds: Audio.Sound[];
}

const initialState: QuestionState = {
  categories: [],
  questions: [],
  currentQuestion: null,
  questionAnswers: {},
  currentlyPlayingSounds: [],
};

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    setCurrentQuestion(state, action) {
      state.currentQuestion = action.payload;
    },
    addCurrentlyPlayingSound(state, action) {
      state.currentlyPlayingSounds.push(action.payload);
    },
    removeCurrentlyPlayingSound(state, action) {
      state.currentlyPlayingSounds = state.currentlyPlayingSounds.filter((sound) => sound !== action.payload);
    },
    stopAllCurrentlyPlayingSounds(state) {
      state.currentlyPlayingSounds.forEach((sound) => {
        sound.stopAsync();
      });
      state.currentlyPlayingSounds = [];
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
    builder.addMatcher(api.endpoints.vote.matchPending, (state, action) => {
      const { answerId, vote, questionId } = action.meta.arg.originalArgs;
      const answers = state.questionAnswers[questionId];

      if (answers) {
        const index = answers.findIndex((a) => a._id === answerId);

        if (index !== -1) {
          if (vote === 1) {
            if (answers[index].userVoteStatus === 1) {
              answers[index].upvoteCount -= 1;
              answers[index].userVoteStatus = 0;
            } else {
              if (answers[index].userVoteStatus === -1) {
                answers[index].downvoteCount -= 1;
              }
              answers[index].upvoteCount += 1;
              answers[index].userVoteStatus = 1;
            }
          }
          if (vote === -1) {
            if (answers[index].userVoteStatus === -1) {
              answers[index].downvoteCount -= 1;
              answers[index].userVoteStatus = 0;
            } else {
              if (answers[index].userVoteStatus === 1) {
                answers[index].upvoteCount -= 1;
              }
              answers[index].downvoteCount += 1;
              answers[index].userVoteStatus = -1;
            }
          }
        }
      }

      return state;
    });
    /*
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
    }); */
  },
});

export const {
  setCurrentQuestion, addCurrentlyPlayingSound, removeCurrentlyPlayingSound, stopAllCurrentlyPlayingSounds,
} = questionSlice.actions;

export default questionSlice.reducer;
