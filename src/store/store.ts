// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from './features/commentSlice'
import usersReducer from './features/userSlice'

export const store = configureStore({
  reducer: {
    comments: commentsReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
