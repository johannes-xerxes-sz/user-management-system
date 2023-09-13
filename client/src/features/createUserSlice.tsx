import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface AuthState {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  password: string | null;
  address: string | null;
}

const initialState: AuthState = {
  firstName: null,
  lastName: null,
  email: null,
  password: null,
  address: null,
};

export const authSlice = createSlice({
  name: "create",
  initialState,
  reducers: {
    createUser: ( 
      state,
      action: PayloadAction<{ firstName: string; lastName: string; email: string; password: string; address: string;}>
    ) => {

      localStorage.setItem(
        "create",
        JSON.stringify({
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
          password: action.payload.password,
          address: action.payload.address,
        })
      );
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.address = action.payload.address;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;

export const { createUser } = authSlice.actions;

export default authSlice.reducer;
