import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      id: 1,
      username: "user1",
      posts: [{ id: 1, message: "User 1 Post", hidden: false }],
      isBlocked: false,
    },
    {
      id: 2,
      username: "user2",
      posts: [{ id: 2, message: "User 2 Post", hidden: false }],
      isBlocked: false,
    },
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
