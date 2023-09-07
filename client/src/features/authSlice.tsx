import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { api } from "./apiSlice";

export interface AuthState {
  name: string | null;
  token: string | null;
  currentUser: string | null;
}

const initialState: AuthState = {
  name: null,
  token: null,
  currentUser: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ name: string; token: string }>
    ) => {
      const { name, token } = action.payload;
      console.log("User name:", name);
      localStorage.setItem("user", JSON.stringify({ name, token }));
      return { ...state, name, token }; // Create and return a new state object
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.login.matchFulfilled,
      (state, action) => {
        console.log(action.payload, "action.payload");
        sessionStorage.setItem("user", JSON.stringify(action.payload));
        state.currentUser = action.payload;
      }
    );
  },
});

export const selectAuth = (state: RootState) => state.auth;

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
