// import React from "react";
import AllUsers from "../components/body/user/AllUsers";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useGetAllUsersQuery } from "../features/apiSlice";

const defaultTheme = createTheme();

export const Data = () => {
  const { data: allUsersData, isLoading } = useGetAllUsersQuery();

  if (isLoading) return <h1>Loading...</h1>;
  // @ts-ignore
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
       {/* @ts-ignore */}
      <AllUsers allUsersData={allUsersData ?? undefined} />
    </ThemeProvider>
  );
};

export default Data;
