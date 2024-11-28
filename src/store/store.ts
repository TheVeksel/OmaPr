import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from './features/commentSlice'
import usersReducer from './features/userSlice'
import loginReduser from './features/loginSlice'

export const store = configureStore({
  reducer: {
    comments: commentsReducer,
    users: usersReducer,
    login: loginReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
