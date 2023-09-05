import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../reducers/UserReducer";

export const store = configureStore({
  reducer: {
    users: userReducer, // Use userReducer here
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
