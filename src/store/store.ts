// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from './features/commentSlice'
import usersReducer from './features/userSlice'
import newsOpenReducer from './features/newsOpenSlice';

export const store = configureStore({
  reducer: {
    comments: commentsReducer,
    users: usersReducer,
    newsOpen: newsOpenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
