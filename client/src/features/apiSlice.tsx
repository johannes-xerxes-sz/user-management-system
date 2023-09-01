import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001/api/v1/" }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<string, void>({
      query: () => "user",
    }),
    getUser: builder.query<string, string>({
      query: (user) => `user/${user}`,
    }),
    createUser: builder.mutation<string, Partial<string>>({
      query: (body) => ({
        url: "/user",
        method: "POST",
        body,
      }),
    }),
    editUser: builder.mutation<string, { user: number; body: Partial<string> }>({
      query: ({ user, body }) => ({
        url: `/users/${user}`,
        method: 'PUT',
        body,
      }),
    }),
    deleteUser: builder.query<void, { user: string }>({
      query: ({ user }) => ({
        url: `/user/${user}`,
        method: "PUT",
      }),
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
  useDeleteAllUsersQuery,
  useGetUserQuery,
  useEditUserMutation,
  useDeleteUserQuery,
} = api;
