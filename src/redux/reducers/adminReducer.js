import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    // Sample users
    { id: 1, name: "User1", blocked: false, profile: {}, posts: [] },
    { id: 2, name: "User2", blocked: false, profile: {}, posts: [] },
  ],
  adminMessages: [],
};

const adminReducer = createSlice({
  name: "admin",
  initialState,
  reducers: {
    // Action to block/unblock a user
    blockUser: (state, action) => {
      const user = state.users.find(
        (user) => user.id === action.payload.userId
      );
      if (user) {
        user.blocked = action.payload.blocked;
      }
    },
    // Action to reset/change a user's password
    resetPassword: (state, action) => {
      const user = state.users.find(
        (user) => user.id === action.payload.userId
      );
      if (user) {
        user.password = action.payload.newPassword;
      }
    },
    // Action to post admin messages or advertisements
    postAdminMessage: (state, action) => {
      state.adminMessages.push(action.payload.message);
    },
    // Action to hide a specific user's post
    hideUserPost: (state, action) => {
      const user = state.users.find(
        (user) => user.id === action.payload.userId
      );
      if (user) {
        const post = user.posts.find(
          (post) => post.id === action.payload.postId
        );
        if (post) {
          post.hidden = true;
        }
      }
    },
    // Action to update/manage user profile details
    updateProfile: (state, action) => {
      const user = state.users.find(
        (user) => user.id === action.payload.userId
      );
      if (user) {
        user.profile = { ...user.profile, ...action.payload.updatedProfile };
      }
    },
    logoutAdmin(state) {
      state.isAuthenticated = false;
    },
  },
});

export const {
  blockUser,
  resetPassword,
  postAdminMessage,
  hideUserPost,
  updateProfile,
} = adminReducer.actions;
export default adminReducer.reducer;
