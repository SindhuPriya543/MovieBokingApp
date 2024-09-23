import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  // Add other profile fields as needed
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      const { name, email, phone, address } = action.payload;
      state.name = name;
      state.email = email;
      state.phone = phone;
      state.address = address;
    },
    clearProfile: (state) => {
      return initialState; // Reset to initial state
    },
  },
});

export const { setProfile, clearProfile } = profileSlice.actions;
export default profileSlice.reducer;
