import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001/api/v1/" }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<string, void>({
      query: () => "user",
    }),
    getUser: builder.query<string, string>({
      query: (user) => `user/${user}`,
    }),
  }),
});

export const { useGetAllUsersQuery, useGetUserQuery } = userApi;
