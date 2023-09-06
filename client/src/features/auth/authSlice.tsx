import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface AuthState {
  name: string | null;
  token: string | null;
}

const initialState: AuthState = {
  name: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: ( 
      state,
      action: PayloadAction<{ name: string; token: string }>
    ) => {
      console.log("User name:", action.payload.name);
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: action.payload.name,
          token: action.payload.token,
        })
      );
      state.name = action.payload.name;
      state.token = action.payload.token;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;

export const { setUser } = authSlice.actions;

export default authSlice.reducer;

// // Define the types for your state
// interface AuthState {
//   user: any; // Replace 'any' with the actual type of your user
//   token: string | null;
// }

// // Define the initial state
// const initialState: AuthState = {
//   user: null,
//   token: null,
// };

// // Create the auth slice
// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     setCredentials: (state, action: PayloadAction<{ user: any; accessToken: string }>) => {
//       const { user, accessToken } = action.payload;
//       state.user = user;
//       state.token = accessToken;
//     },
//     logOut: (state) => {
//       state.user = null;
//       state.token = null;
//     },
//   },
// });

// // Export actions and reducer
// export const { setCredentials, logOut } = authSlice.actions;

// export default authSlice.reducer;

// // Selectors with explicit return types
// export const selectCurrentUser = (state: { auth: AuthState }) => state.auth.user;
// export const selectCurrentToken = (state: { auth: AuthState }) => state.auth.token;
