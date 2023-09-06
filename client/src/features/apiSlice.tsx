import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_URL}),
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
    login: builder.mutation({
      query: (body: { email: string; password: string }) => ({
        url: "user/login",
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
  useLoginMutation,
  useDeleteAllUsersQuery,
  useGetUserQuery,
  useEditUserMutation,
  useDeleteUserQuery,
} = api;
