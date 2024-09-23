import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  isAdmin: false,
  error: null,
  adminUsername: "admin",
  adminPassword: "password123",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;
      const storedUser = JSON.parse(localStorage.getItem("user"));

      // Validate against stored user data
      if (
        storedUser &&
        storedUser.username === username &&
        storedUser.password === password
      ) {
        state.user = storedUser;
        state.isAuthenticated = true;
        state.error = null;
      } else if (
        username === state.adminUsername &&
        password === state.adminPassword
      ) {
        state.isAdmin = true;
      } else {
        state.error = "Invalid credentials";
      }
    },
    register: (state, action) => {
      const { username, password } = action.payload;
      const newUser = { username, password };

      localStorage.setItem("user", JSON.stringify(newUser));

      state.user = newUser;
      state.isAuthenticated = true;
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      // localStorage.removeItem("user");
    },
    forgot: (state, action) => {
      const { username, password } = action.payload;
      const newUser = { username, password };

      localStorage.setItem("user", JSON.stringify(newUser));

      state.user = newUser;
      state.isAuthenticated = true;
      state.error = null;
    },
  },
});

export const { login, register, logout, forgot } = userSlice.actions;
export default userSlice.reducer;
