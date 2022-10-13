import { configureStore } from '@reduxjs/toolkit';
import { api } from 'services/api';

import type { Middleware } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import errorReducer from './slices/errorSlice';

export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  if (action.error && action.meta.requestStatus === 'rejected') {
    console.log(action.error, action.payload);
  }

  return next(action);
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    error: errorReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware).concat(rtkQueryErrorLogger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
