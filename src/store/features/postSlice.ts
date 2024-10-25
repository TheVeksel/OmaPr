import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Post {
  id: number;
  title: string;
  content: string;
}

interface PostsState {
  posts: Post[];
}

const initialState: PostsState = {
  posts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
    },
    removePost: (state, action: PayloadAction<number>) => {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },
  },
});

export const { addPost, removePost } = postsSlice.actions;
export default postsSlice.reducer;
