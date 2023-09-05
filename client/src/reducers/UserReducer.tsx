// UserReducer.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state for the user slice
const initialState: UserState = {
  users: [],
  // Add any other user-related state properties here
};

// Define the user state type
interface UserState {
  users: User[];
  // Add any other user-related state properties here
}

// Define the user object type
interface User {
  id: number;
  name: string;
  // Add any other user-related properties here
}

// Create a user slice using createSlice from Redux Toolkit
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    // Define other user-related reducer actions here
  },
});

// Export the actions and reducer from the user slice
export const { addUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
