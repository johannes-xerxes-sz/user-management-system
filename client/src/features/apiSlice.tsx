import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_URL }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<string, void>({
      query: () => "user",
    }),
    getUser: builder.query<string, string>({
      query: (user) => `user/${user}`,
    }),
    createUser: builder.mutation<string, Partial<object>>({
      query: (body) => ({
        url: "/user",
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation<string, Partial<object>>({
      query: (body) => ({
        url: "user/login",
        method: "POST",
        body,
      }),
    }),
    logout: builder.query<string, void>({
      query: () => `user/logout`,
    }),
    forgotPassword: builder.mutation<string, Partial<string>>({
      query: (body) => ({
        url: "/user/forgotpassword",
        method: "POST",
        body,
      }),
    }),
    editUser: builder.mutation<string, { user: string; body: Partial<object> }>(
      {
        query: ({ user, body }) => ({
          url: `/user/${user}`,
          method: "PUT",
          body,
        }),
      }
    ),
    deleteUser: builder.mutation<void, { user: string }>({
      query: ({ user }) => ({
        url: `/user/${user}`,
        method: "DELETE",
      }),
      // invalidatesTags: (result, error, arg) => [{ type: "Delete", id: user.id }],
    }),
    deleteAllUsers: builder.query<void, void>({
      query: () => ({
        url: `/user`,
        method: "PUT",
      }),
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useCreateUserMutation,
  useLoginMutation,
  useDeleteAllUsersQuery,
  useGetUserQuery,
  useEditUserMutation,
  useDeleteUserMutation,
} = api;
