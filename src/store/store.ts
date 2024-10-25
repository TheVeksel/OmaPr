import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './features/postSlice';
import commentsReducer from './features/commentSlice';
import usersReducer from './features/userSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
