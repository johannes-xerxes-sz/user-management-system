import React, { useState } from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/material";
import EditDel from "../../popUp/EditDel";
import "./AllUsers.css";

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
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState({});
  const [operationType, setOperationType] = useState<"edit" | "delete">("edit"); // Default to "edit"

  const columns: GridColDef[] = [
    {
      field: "firstName",
      headerName: "First Name",
      minWidth: 150,
      flex: 1,
    },
    { field: "lastName", headerName: "Last Name", minWidth: 150, flex: 1 },
    { field: "email", headerName: "Email", minWidth: 150, flex: 1 },
    { field: "address", headerName: "Address", minWidth: 150, flex: 1 },
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
            onClick={() => handleEdit(params as object)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="Delete"
            onClick={() => handleDelete(params as object)}
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

  const handleEdit = (user: object) => {
    setSelectedUserId(user);
    setOperationType("edit");
    setEditModalOpen(true);
  };

  const handleDelete = (user: object) => {
    setSelectedUserId(user);
    setOperationType("delete");
    setDeleteModalOpen(true);
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
  };

  const handleDeleteModalClose = () => {
    setDeleteModalOpen(false);
  };

  return (
    <div style={{ height: 500 }}>
      <Box>
        <DataGrid rows={rows} columns={columns} className="custom-datagrid" />
        {/* Edit User Modal */}
        <EditDel
          open={editModalOpen}
          onClose={handleEditModalClose}
          user={selectedUserId}
          operationType={operationType}
        />

        {/* Delete User Modal */}
        <EditDel
          open={deleteModalOpen}
          onClose={handleDeleteModalClose}
          user={selectedUserId}
          operationType={operationType}
        />
      </Box>
    </div>
  );
};

export default AllUsers;
