import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface AuthState {
  name: string | null;
  token: string | null;
  role: string | null;
}

const initialState: AuthState = {
  name: null,
  token: null,
  role: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: ( 
      state,
      action: PayloadAction<{ name: string; token: string; role: string}>
    ) => {
      console.log("User name:", action.payload.name);
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: action.payload.name,
          token: action.payload.token,
          role: action.payload.role,
        })
      );
      state.name = action.payload.name;
      state.token = action.payload.token;
      state.role = action.payload.role;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
