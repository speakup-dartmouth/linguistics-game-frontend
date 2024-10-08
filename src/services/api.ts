/* eslint-disable no-return-await */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiUrl } from 'lib/constants';
import { RootState } from 'redux/store';

// @ts-ignore
import { API_KEY } from 'react-native-dotenv';
import axios from 'axios';
import { User } from 'redux/slices/authSlice';
import { Answer, Question } from 'redux/slices/questionSlice';
import { Suggestion } from 'redux/slices/suggestionSlice';

axios.defaults.headers.common.API_KEY = API_KEY;

interface LoginResponse {
  token: string
  id: string
  email: string
  username: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const responseHandler = async (response: Response): Promise<any> => {
  try {
    return await response.clone().json();
  } catch (error) {
    return await response.text();
  }
};

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
    prepareHeaders: (headers, { getState }) => {
      const { token } = (getState() as RootState).auth;
      if (token) {
        headers.set('authorization', token);
      }
      headers.set('API_KEY', API_KEY);
      return headers;
    },
  }),
  reducerPath: 'api',
  tagTypes: ['Leaderboard'],
  endpoints: (builder) => ({
    signIn: builder.mutation<LoginResponse, {email: string, password: string}>({
      query: ({ email, password }) => {
        return {
          url: 'signin',
          method: 'POST',
          body: { email, password },
          responseHandler,
        };
      },
    }),
    signUp: builder.mutation<LoginResponse, {email: string, password: string, username: string, gender: string, over18: boolean}>({
      query: ({
        username, email, password, gender, over18,
      }) => {
        return {
          url: 'signup',
          method: 'POST',
          body: {
            username, email, password, gender, over18,
          },
          responseHandler,
        };
      },
    }),
    updateConsent: builder.mutation<User, boolean>({
      query: (value) => {
        return {
          url: 'update-consent',
          method: 'POST',
          responseHandler,
          body: { researchConsent: value },
        };
      },
    }),
    updateUser: builder.mutation<User, Partial<User>>({
      query: (user) => {
        return {
          url: 'users',
          method: 'PUT',
          responseHandler,
          body: user,
        };
      },
    }),
    getUser: builder.query<User, {userId: string}>({
      query: ({ userId }) => `users/${userId}`,
    }),
    getCategories: builder.query<string[], void>({
      query: () => 'categories',
    }),
    getSuggestions: builder.query<Suggestion[], void>({
      query: () => 'suggestions',
    }),
    getQuestions: builder.query<Question[], void>({
      query: () => 'questions',
    }),
    getQuestion: builder.query<Question, {questionId: string}>({
      query: ({ questionId }) => `questions/${questionId}`,
    }),
    queryQuestions: builder.query<Question[], {q: string}>({
      query: (q) => `questions?q=${q.q}`,
    }),
    getLeaderboard: builder.query<User[], void>({
      query: () => 'leaderboard',
      providesTags: ['Leaderboard'],
    }),
    addAnswer: builder.mutation<Answer, {questionId: string, recordingURL: string, stance: string}>({
      query: ({ questionId, recordingURL, stance }) => {
        return {
          url: 'answers',
          method: 'POST',
          responseHandler,
          body: { question: questionId, recordingURL, stance },
        };
      },
    }),
    getAnswers: builder.query<Answer[], {questionId: string}>({
      query: ({ questionId }) => `answers?question=${questionId}`,
    }),
    getAllAnswers: builder.query<Answer[], void>({
      query: () => 'allAnswers',
    }),
    getSuggestionsByUser: builder.query<Suggestion[], {userId: string}>({
      query: ({ userId }) => `suggestions/user/${userId}`,
    }),
    // getUser: builder.query<User, {userId: string}>({
    //   query: ({ userId }) => `users/${userId}`,
    // }),
    addSuggestion: builder.mutation<Suggestion, {prompt: string, stances: {stance: string, color: string}[], submitted: Date, icon: string, status: string, id: string}>({
      query: ({prompt, stances, submitted, icon, status, id}) => {
        return {
          url: 'suggestions',
          method: 'POST',
          responseHandler,
          body: {
            prompt: prompt,
            stances: stances,
            dateSubmitted: submitted,
            icon: icon,
            question: null,
            user: id,
            status: status,
          },
        };
      },
    }),
    vote: builder.mutation<Answer, {answerId: string, vote: 1 | -1, questionId: string}>({
      query: ({ answerId, vote }) => {
        return {
          url: `answers/${answerId}/vote?v=${vote}`,
          method: 'POST',
          responseHandler,
        };
      },
      invalidatesTags: ['Leaderboard'],
    }),
  }),
});

export const {
  useSignInMutation, useSignUpMutation, useUpdateConsentMutation, useUpdateUserMutation, useGetCategoriesQuery, useGetQuestionsQuery, useQueryQuestionsQuery, useGetLeaderboardQuery, useAddAnswerMutation, useGetAnswersQuery,
  useVoteMutation, useGetSuggestionsQuery, useGetSuggestionsByUserQuery, useAddSuggestionMutation, useGetQuestionQuery, useGetAllAnswersQuery,
} = api;
