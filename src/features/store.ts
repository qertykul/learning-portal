import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './coursesSlice';
import userReducer from './userSlice';
import progressReducer from './progressSlice';

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    user: userReducer,
    progress: progressReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 