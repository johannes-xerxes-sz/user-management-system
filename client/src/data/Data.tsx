import * as React from "react";
import AllUsers from "../components/body/user/AllUsers";
import AddUser from "../components/popUp/AddUser";
import CssBaseline from "@mui/material/CssBaseline";
import { useGetAllUsersQuery } from "../features/apiSlice";
import Box from "@mui/material/Box";
import CircularProgress from '@mui/material/CircularProgress';
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';

export const Data = () => {
  const { data: allUsersData, isLoading } = useGetAllUsersQuery();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (isLoading) return <CircularProgress />;

  return (
    <div>
      <Box
        m={1}
        display="flex"
        justifyContent="flex-end" 
        alignItems="flex-end"
      >
        <Button variant="contained" color="secondary" onClick={handleOpen}>
          <AddIcon /> user
        </Button>
        <AddUser handleClose={handleClose} open={open} />
      </Box>
      <Box>
        <CssBaseline />
        <AllUsers allUsersData={allUsersData ?? undefined} />
      </Box>
    </div>
  );
};

export default Data;