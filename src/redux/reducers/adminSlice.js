import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  users: [],
  advertisements: [],
  profileDetails: {
    name: "Admin",
    email: "admin@example.com",
  },
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    fetchUsers(state, action) {
      state.users = action.payload;
    },
    blockUser(state, action) {
      const userId = action.payload;
      const user = state.users.find((user) => user.id === userId);
      if (user) user.isBlocked = true;
    },
    changePassword(state, action) {
      state.adminPassword = action.payload;
    },
    postAdvertisement(state, action) {
      state.advertisements.push(action.payload);
    },
    updateProfileDetails(state, action) {
      state.profileDetails = action.payload;
    },
    hideUserPost(state, action) {
      const postId = action.payload;
      const post = state.users
        .flatMap((user) => user.posts)
        .find((post) => post.id === postId);
      if (post) post.hidden = true;
    },
  },
});

export const {
  authenticateAdmin,
  logoutAdmin,
  fetchUsers,
  blockUser,
  changePassword,
  postAdvertisement,
  updateProfileDetails,
  hideUserPost,
} = adminSlice.actions;

export default adminSlice.reducer;
