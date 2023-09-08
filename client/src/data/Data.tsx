import * as React from "react";
import AllUsers from "../components/body/user/AllUsers";
import AddUser from "../components/popUp/AddUser";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useGetAllUsersQuery } from "../features/apiSlice";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";

const defaultTheme = createTheme();

export const Data = () => {
  const { data: allUsersData, isLoading } = useGetAllUsersQuery();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <Box
        m={1}
        //margin
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Add new user
        </Button>
      </Box>
      <AddUser handleClose={handleClose} open={open} />
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        {/* @ts-ignore */}
        <AllUsers allUsersData={allUsersData ?? undefined} />
      </ThemeProvider>
    </div>
  );
};

export default Data;
