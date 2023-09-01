import React from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  role: string;
}

interface AllUsersProps {
  allUsersData: User[] | undefined;
}

const AllUsers: React.FC<AllUsersProps> = ({ allUsersData }) => {
  const columns: GridColDef[] = [
    { field: "firstName", headerName: "First Name", minWidth: 150, flex: 1 },
    { field: "lastName", headerName: "Last Name", minWidth: 150, flex: 1 },
    { field: "email", headerName: "Email", minWidth: 200, flex: 1 },
    { field: "address", headerName: "Address", minWidth: 300, flex: 1 },
    { field: "role", headerName: "Role", minWidth: 120, flex: 1 },
    {
      field: "options",
      headerName: "Options",
      minWidth: 150,
      flex: 1,
      renderCell: (params) => (
        <>
          <IconButton
            aria-label="Edit"
            onClick={() => handleEdit(params.id as string)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="Delete"
            onClick={() => handleDelete(params.id as string)}
          >
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];

  const rows: GridRowsProp = (allUsersData as User[])?.map((user: User) => ({
    id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    address: user.address,
    role: user.role,
  }));

  // @ts-ignore
  const handleEdit = (userId: string) => {
    // Handle edit logic here
  };
  
  // @ts-ignore
  const handleDelete = (userId: string) => {
    // Handle delete logic here
  };

  return (
    <div style={{ height: 700 }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};

export default AllUsers;