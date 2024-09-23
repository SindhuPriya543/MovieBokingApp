import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const postsReducer = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.unshift(action.payload); // Add new post to the top
    },
    hidePost: (state, action) => {
      const postIndex = state.posts.findIndex(
        (post) => post.id === action.payload
      );
      if (postIndex !== -1) {
        state.posts[postIndex].hidden = true;
      }
    },
  },
});

export const { addPost, hidePost } = postsReducer.actions;
export default postsReducer.reducer;
