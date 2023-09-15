import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
  useDeleteUserMutation,
  useEditUserMutation,
} from "../../features/apiSlice";
// Define the prop types for your component

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField, InputLabel, Select } from "@mui/material"; // Import InputLabel and Select
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface BasicModalProps {
  onClose: () => void;
  open: boolean;
  user:
    | {
        row: {
          id: string;
          role: string;
          firstName: string;
          lastName: string;
          email: string;
          address: string;
        };
      }
    | object; // Update the type definition
  operationType: "edit" | "delete";
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BasicModal: React.FC<BasicModalProps> = ({
  onClose,
  open,
  user,
  operationType,
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    role: "user", // Set a default role (e.g., "user")
  });

  const [deleteUser, { isSuccess: deleteUserSuccess }] =
    useDeleteUserMutation();
  const [editUser, { isSuccess: editUserSuccess }] = useEditUserMutation();

  const userId = (user as { row: { id: string } }).row?.id;

  console.log(userId);
  const handleConfirm = async () => {
    if (operationType === "edit") {
      try {
        console.log(formData);
        console.log(userId);
        await editUser({ user: userId, body: formData }); // Include the user ID in the request
        // if (editUserSuccess) {
        //   toast.success(`User has been edited`);
        // }
      } catch {
        toast.error(`An error has occurred`);
      }
    } else if (operationType === "delete") {
      try {
        await deleteUser({ user: userId });
        // if (deleteUserSuccess) {
        //   toast.success(`User has been deleted`);
        // }
      } catch {
        toast.error(`An error has occurred`);
      }
    } else {
      toast.error(`An error has occurred`);
    }
    onClose();
  };

  useEffect(() => {
    if (editUserSuccess) {
      try {
        toast.success(`Great news! Your changes for ${formData.firstName} ${formData.lastName} have been saved successfully.`);
      } catch {
        toast.error(`Oops! It seems there was an issue while trying to edit ${formData.firstName} ${formData.lastName}. Please check your information and try again.`);
      }
    }
    if (deleteUserSuccess) {
      try {
        toast.success(`Success! The user has been deleted.`);
      } catch {
        toast.error(`Oops! Something went wrong while trying to delete the user. Please try again later.`);
      }
    }
  }, [deleteUserSuccess, editUserSuccess]);


  useEffect(() => {
    if (operationType === "edit" && user && "row" in user) {
      const { firstName, lastName, email, address, role } = user.row;
      setFormData({ firstName, lastName, email, address, role});
    }
  }, [operationType, user]);

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose} // Close the modal when onClose event occurs
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {operationType === "edit" ? "Edit User" : "Delete User"}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {operationType === "edit" ? (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    autoFocus
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    autoComplete="email"
                    placeholder="email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </Grid>
                {/* <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    id="password"
                    value={formData.password} // Set the value from state
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    } // Update the state on change
                  />
                </Grid> */}
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Address"
                    type="address"
                    id="address"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputLabel htmlFor="role">Role</InputLabel>
                  <Select
                    native
                    fullWidth
                    id="role"
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </Select>
                </Grid>
                <Button
                  onClick={handleConfirm}
                  type="submit"
                  fullWidth
                  startIcon={<EditIcon />}
                  variant="contained"
                  sx={{ mt: 3, mb: 2, bgcolor: "secondary.main" }}
                >
                  Edit user
                </Button>
              </Grid>
            ) : operationType === "delete" ? (
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <p>Are you sure you want to delete this user?</p>
                </Grid>
                <Button
                  onClick={handleConfirm}
                  fullWidth
                  variant="contained"
                  color="error"
                  type="submit"
                  startIcon={<DeleteIcon />}
                  sx={{ mt: 3, mb: 2, bgcolor: "secondary.main" }}
                >
                  Delete user
                </Button>
              </Grid>
            ) : null}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
