/* eslint-disable no-return-await */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiUrl } from 'lib/constants';
import { RootState } from 'redux/store';

// @ts-ignore
import { API_KEY } from 'react-native-dotenv';
import axios from 'axios';
import { User } from 'redux/slices/authSlice';
import { Answer, Question } from 'redux/slices/questionSlice';

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
    signUp: builder.mutation<LoginResponse, {email: string, password: string, username: string, gender: string, birthday: Date}>({
      query: ({
        username, email, password, gender, birthday,
      }) => {
        return {
          url: 'signup',
          method: 'POST',
          body: {
            username, email, password, gender, birthday: birthday.toUTCString(),
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
    getCategories: builder.query<string[], void>({
      query: () => 'categories',
    }),
    getQuestions: builder.query<Question[], void>({
      query: () => 'questions',
    }),
    queryQuestions: builder.query<Question[], {q: string}>({
      query: (q) => `questions?q=${q}`,
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
  useVoteMutation,
} = api;
