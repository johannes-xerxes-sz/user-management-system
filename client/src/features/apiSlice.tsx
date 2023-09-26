import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_URL,
    // prepareHeaders: (headers, { getState }) => {
    //   const token = getState().auth.token;
    //   if (token) {
    //     headers.set("Authorization", `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  keepUnusedDataFor: 30,
  tagTypes: ["Post", "User"],
  endpoints: (builder) => ({
    getAllUsers: builder.query<string, void>({
      query: () => "user",
      providesTags: ["User"],
    }),
    getUser: builder.query<string, string>({
      query: (user) => `user/${user}`,
      providesTags: ["User"],
    }),
    createUser: builder.mutation<string, Partial<object>>({
      query: (body) => ({
        url: "/user",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
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
      providesTags: ["User"],
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
        invalidatesTags: ["User"],
      }
    ),
    deleteUser: builder.mutation<void, { user: string }>({
      query: ({ user }) => ({
        url: `/user/${user}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
    deleteAllUsers: builder.query<void, void>({
      query: () => ({
        url: `/user`,
        method: "DELETE",
      }),
      providesTags: ["User"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useCreateUserMutation,
  useLoginMutation,
  useLogoutQuery,
  useDeleteAllUsersQuery,
  useGetUserQuery,
  useEditUserMutation,
  useDeleteUserMutation,
} = api;
